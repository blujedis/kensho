import { createMutationObserver, parseNativeAttributes, parseDataType, castDataType, canPlaceholder, createPlaceholder, } from './utils';
import { getProperty, setProperty, hasProperty, mergeObject, flattenKeys, ensureArray } from './helpers';
import type { ElementGetterSetter, ElementType, FormElement, FormElementValue, FormOptions, DeepPartial, FormState, FieldStateItem, Path, KeyOfAny, FormElementConfig, FormField, NativeValidatorAttributes, ErrorState, SubscribeState, FieldStateMap } from './types';
import { DEFAULT_FORM_STATE } from './constants';
import { TYPES, TYPE_MAP } from './getset';

/**
 * Creates the Kensho form controller context for managing HTML forms.
 * 
 * @example
 * <script>
 *    const form = document.getElementById('myform');
 *    const { register } = createController({ options... });
 *    register(form);
 * </script>
 * <form id="myform">
 *    <input type="text" name="firstname" />
 * </form>
 * 
 * @param options form controller options for creating the Kensho form controller.
 */
export function createController<T extends Record<string, unknown>, F extends boolean = false>(options: FormOptions<T & { [key: string]: unknown }, F>) {

  type ElementKey = KeyOfAny<Path<T>>;
  type Data = T & { [key: string]: unknown };

  options = {
    validateInit: false,
    validateChange: true,
    flattenErrors: false as F,
    placeholders: false,
    mergeUnbound: true,
    unboundAttribute: 'data-unbound',
    onCoerce: true,
    ...options
  };

  options.initialValues = { ...options.initialValues } as Data;
  // const initialKeys = flattenKeys(options.initialValues);

  // FORM & CHILD ELEMENTS //

  let _form: HTMLFormElement | null = null;
  const _elements = {} as Record<ElementKey, FormElementConfig>;

  // FORM, FIELD & ERROR STATES //

  let _formState: FormState = { ...DEFAULT_FORM_STATE };
  let _fieldState = {} as Record<ElementKey, FieldStateItem>;
  let _errorState = {} as ErrorState<Data, F>;

  // TEAR DOWN 

  let _unsubscribeMutationObserver: () => void;
  let _subscribers = [] as ((state: SubscribeState<Data, F>) => void)[];

  // CONTROLLER CONTEXT

  const context = {
    form: _form,
    register,
    field,
    getValue,
    getValues,
    setValue,
    setValues,
    validate,
    getNativeValidators,
    reset,
    submit,
    subscribe,
    unsubscribe,
    destroy,
  };

  // STATE SET & REMOVE //

  /**
   * Gets the form controller's current state.
   */
  function getState(): SubscribeState<Data, F> {
    const _fields = Object.entries(_fieldState).reduce((a, [key, val]) => {
      setProperty(a, key, val);
      return a;
    }, {} as FieldStateMap<Data>);
    return {
      ..._formState,
      errors: _errorState,
      fields: _fields
    };
  }

  /**
   * Subscribes a listener for published state events.
   * 
   * @param fn the function to be called when state is published.
   */
  function subscribe(fn: (state: SubscribeState<Data, F>) => void) {
    if (!_subscribers.includes(fn))
      _subscribers.push(fn);
    return () => {
      _subscribers = _subscribers.filter(s => s !== fn);
    };
  }

  /**
   * Unsubscribes listener or unsubscribes all if no listner is provided.
   * 
   * @param fn an optional function to unsubscribe.
   */
  function unsubscribe(fn?: (...args: any[]) => void) {
    if (!fn)
      _subscribers = [];
    else
      _subscribers = _subscribers.filter(v => v !== fn);
  }

  /**
   * Updates the form controller's state.
   * 
   * @param newState the new controller state to be applied.
   */
  function updateFormState(newState = {} as Partial<FormState>) {
    const hasErrors = Object.keys(_errorState || {}).length > 0;
    _formState = {
      ..._formState,
      valid: !hasErrors,
      invalid: hasErrors,
      ...newState
    };
    if (_formState.initialized) {
      for (const pub of _subscribers) {
        pub(getState());
      }
    }
  }

  /**
   * Updates a field's state.
   * 
   * @param name  the name of the field to update.
   * @param newState the new state for the field.
   */
  function updateFieldState(name: ElementKey, newState: Partial<FieldStateItem>) {
    const hasErr = hasProperty(_errorState, name);
    _fieldState[name] = {
      ..._fieldState[name],
      valid: !hasErr,
      invalid: hasErr,
      ...newState
    };
    const { hasDirty, hasTouched } = getDirtyTouched();
    const dirty = hasDirty;
    const pristine = !hasTouched && !hasDirty;
    updateFormState({ dirty, pristine } as any);
  }

  /**
   * Removes a field from state.
   * 
   * @param name the name of the field to remove from state.
   */
  function removeFieldState(name: ElementKey) {
    const { [name]: omit, ...newState } = _fieldState;
    _fieldState = newState as typeof _fieldState;
    updateFormState();
  }

  // function getFields() {
  //   return Object.keys(elements).reduce((a, key) => {
  //     a[key] = field(key);
  //     return a;
  //   }, {} as any) as Record<ElementKey, FormField<FormElement>>;
  // }

  // VALIDATION //

  /**
   * Gets a normalize validator function warns if not enabled.
   */
  function getValidator() {
    return (options.onValidate || (() => {
      const hasWindow = typeof window !== 'undefined';
      const hasWarned = hasWindow && ((window as any).__novalidator__ === 1);
      if (options.onValidate !== false && !_formState.initialized && !hasWarned) {
        console.warn('Failed to validate, validation handler NOT defined. To suppress this warning set "validator:false"');
        if (hasWindow) (window as any).__novalidator__ = 1;
      }
    })) as any;
  }

  /**
   * Validates from for all known keys/values.
   * 
   * @example
   * const { validate } = useKensho({ options... });
   * const result = await validate({ firstName: 'Milton', email: 'bad.email@' });
   * result = { email: [`Email contains unsupported format.`] };
   * 
   * @param values the keys and values to be validated.
   */
  async function validate<U extends Record<string, unknown>>(values: U): Promise<ErrorState<Data, F>>;

  /**
   * Validates from for all known keys/values.
   * 
   * @example
   * const { validate } = useKensho({ options... });
   * const result = await validate(['firstname', 'email']);
   * result = { email: [`Email contains unsupported format.`] };
   * 
   * @param values the keys and values to be validated.
   */
  async function validate(names?: ElementKey | ElementKey[]): Promise<ErrorState<Data, F>>;
  async function validate<U extends Record<string, unknown>>(namesOrValues?: ElementKey | ElementKey[] | U) {

    if (_formState.validating)
      return _errorState;

    let names = typeof namesOrValues === 'string' || Array.isArray(namesOrValues) ? typeof namesOrValues === 'string' ? [namesOrValues] : namesOrValues as ElementKey[] : null;

    let values = !Array.isArray(namesOrValues) && namesOrValues !== null && typeof namesOrValues === 'object' ? namesOrValues as U : null;

    const isAllFields = !values;

    values = values || getValues() as U;
    names = names || flattenKeys(values);

    const validateHandler = getValidator();
    updateFormState({ validating: true });

    const result = await validateHandler(values, names, context) as ErrorState<T, F>;
    const invalid = typeof result !== 'undefined' && result !== null || !!Object.keys(result).length;

    if (!invalid) { // valid set empty state.
      _errorState = {} as ErrorState<Data, F>;
    }
    else if (isAllFields) { // if all fields state is the result.
      _errorState = result;
    }
    else { // filter only proivided field names.
      _errorState = (names as ElementKey[]).reduce((a, c) => {
        const errors = getProperty(_errorState as any, c);
        if (options.flattenErrors && errors)
          a[c] = errors
        else if (!options.flattenErrors && errors)
          setProperty(a, c, errors);
        return a;
      }, {} as any);
    }

    updateFormState({ validating: false, invalid, valid: !invalid });
    return _errorState;

  }

  // GET & SET VALUES //

  /**
   * Gets the keys for all known elements/fields.
   */
  function getBoundKeys() {
    return Object.keys(_elements);
  }

  /**
   * Merge two arrays of strings.
   * 
   * @param target the target array of keys.
   * @param source additional source array of keys.
   */
  // function mergeKeys(target: ElementKey[], source: ElementKey[]) {
  //   return [...(new Set([...target, ...source]))];
  // }

  /**
   * Gets an array of bound elements/fields.
   */
  function getElements() {
    return Object.keys(_elements).reduce((a, c) => (Array.isArray(c) ? [...a, ...c] : [...a, c]), [] as FormElement[])
  }

  /**
   * Gets the value of an element bound or virtual.
   * 
   * @param name the name of the element to get value for.
   * @param cast when true or function is provided use to coerce the value.
   */
  function getValue(name: ElementKey, cast = options.onCoerce): FormElementValue {
    const conf = _elements[name];
    if (!conf) return undefined;
    const handlers = TYPE_MAP[conf.type as keyof typeof TYPE_MAP] as ElementGetterSetter;
    let val = handlers[0](conf);
    if (cast) {
      if (cast === true)
        val = castDataType(conf.dataType, conf.dataTypeOptions, val);
      else
        // call user defined data cast method.
        val = cast(name as string, val, { dataType: conf.dataType, dataTypeOptions: conf.dataTypeOptions });
    }
    val = typeof val === 'undefined' || val === null || val === 'undefined' ? '' : val;
    return val;
  }

  /**
   * Gets values for all elements.
   * 
   * @param canTransform when false prevents transform function call (possible future use.)
   */
  function getValues(canTransform = true): Required<Data> {
    let obj = {} as any;
    const keys = getBoundKeys();
    for (const key of keys) {
      // don't transform here too many calls if is function.
      const val = getValue(key);
      if (typeof val !== 'undefined')
        setProperty(obj, key, val);
    }
    // some init values may be missing if unbound
    // should we merge them back into the values?
    if (options.mergeUnbound) 
      obj = mergeObject({ ...options.initialValues }, obj);
    if (typeof options.onTransform === 'function' && canTransform)
      obj = options.onTransform(obj);
    return obj;
  }

  /**
   * Sets the value for a field.
   * 
   * @param name the name of the field to be set.
   * @param value the value of the field to be set.
   */
  function setValue(name: ElementKey, value: FormElementValue) {
    if (typeof value === 'undefined')
      return;
    const conf = _elements[name];
    if (!conf)
      return;
    const handlers = TYPE_MAP[conf.type as keyof typeof TYPE_MAP] as ElementGetterSetter;
    const setterHandler = handlers[1] as (...args: any[]) => void;
    setterHandler(conf, value);
  }

  /**
   * Sets values for bound and/or virtual fields.
   * 
   * @param values an object containing values to be set.
   */
  function setValues<U extends Record<string, unknown>>(values: U) {
    if (typeof values === 'undefined')
      return;
    const entries = Object.entries(_elements);
    if (!entries || !entries.length) return;
    for (const [key,] of entries) {
      const val = getProperty(values, key);
      setValue(key, val as FormElementValue);
    }
  }

  /**
   * Gets the default value for known field/element. 
   * 
   * @param name the name of the field/element to get default value for.
   */
  function getDefaultValue(name: ElementKey) {
    const conf = _elements[name];
    if (!conf) return undefined;
    return conf.defaultValue;
  }

  /**
   * Gets all default values both bound elements and virtuals.
   */
  function getDefaultValues() {
    return getBoundKeys().reduce((a, c) => {
      const conf = _elements[c];
      setProperty(a, c, conf.defaultValue);
      return a;
    }, {} as Record<string, unknown>);
  }

  /**
   * Updates the default values for fields/elements, optionally replaces initial values.
   * 
   * @param values the values to be updated.
   * @param replaceInitial when true initial values are replaced.
   */
  function updateDefaultValues(values?: Record<string, unknown>, replaceInitial = false) {
    if (!values) return;
    if (replaceInitial)
      options.initialValues = values as Data;
    // Iterate elements and update default values.
    for (const [key, val] of Object.entries(_elements)) {
      let value = getProperty(values, key);
      if (Array.isArray(value) && val.type !== 'select-multiple') {
        console.warn(`Element ${key} default value is an Array but is not of type select-multiple. Only the first value will be used.`);
        value = value[0] || '';
      }
      if (val.type === 'select-multiple')
        value = typeof value === 'undefined' ? [] : !Array.isArray(value) ? [value] : value;
      _elements[key].defaultValue = value as FormElementValue;
    }
  }

  /**
   * Parses an element for any native validators. This can be helpful when used with
   * your custom validator function.
   * 
   * @param name the name of the element to parse.
   */
  function getNativeValidators(name: ElementKey): NativeValidatorAttributes | NativeValidatorAttributes[] {
    const el = _elements[name]?.el;
    if (!el || !(el instanceof HTMLElement))
      return {} as NativeValidatorAttributes;
    if (Array.isArray(el))
      return el.map(v => parseNativeAttributes(v));
    return parseNativeAttributes(el)
  }

  /**
   * Iterates field states check if any are dirty or touched.
   */
  function getDirtyTouched() {
    let hasDirty = false;
    let hasTouched = false;
    for (const [, val] of Object.entries(_fieldState)) {
      if (hasDirty && hasTouched) break;
      hasDirty = val.dirty;
      hasTouched = val.touched;
    }
    return {
      hasDirty,
      hasTouched
    };
  }

  // EVENTS //

  /**
   * Handles field state update when form element is touched.
   * 
   * @param e  event handler passed when element is touched.
   */
  function onTouched(e: Event) {
    if (_formState.submitted) return;
    const el = e.currentTarget as FormElement;
    updateFieldState(el.name, { touched: true });
    el.removeEventListener('click', onTouched);
    el.removeEventListener('touchend', onTouched);
  }


  /**
   * Handles change events updating element value.
   * 
   * @param name the name of the field/element to handle change for.
   * @param value the value to be set from change.
   */
  async function onChange(name: ElementKey, value?: FormElementValue): Promise<void>;

  /**
   * Handles change events when element has changed.
   * 
   * @param event change event passed on element changed.
   */
  async function onChange(event: Event): Promise<void>;
  async function onChange(eventOrName: Event | ElementKey, value?: FormElementValue) {
    if (_formState.submitted) return;
    let el: FormElement;
    let name = eventOrName as ElementKey;
    let isVirtual = false;
    if (typeof eventOrName !== 'string') {
      el = (eventOrName as Event).currentTarget as FormElement;
      name = el.name;
    }
    else {
      const conf = _elements[name];
      isVirtual = conf.virtual;
    }
    value = value || getValue(name);
    const defaultValue = getDefaultValue(name);
    if (isVirtual)
      setValue(name, value);
    if (value !== defaultValue)
      updateFieldState(name, { dirty: true, touched: true, pristine: false, value });
    else if (value === defaultValue)
      updateFieldState(name, { dirty: false, touched: true, pristine: false });
    if (options.validateChange)
      await validate(name);
  }

  /**
   * Handles form reset.
   * 
   * @param e the event provided on form reset.
   */
  function onReset(e: Event) {
    e.preventDefault();
    reset();
  }

  /**
   * Handles form submit events either by "submit" button or calling submit handler
   * exposed by the form controller context.
   * 
   * @param e the event provided on form submission.
   */
  async function onSubmit(e?: SubmitEvent | Event) {
    if (e)
      e.preventDefault();
    // Don't allow submit if already submitting, submitted or is invalid.
    if (_formState.submitting || _formState.submitted || _formState.invalid) return false;
    updateFormState({ submitting: true, submitted: false });
    const values = getValues();
    const errors = await validate();
    if (_formState.invalid) {
      options.onError && options.onError(errors, context);
      return false;
    }
    options.onSubmit(values, context);
    updateFormState({ submitting: false, submitted: true, pristine: false });
    return false;
  }

  /**
   * Reset the form using original values or provide new values.
   * 
   * @param values optional values to reset form with.
   * @param replaceDefaults when true the initial values are replaced.
   */
  async function reset<U extends Record<string, unknown> = Data>(values?: U, replaceDefaults = false) {
    if (!_form) return;
    updateDefaultValues(values, replaceDefaults);
    _form.reset();
    const resetData = (!values ? getDefaultValues() : values) as DeepPartial<T>;
    setValues(resetData);
    _errorState = {} as any;
    updateFormState({ ...DEFAULT_FORM_STATE, initialized: true });
    if (options.validateInit)
      await validate();
  }

  function submit(e?: Event) {
    onSubmit(e);
  }

  // INIT & BINDING/UNBINDING //

  /**
   * Gets or creates a form field.
   * 
   * @example
   * const last = field('last_name', 'Waddams');
   * const mobile = field('phone.mobile', '8885551234');
   * 
   * @param name the name of the field to get or create.
   * @param value the optional default value for the field.
   */
  function field(name: ElementKey, value?: FormElementValue): FormField;

  /**
   * Creates a form field by element or a field virtual by configuration.
   * 
   * @example
   * const email = field({ name: 'email', type: 'email' });
   * 
   * const ref = useRef<HTMLSelectElement | null>(null);
   * <select ref={ref} name="state">
   *    <option value="FL">Florida</option>
   *    <option value="TX">Texas</option>
   * </select>
   * const state = field(ref);
   * 
   * @param name the name of the field to get or create.
   * @param value the optional default value for the field.
   */
  function field(element: Partial<FormElement>): FormField;

  function field(nameOrElement: ElementKey | Partial<FormElement>, value?: FormElementValue) {

    let name = '' as ElementKey;
    let newEl: Partial<FormElement> | undefined;

    if (!Array.isArray(nameOrElement) && nameOrElement !== null && typeof nameOrElement === 'object') {
      newEl = nameOrElement;
      name = newEl.name as string;
    }
    else if (typeof value !== 'undefined' && typeof nameOrElement === 'string') {
      newEl = { name: nameOrElement, type: 'text', value } as Partial<FormElement>;
      name = nameOrElement;
    }

    const isElement = typeof window !== 'undefined' && (newEl instanceof Element);

    // No bound config or not an HTMLElement is virtual.
    if (!_elements[name]) {
      const defaults = { dataset: {}, type: 'text', virtual: !isElement };
      newEl = { ...defaults, ...newEl } as Partial<FormElement>;
      bind(newEl as FormElement);
    }

    const conf = _elements[name];
    const el = conf?.el;
    const fs = _fieldState[name] || {};

    let timeoutId: NodeJS.Timeout;

    const result = {
      ...fs,

      name,

      /**
       * Returns the element or elements for the field. Optionally
       * you can cast the value by type.
       * 
       * @example
       * const el = field('name').element<HTMLInputElement>();
       * const els = field('radios').element<HTMLInputElement[]>();
       */
      element: <M extends FormElement | FormElement[]>() => {
        return el as M;
      },

      /**
       * Gets the fields current value using getter.
       */
      get value() { return getValue(name); },

      /**
       * Sets the fields current value using setter.
       * 
       * @example
       * const name = field('name');
       * name.value = 'Milton Waddams';
       * 
       * @param value the form element value.
       */
      set value(value: FormElementValue) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          onChange(name, value);
        }, 400)
      },

      /**
       * Resets the state for the field and only this field.
       */
      reset: () => {
        if (_formState.submitted) return;
        const value = getDefaultValue(name);
        setValue(name, value);
        updateFieldState(name, { dirty: false, touched: false, pristine: true, value });
      },

      /**
       * Validates only the current field.
       */
      validate: async () => {
        if (_formState.submitted) return;
        const result = await validate(name);
        return result[name as keyof typeof result];
      }

    } as FormField;

    return result;

  }

  // function normalizeDefaultValue(el: HTMLElement & { name: string, value: any, checked: boolean }) {
  //   let defaultValue = getProperty(options.initialValues, el.name);
  //   defaultValue  = typeof defaultValue === 'undefined' ? el.value : defaultValue;

  // }

  /**
   * Binds a collection of elements to the form controller for management.
   * 
   * @param collection the form element collection to be bound to the controller
   */
  function bind(...collection: FormElement[]) {

    for (const el of collection) {

      const isValid = TYPES.includes(el?.type);
      const isUnbound = el.hasAttribute && el.hasAttribute(options.unboundAttribute || 'data-unbound');

      // Must be valid type have a name attribute and not be opted out by user.
      if (!isValid || !el.name || isUnbound) continue;

      const key = el.name as keyof typeof _elements;

      let defaultValue = options.defaultGetter(key, el, (options.initialValues || {}) as T);

      if (Array.isArray(defaultValue) && el.type !== 'select-multiple') {
        console.warn(`Element ${el.name} default value is an Array but is not of type select-multiple. Only the first value will be used.`);
        defaultValue = defaultValue[0] || '';
      }

      const parsedDataType = parseDataType(el.dataset.datatype, defaultValue);

      // Radio may have multiple elements.
      if (el.type === 'radio') {
        //  _elements[key] = _elements[key] || {};
        const conf = _elements[key] || {};
        conf.el = ensureArray(conf.el);
        if ((conf.el as FormElement[]).includes(el)) continue;
        (conf.el as FormElement[]).push(el);
        conf.type = el.type;
        conf.defaultValue = defaultValue || ((el as HTMLInputElement).checked && el.value) || '';
        conf.virtualValue = conf.defaultValue;
        conf.dataType = parsedDataType.dataType;
        conf.dataTypeOptions = parsedDataType.dataTypeOptions;
        conf.virtual = el.virtual || false;
        _elements[key] = conf;
      }
      else {
        if (typeof _elements[key] !== 'undefined') continue;
        const conf = { type: el.type as ElementType, el, defaultValue: defaultValue || el.value, virtualValue: defaultValue || el.value, ...parsedDataType, virtual: el.virtual || false };
        _elements[key] = conf;
      }

      // Can't set placeholder on virtual.
      if (options.placeholders && canPlaceholder(el, options.placeholders) && !el.hasAttribute('placeholder') && !el.virtual) {
        const placeholder = createPlaceholder(el.name);
        if (placeholder)
          el.setAttribute('placeholder', placeholder);
      }

      if (!el.virtual) {
        el.addEventListener('change', onChange);
        el.addEventListener('click', onTouched);
        el.addEventListener('touchend', onTouched);
      }

      // Setter determines how to set the value for element type,
      // just pass key and any initial value.
      if (typeof defaultValue !== 'undefined')
        setValue(key, getProperty(options.initialValues, key as string) as FormElementValue);


      updateFieldState(key, {
        pristine: true,
        value: defaultValue,
        valid: true,
        invalid: false,
        touched: false,
        dirty: false
      });

    }

  }

  /**
   * Unbinds a collection of elements from the form controller.
   * 
   * @param collection the collection of elements to be unbound from the form controller.
   */
  function unbind(...collection: FormElement[]) {

    for (const el of collection) {

      const conf = _elements[el.name];
      if (!conf) continue;
      // If element key is array filter only 
      // current element. If none left after
      // delete then entire key.
      if (Array.isArray(conf.el)) {
        _elements[el.name].el = conf.el.filter(e => e !== el);
        const len = (_elements[el.name].el as FormElement[]).length;
        if (!len)
          delete _elements[el.name]
      }

      else {
        delete _elements[el.name];
      }

      removeFieldState(el.name);

      if (!conf.virtual) {
        el.removeEventListener('change', onChange);
        el.removeEventListener('click', onTouched);
        el.removeEventListener('touchend', onTouched);
      }

    }

  }

  /**
   * Destroys the Kensho form controller instance unbinding from form, removing elements.
   */
  function destroy() {
    unbind(...getElements());
    if (_unsubscribeMutationObserver) _unsubscribeMutationObserver();
    if (_form) {
      _form.removeAttribute('novalidate');
      _form.removeEventListener('submit', onSubmit);
      _form.removeEventListener('reset', onReset);
    }
  }

  /**
   * Initializes the form binding elements and binding event listeners.
   * 
   * @param form the form to be initialized.
   */
  async function initForm(form: HTMLFormElement) {
    _form = form;
    bind(...(Array.from(form.elements) as FormElement[]));
    form.setAttribute('novalidate', 'novalidate');
    form.addEventListener('submit', onSubmit);
    form.addEventListener('reset', onReset);
    if (options.subscribe)
      subscribe(options.subscribe);
    if (options.validateInit)
      await validate(options.initialValues as Data);
    else
      setTimeout(() => {
        updateFormState({});
      })
  }

  /**
   * Registers a form with the controller.
   * 
   * @param form the form to register
   */
  function register(f: HTMLFormElement | null) {
    if (!f) return { destroy };
    initForm(f).then(() => {
      updateFormState({ initialized: true });
    });
    _unsubscribeMutationObserver = createMutationObserver(f, (el, type) => {
      if (_formState.submitted) return;
      if (type === 'remove')
        unbind(el as FormElement);
      else
        bind(el as FormElement);
    }, options.mutationNodes);
    return {
      destroy
    };

  }

  return context;

}
