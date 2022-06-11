
import getProperty from 'lodash.get';
import setProperty from 'lodash.set';
import hasProperty from 'lodash.has';
import { cheapUniq, createMutationObserver, ensureArray, parseNativeAttributes, toFlatMap, castDataType, parseDataType } from './utils';
import type { ElementGetterSetter, ElementType, FormDataValue, FormElement, FormElementValue, FormOptions, DeepPartial, FormState, FieldStateItem, Path, KeyOfAny, FormElementConfig, FormField, NativeValidatorAttributes, ErrorState, FieldState, SubscribeState, DataType } from './types';
import { createStore } from './store';
import { TYPES, TYPE_MAP } from './getset';

const DEFAULT_FORM_STATE = {
  initialized: false,
  validating: false,
  pristine: true,
  dirty: false,
  valid: true,
  invalid: false,
  submitting: false,
  submitted: false,
};

export function useForm<T extends Record<string, unknown>, F extends boolean = false>(options: FormOptions<T, F>) {

  type ElementKey = KeyOfAny<Path<T>>;
  type FormContext = typeof context;

  options = {
    initValidate: true,
    flattenOutput: false as F,
    castValues: true,
    ...options
  };

  options.initalValues = { ...options.initalValues } as T;

  let formEl: HTMLFormElement;
  const elements = {} as Record<ElementKey, FormElementConfig>;

  let unsubscribeMutationObserver: () => void;
  let subscribers = [] as ((state: SubscribeState<T, F>) => void)[];


  // FORM, FIELD & ERROR STATE //

  let formState: FormState = {
    ...DEFAULT_FORM_STATE
  };

  let fieldState = {} as Record<ElementKey, FieldStateItem>;

  let errorState = {} as ErrorState<T, F>;

  let store = createStore({ ...formState, fields: {}, errors: {} } as SubscribeState<T, F>)

  const context = {
    form,
    field,
    reset,
    getValue,
    getValues,
    setValue,
    setValues,
    getFields,
    validate,
    destroy,
    getNativeValidators,
    subscribe,
    store,
  };

  // STATE SET & REMOVE //

  function subscribe(fn: (state: SubscribeState<T, F>) => void) {
    if (!subscribers.includes(fn))
      subscribers.push(fn);
    return () => {
      subscribers = subscribers.filter(s => s !== fn);
    };
  }

  function updateFormState(newState = formState as Partial<FormState>) {
    const hasErrors = Object.keys(errorState || {}).length > 0;
    formState = {
      ...formState,
      valid: !hasErrors,
      invalid: hasErrors,
      ...newState
    };
    if (formState.initialized) {
      let _fields = fieldState as unknown as FieldState<T, F>;
      if (!options.flattenOutput)
        _fields = Object.entries(_fields).reduce((a, [key, val]) => {
          setProperty(a, key, val);
          return a;
        }, {} as any);
      const pushState = {
        ...formState,
        errors: errorState,
        fields: _fields
      };
      store.set(pushState);
      for (const pub of subscribers) {
        pub(pushState);
      }
    }

  }

  function updateFieldState(name: ElementKey, newState: Partial<FieldStateItem>) {
    const hasErr = hasProperty(errorState, name);
    fieldState[name] = {
      ...fieldState[name],
      valid: !hasErr,
      invalid: hasErr,
      ...newState
    };
    const { hasDirty, hasTouched } = getDirtyTouched();
    let dirty = hasDirty;
    let pristine = !hasTouched && !hasDirty;
    updateFormState({ dirty, pristine });
  }

  function removeFieldState(name: ElementKey) {
    const { [name]: omit, ...newState } = fieldState;
    fieldState = newState as typeof fieldState;
    updateFormState();
  }

  function getFields() {
    return Object.keys(elements).reduce((a, key) => {
      a[key] = field(key);
      return a;
    }, {} as any) as Record<ElementKey, FormField<FormElement>>;
  }

  // VALIDATION //

  async function validate<U extends Record<string, unknown>>(values = getValues() as U) {
    if (formState.validating)
      return errorState;
    const validateHandler = (options.validator || (() => {
      if (options.validator !== false)
        console.warn('Failed to validate, validation handler NOT defined. To suppress this warning set "validator:false"');
    })) as any;
    updateFormState({ validating: true });
    const result = await validateHandler(values) as ErrorState<T, F>;
    if (options.flattenOutput)
      errorState = toFlatMap(result || {}) as any; // need to tweak these types.
    else
      errorState = result;
    setTimeout(() => {
      updateFormState({ validating: false });
    }, 100);
    return errorState;
  }

  // GET & SET VALUES //

  function getElements() {
    return Object.keys(elements).reduce((a, c) => (Array.isArray(c) ? [...a, ...c] : [...a, c]), [] as FormElement[])
  }

  function getValue(name: ElementKey, transform = false): FormDataValue | FormDataValue[] {
    const conf = elements[name];
    if (!conf) return undefined;
    const handlers = TYPE_MAP[conf.type as keyof typeof TYPE_MAP] as ElementGetterSetter;
    let val = handlers[0](conf);
    // if (options.castValues)
    //   val = castDataType(conf.dataType, conf.dataTypeOptions, val);
    return val;
  }

  function getValues(flat: boolean): Record<ElementKey, FormDataValue>;
  function getValues(): Required<T>;
  function getValues(flat = false) {
    let obj = {} as any;
    const keys = Object.keys(elements);
    for (const key of keys) {
      const val = getValue(key);
      if (typeof val !== 'undefined') {
        if (flat)
          obj[key as keyof typeof obj] = val;
        else
          setProperty(obj, key, val);
      }
    }
    return obj;
  }

  function setValue(name: ElementKey, value: FormDataValue | FormDataValue[]) {
    if (typeof value === 'undefined')
      return;
    const conf = elements[name];
    if (!conf)
      return;
    const handlers = TYPE_MAP[conf.type as keyof typeof TYPE_MAP] as ElementGetterSetter;
    const setterHandler = handlers[1] as (...args: any[]) => void;
    setterHandler(conf, value);
  }

  function setValues<U extends Record<string, unknown>>(values: U) {
    if (typeof values === 'undefined')
      return;
    const entries = Object.entries(elements);
    if (!entries || !entries.length) return;
    for (const [key,] of entries) {
      const val = getProperty(values, key);
      setValue(key, val as FormElementValue | FormElementValue[]);
    }
  }

  function getDefaultValue(name: ElementKey) {
    const conf = elements[name];
    if (!conf) return null;
    return conf.defaultValue;
  }

  function getNativeValidators(name: ElementKey): NativeValidatorAttributes | NativeValidatorAttributes[] {
    const el = elements[name]?.el;
    if (!el)
      return {} as NativeValidatorAttributes;
    if (Array.isArray(el))
      return el.map(v => parseNativeAttributes(v));
    return parseNativeAttributes(el);
  }

  /**
   * Iterates field states check if any are dirty or touched.
   */
  function getDirtyTouched() {
    let hasDirty = false;
    let hasTouched = false;
    for (const [key, val] of Object.entries(fieldState)) {
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

  function onTouched(e: Event) {
    if (formState.submitted) return;
    const el = e.currentTarget as FormElement;
    updateFieldState(el.name, { touched: true });
    el.removeEventListener('click', onTouched);
    el.removeEventListener('touchend', onTouched);
  }

  async function onChange(e: Event) {
    if (formState.submitted) return;
    const el = e.currentTarget as FormElement;
    const value = getValue(el.name);
    const defaultValue = getDefaultValue(el.name);
    if (value !== defaultValue)
      updateFieldState(el.name, { dirty: true, touched: true, pristine: false });
    else if (value === defaultValue)
      updateFieldState(el.name, { dirty: false, touched: true, pristine: false });
    await validate();
  }

  function onReset(e: Event) {
    e.preventDefault();
    reset();
  }

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (formState.submitting || formState.submitted) return false;
    updateFormState({ submitting: true });
    const values = getValues();
    errorState = await validate(values);
    errorState = errorState || {};
    if (Object.keys(errorState).length) {
      options.onError && options.onError(errorState, context);
      return false;
    }
    options.onSubmit(values, context);
    setTimeout(() => {
      updateFormState({ submitting: false, submitted: true, pristine: false });
    }, 100);
    return false;
  }

  async function reset<U extends Record<string, unknown>>(values?: U) {
    formEl.reset();
    setValues((values || { ...options.initalValues }) as DeepPartial<T>);
    errorState = {} as any;
    updateFormState({ ...DEFAULT_FORM_STATE });
    await validate();
  }

  // INIT & BINDING/UNBINDING //

  /**
   * Gets element getters/setters and validity state.
   * 
   * @param name the name of the field to return. 
   * @param index optional index for group elements like radio.
   */
  function field<E extends FormElement>(name: ElementKey, index: number): FormField<E[]>;
  function field<E extends FormElement>(name: ElementKey): FormField<E>;
  function field(name: ElementKey, index?: number) {

    const baseEl = elements[name]?.el;
    const hasIndex = typeof index !== 'undefined';

    if (hasIndex && !Array.isArray(baseEl))
      throw new Error(`Attempted to index non indexable field "${name as string}".`);

    const el = hasIndex ? (baseEl as FormElement[])[index] : baseEl;
    const fs = fieldState[name] || {};

    return {
      el,
      get value() { return getValue(name); },
      set value(value: FormDataValue | FormDataValue[]) {
        if (formState.submitted) return;
        setValue(name, value);
      },
      get pristine() { return fs.pristine; },
      get dirty() { return fs.dirty; },
      get touched() { return fs.touched; },
      get invalid() { return fs.invalid; },
      get valid() { return fs.valid; },
      reset: () => {
        if (formState.submitted) return;
        setValue(name, getDefaultValue(name));
        updateFieldState(name, { dirty: false, touched: false, pristine: true });
      },
      validate: async () => {
        if (formState.submitted) return;
        const obj = { [name]: getValue(name) as any } as DeepPartial<T>;
        const result = await validate(obj);
        return result[name as keyof typeof result];
      },
    } as FormField<FormElement | FormElement[]>;

  }

  function bind(...collection: FormElement[]) {

    for (const el of collection) {

      const isValid = TYPES.includes(el.type);

      if (!isValid || el.dataset.unbound === '') continue; // must be valid type.

      if (!el.name) // name is required or user opted out.
        el.name = cheapUniq();

      const key = el.name as keyof typeof elements;

      let defaultValue = getProperty(options.initalValues, key) as FormDataValue | FormDataValue[];

      if (Array.isArray(defaultValue) && el.type !== 'select-multiple') {
        console.warn(`Element ${el.name} default value is an Array but is not of type select-multiple. Only the first value will be used.`);
        defaultValue = defaultValue[0] || '';
      }

      const parsedDataType = parseDataType(el.dataset.datatype, defaultValue);

      // Radio may have multiple elements.
      if (el.type === 'radio') {
        elements[key] = elements[key] || {};
        elements[key].el = ensureArray(elements[key].el);
        (elements[key].el as FormElement[]).push(el);
        elements[key].type = el.type;
        elements[key].defaultValue = defaultValue || ((el as HTMLInputElement).checked && el.value) || '';
        elements[key].virtualValue = undefined;
        elements[key].dataType = parsedDataType.dataType as DataType;
        elements[key].dataTypeOptions = parsedDataType.dataTypeOptions;
      }
      else {
        if (typeof elements[key] !== 'undefined')
          throw new Error(`Form appears to have duplicate name "${key as string}".`)
        elements[key] = { type: el.type as ElementType, el, defaultValue: defaultValue || el.value, virtualValue: undefined, ...parsedDataType };
      }

      el.addEventListener('change', onChange);
      el.addEventListener('click', onTouched);
      el.addEventListener('touchend', onTouched);

      // Setter determines how to set the value for element type,
      // just pass key and any initial value.
      if (typeof defaultValue !== 'undefined')
        setValue(key, getProperty(options.initalValues, key as string) as FormElementValue | FormElementValue[]);

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

  function unbind(...collection: FormElement[]) {

    for (const el of collection) {

      const conf = elements[el.name];
      if (!conf) continue;
      // If element key is array filter only 
      // current element. If none left after
      // delete then entire key.
      if (Array.isArray(conf.el)) {
        elements[el.name].el = conf.el.filter(e => e !== el);
        const len = (elements[el.name].el as FormElement[]).length;
        if (!len)
          delete elements[el.name]
      }

      else {
        delete elements[el.name];
      }

      removeFieldState(el.name);
      el.removeEventListener('change', onChange);
      el.removeEventListener('click', onTouched);
      el.removeEventListener('touchend', onTouched);

    }

  }

  function destroy() {
    unbind(...getElements());
    if (unsubscribeMutationObserver) unsubscribeMutationObserver();
    formEl.removeEventListener('submit', onSubmit);
    formEl.removeEventListener('reset', onReset);
  }

  async function initForm(f: HTMLFormElement) {
    bind(...(Array.from(f.elements) as FormElement[]));
    f.setAttribute('novalidate', 'novalidate');
    f.addEventListener('submit', onSubmit);
    f.addEventListener('reset', onReset);
    formEl = f;
    if (options.subscribe)
      subscribe(options.subscribe);
    if (options.initValidate)
      await validate(options.initalValues);
  }

  function form(f: HTMLFormElement) {
    initForm(f).then(() => {
      updateFormState({ initialized: true })
    });
    unsubscribeMutationObserver = createMutationObserver(f, (el, type) => {
      if (formState.submitted) return;
      if (type === 'remove')
        unbind(el as FormElement);
      else
        bind(el as FormElement);
    });
    return {
      destroy
    };
  }

  return context;

}
