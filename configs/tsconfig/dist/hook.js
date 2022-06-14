var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import getProperty from 'lodash.get';
import setProperty from 'lodash.set';
import hasProperty from 'lodash.has';
import { cheapUniq, createMutationObserver, ensureArray, parseNativeAttributes, toFlatMap, parseDataType, castDataType, canPlaceholder, createPlaceholder } from './utils';
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
export function useKensho(options) {
    options = Object.assign({ initValidate: true, flattenOutput: false, castValues: true, autoPlaceholder: false }, options);
    options.initialValues = Object.assign({}, options.initialValues);
    let formEl;
    const elements = {};
    let unsubscribeMutationObserver;
    let subscribers = [];
    // FORM, FIELD & ERROR STATE //
    let formState = Object.assign({}, DEFAULT_FORM_STATE);
    let fieldState = {};
    let errorState = {};
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
        subscribe
        // store,
    };
    // STATE SET & REMOVE //
    function getState() {
        let _fields = fieldState;
        if (!options.flattenOutput)
            _fields = Object.entries(_fields).reduce((a, [key, val]) => {
                setProperty(a, key, val);
                return a;
            }, {});
        return Object.assign(Object.assign({}, formState), { errors: errorState, fields: _fields });
    }
    // function subscribe(fn: (state: SubscribeState<T, F>) => void, withState: boolean): { unsubscribe: () => void, state: SubscribeState<T, F> }
    // function subscribe(fn: (state: SubscribeState<T, F>) => void): () => void
    function subscribe(fn) {
        if (!subscribers.includes(fn))
            subscribers.push(fn);
        console.log('subscriber added');
        // if (withState)
        //   return {
        //     state: getState(),
        //     unsubscribe: () => subscribers.filter(s => s !== fn)
        //   }
        return () => {
            subscribers = subscribers.filter(s => s !== fn);
        };
    }
    function updateFormState(newState = formState) {
        const hasErrors = Object.keys(errorState || {}).length > 0;
        formState = Object.assign(Object.assign(Object.assign({}, formState), { valid: !hasErrors, invalid: hasErrors }), newState);
        if (formState.initialized) {
            for (const pub of subscribers) {
                pub(getState());
            }
        }
    }
    function updateFieldState(name, newState) {
        const hasErr = hasProperty(errorState, name);
        fieldState[name] = Object.assign(Object.assign(Object.assign({}, fieldState[name]), { valid: !hasErr, invalid: hasErr }), newState);
        const { hasDirty, hasTouched } = getDirtyTouched();
        const dirty = hasDirty;
        const pristine = !hasTouched && !hasDirty;
        updateFormState({ dirty, pristine });
    }
    function removeFieldState(name) {
        const _a = fieldState, _b = name, omit = _a[_b], newState = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        fieldState = newState;
        updateFormState();
    }
    function getFields() {
        return Object.keys(elements).reduce((a, key) => {
            a[key] = field(key);
            return a;
        }, {});
    }
    // VALIDATION //
    function validate(values = getValues()) {
        return __awaiter(this, void 0, void 0, function* () {
            if (formState.validating)
                return errorState;
            const validateHandler = (options.validator || (() => {
                if (options.validator !== false)
                    console.warn('Failed to validate, validation handler NOT defined. To suppress this warning set "validator:false"');
            }));
            updateFormState({ validating: true });
            const result = yield validateHandler(values);
            if (options.flattenOutput)
                errorState = toFlatMap(result || {}); // need to tweak these types.
            else
                errorState = result;
            setTimeout(() => {
                updateFormState({ validating: false });
            }, 100);
            return errorState;
        });
    }
    // GET & SET VALUES //
    function getElements() {
        return Object.keys(elements).reduce((a, c) => (Array.isArray(c) ? [...a, ...c] : [...a, c]), []);
    }
    function getValue(name, transform = false) {
        const conf = elements[name];
        if (!conf)
            return undefined;
        const handlers = TYPE_MAP[conf.type];
        let val = handlers[0](conf);
        if (options.castValues)
            val = castDataType(conf.dataType, conf.dataTypeOptions, val);
        return val;
    }
    function getValues(flat = false) {
        const obj = {};
        const keys = Object.keys(elements);
        for (const key of keys) {
            const val = getValue(key);
            if (typeof val !== 'undefined') {
                if (flat)
                    obj[key] = val;
                else
                    setProperty(obj, key, val);
            }
        }
        return obj;
    }
    function setValue(name, value) {
        if (typeof value === 'undefined')
            return;
        const conf = elements[name];
        if (!conf)
            return;
        const handlers = TYPE_MAP[conf.type];
        const setterHandler = handlers[1];
        setterHandler(conf, value);
    }
    function setValues(values) {
        if (typeof values === 'undefined')
            return;
        const entries = Object.entries(elements);
        if (!entries || !entries.length)
            return;
        for (const [key,] of entries) {
            const val = getProperty(values, key);
            setValue(key, val);
        }
    }
    function getDefaultValue(name) {
        const conf = elements[name];
        if (!conf)
            return null;
        return conf.defaultValue;
    }
    function getNativeValidators(name) {
        var _a;
        const el = (_a = elements[name]) === null || _a === void 0 ? void 0 : _a.el;
        if (!el)
            return {};
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
        for (const [, val] of Object.entries(fieldState)) {
            if (hasDirty && hasTouched)
                break;
            hasDirty = val.dirty;
            hasTouched = val.touched;
        }
        return {
            hasDirty,
            hasTouched
        };
    }
    // EVENTS //
    function onTouched(e) {
        if (formState.submitted)
            return;
        const el = e.currentTarget;
        updateFieldState(el.name, { touched: true });
        el.removeEventListener('click', onTouched);
        el.removeEventListener('touchend', onTouched);
    }
    function onChange(e) {
        return __awaiter(this, void 0, void 0, function* () {
            if (formState.submitted)
                return;
            const el = e.currentTarget;
            const value = getValue(el.name);
            const defaultValue = getDefaultValue(el.name);
            if (value !== defaultValue)
                updateFieldState(el.name, { dirty: true, touched: true, pristine: false });
            else if (value === defaultValue)
                updateFieldState(el.name, { dirty: false, touched: true, pristine: false });
            yield validate();
        });
    }
    function onReset(e) {
        e.preventDefault();
        reset();
    }
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            if (formState.submitting || formState.submitted)
                return false;
            updateFormState({ submitting: true });
            const values = getValues();
            errorState = yield validate(values);
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
        });
    }
    function reset(values) {
        return __awaiter(this, void 0, void 0, function* () {
            formEl.reset();
            setValues((values || Object.assign({}, options.initialValues)));
            errorState = {};
            updateFormState(Object.assign({}, DEFAULT_FORM_STATE));
            yield validate();
        });
    }
    function field(name, index) {
        var _a;
        const baseEl = (_a = elements[name]) === null || _a === void 0 ? void 0 : _a.el;
        const hasIndex = typeof index !== 'undefined';
        if (hasIndex && !Array.isArray(baseEl))
            throw new Error(`Attempted to index non indexable field "${name}".`);
        const el = hasIndex ? baseEl[index] : baseEl;
        const fs = fieldState[name] || {};
        return {
            el,
            get value() { return getValue(name); },
            set value(value) {
                if (formState.submitted)
                    return;
                setValue(name, value);
            },
            get pristine() { return fs.pristine; },
            get dirty() { return fs.dirty; },
            get touched() { return fs.touched; },
            get invalid() { return fs.invalid; },
            get valid() { return fs.valid; },
            reset: () => {
                if (formState.submitted)
                    return;
                setValue(name, getDefaultValue(name));
                updateFieldState(name, { dirty: false, touched: false, pristine: true });
            },
            validate: () => __awaiter(this, void 0, void 0, function* () {
                if (formState.submitted)
                    return;
                const obj = { [name]: getValue(name) };
                const result = yield validate(obj);
                return result[name];
            }),
        };
    }
    function bind(...collection) {
        for (const el of collection) {
            const isValid = TYPES.includes(el.type);
            if (!isValid || el.dataset.unbound === '')
                continue; // must be valid type.
            if (!el.name) // name is required or user opted out.
                el.name = cheapUniq();
            const key = el.name;
            let defaultValue = getProperty(options.initialValues, key);
            if (Array.isArray(defaultValue) && el.type !== 'select-multiple') {
                console.warn(`Element ${el.name} default value is an Array but is not of type select-multiple. Only the first value will be used.`);
                defaultValue = defaultValue[0] || '';
            }
            const parsedDataType = parseDataType(el.dataset.datatype, defaultValue);
            // Radio may have multiple elements.
            if (el.type === 'radio') {
                elements[key] = elements[key] || {};
                elements[key].el = ensureArray(elements[key].el);
                elements[key].el.push(el);
                elements[key].type = el.type;
                elements[key].defaultValue = defaultValue || (el.checked && el.value) || '';
                elements[key].virtualValue = undefined;
                elements[key].dataType = parsedDataType.dataType;
                elements[key].dataTypeOptions = parsedDataType.dataTypeOptions;
            }
            else {
                if (typeof elements[key] !== 'undefined')
                    throw new Error(`Form appears to have duplicate name "${key}".`);
                elements[key] = Object.assign({ type: el.type, el, defaultValue: defaultValue || el.value, virtualValue: undefined }, parsedDataType);
            }
            if (options.autoPlaceholder && canPlaceholder(el, options.autoPlaceholder) && !el.hasAttribute('placeholder')) {
                const placeholder = createPlaceholder(el.name);
                if (placeholder)
                    el.setAttribute('placeholder', placeholder);
            }
            el.addEventListener('change', onChange);
            el.addEventListener('click', onTouched);
            el.addEventListener('touchend', onTouched);
            // Setter determines how to set the value for element type,
            // just pass key and any initial value.
            if (typeof defaultValue !== 'undefined')
                setValue(key, getProperty(options.initialValues, key));
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
    function unbind(...collection) {
        for (const el of collection) {
            const conf = elements[el.name];
            if (!conf)
                continue;
            // If element key is array filter only 
            // current element. If none left after
            // delete then entire key.
            if (Array.isArray(conf.el)) {
                elements[el.name].el = conf.el.filter(e => e !== el);
                const len = elements[el.name].el.length;
                if (!len)
                    delete elements[el.name];
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
        if (unsubscribeMutationObserver)
            unsubscribeMutationObserver();
        formEl.removeEventListener('submit', onSubmit);
        formEl.removeEventListener('reset', onReset);
    }
    function initForm(f) {
        return __awaiter(this, void 0, void 0, function* () {
            bind(...Array.from(f.elements));
            f.setAttribute('novalidate', 'novalidate');
            f.addEventListener('submit', onSubmit);
            f.addEventListener('reset', onReset);
            formEl = f;
            if (options.subscribe)
                subscribe(options.subscribe);
            if (options.initValidate)
                yield validate(options.initialValues);
        });
    }
    function form(f) {
        if (f) {
            initForm(f).then(() => {
                updateFormState({ initialized: true });
            });
            unsubscribeMutationObserver = createMutationObserver(f, (el, type) => {
                if (formState.submitted)
                    return;
                if (type === 'remove')
                    unbind(el);
                else
                    bind(el);
            }, options.mutationNodes);
            return {
                destroy
            };
        }
        return f;
    }
    return context;
}
//# sourceMappingURL=hook.js.map