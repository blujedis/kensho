import { HTML5_PLACEHOLDER_TYPES, MAX_DEPTH, VALID_MUTATION_NODES } from './constants';
// Data Type Conversion //
/**
 * Used to convert/cast to data type.
 */
export const DATA_TYPE_MAP = {
    string: String,
    number: Number,
    integer: (v) => {
        try {
            return parseInt(v + '');
        }
        catch (err) {
            return v;
        }
    },
    float: (v, places = 2) => {
        try {
            const val = parseFloat(v + '');
            return Number(val.toFixed(places));
        }
        catch (err) {
            return v;
        }
    },
    bigint: (v) => {
        try {
            return BigInt(v + '');
        }
        catch (err) {
            return v;
        }
    },
    boolean: (v) => /(true|yes|1)/.test(v + '') ? true : false,
    array: (v, datatype = 'string') => {
        const arr = ensureArray(v);
        return arr.map((v) => DATA_TYPE_MAP[datatype]);
    },
    none: (v) => v
};
/**
 * Parses default values provided to initialValues. Used for casting values back to type.
 *
 * @param value the value to be inspected.
 */
export function parseDefaultType(value) {
    let isArray = false;
    let dataType = 'none';
    let dataTypeOptions = [];
    if (Array.isArray(value)) {
        value = value[0];
        isArray = true;
    }
    if (typeof value === 'string') {
        dataType = 'string';
    }
    else if (typeof value === 'boolean') {
        dataType = 'boolean';
    }
    else if (typeof value === 'number') {
        const isFloat = value % 1 !== 0;
        dataType = isFloat ? 'float' : 'integer';
        const places = isFloat ? Math.max(0, (value + '').split('.').length) : 0;
        if (places)
            dataTypeOptions = [places];
    }
    if (isArray)
        dataType = `[${dataType}]`;
    return {
        dataType,
        dataTypeOptions
    };
}
/**
 * Parses data-datatype attribute for data type converstion on submit.
 *
 * @example
 * data-datatype="integer"
 * data-datatype="[float]|2"
 *
 * @param config the value to be parse.
 */
export function parseDataType(config, defaultValue) {
    if (typeof config === 'undefined')
        return parseDefaultType(defaultValue);
    const segments = config.split('|');
    const type = segments.shift() || 'none';
    const options = [...segments];
    return {
        dataType: type,
        dataTypeOptions: options
    };
}
export function castDataType(dataType, dataTypeOptions, value) {
    const isArray = dataType.startsWith('[');
    const cleanType = dataType.replace(/([|])/g, '');
    if (cleanType === 'none' || !DATA_TYPE_MAP[cleanType])
        return value;
    if (isArray)
        return ensureArray(value).map(v => DATA_TYPE_MAP[cleanType](v, ...dataTypeOptions));
    return DATA_TYPE_MAP[cleanType](value, ...dataTypeOptions);
}
// Native Validity State //
// badInput: false, // True if input is not understood by browser.
// customError: false, //	True if a custom validity message is set.
// patternMismatch: false, // Tru if an element's value does not match its pattern.
// rangeOverflow: false, // True if an element's value is greater than its max.
// rangeUnderflow: false, // True if an element's value is less than its min.
// stepMismatch: false, //	True if an element's value is invalid per its step attr.
// tooLong: false, //	True if an element's value exceeds its maxLength.
// tooShort: false, //	True if an element's value less than its minLength.
// typeMismatch: false, // True if an element's value is invalid per type (email, number).
// valueMissing: false, // 	True if an required element has no value.
// valid: false, // True if an element's value is valid.
/**
 * Parses element for native validation attributes. This can be used with
 * user defined custom validators if you wish to leverage these built in attributes.
 *
 * @param el the element to be parsed for attributes.
 */
export function parseNativeAttributes(el) {
    const attrs = {
        type: el.type,
        required: el.hasAttribute('required'),
        readonly: el.hasAttribute('readonly'),
        disabled: el.hasAttribute('disabled'),
        pattern: el.getAttribute('pattern') || '',
        min: el.getAttribute('min'),
        max: el.getAttribute('min'),
        minlength: el.getAttribute('min'),
        maxlength: el.getAttribute('min'),
        step: el.getAttribute('min'),
    };
    attrs.min = attrs.min !== null ? parseInt(attrs.min + '') : null;
    attrs.max = attrs.max !== null ? parseInt(attrs.max + '') : null;
    attrs.minlength = attrs.minlength !== null ? parseInt(attrs.minlength + '') : null;
    attrs.maxlength = attrs.maxlength !== null ? parseInt(attrs.maxlength + '') : null;
    attrs.step = attrs.step !== null ? parseInt(attrs.step + '') : null;
    return attrs;
}
/**
 * Non operation function.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop(...args) { }
/**
 * Inspects a node checking to see if should be watched on mutation.
 *
 * @param node the mutated node to inspect as valid.
 */
function matchNode(node, validNodes = VALID_MUTATION_NODES) {
    return validNodes.includes(node.nodeName);
}
/**
 * Generates a cheap unique ID.
 *
 * @param radix the numberic value used to convert to strings.
 */
export function cheapUniq(radix = 16) {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(radix);
}
/**
 * Recurses a mutated node looking for valid nodes that should be bound to form control.
 * @param node the mutated node.
 * @param validNodes the valid nodes that can be watched for mutation.
 * @param depth the max depth to recurse.
 */
export function recurseNode(node, validNodes = VALID_MUTATION_NODES, depth = 0) {
    let matches = [];
    if (matchNode(node, validNodes))
        matches.push(node);
    if (depth > MAX_DEPTH)
        return matches;
    if (node.childNodes) {
        const childNodes = Array.from(node.childNodes).reduce((a, n) => {
            a = [...a, ...recurseNode(n, validNodes, depth = 1)];
            return a;
        }, []);
        matches = [...matches, ...childNodes];
    }
    return matches;
}
/**
 * Creates a mutation observer watching for DOM mutations from the root node.
 *
 * @param rootNode the root node to observe from.
 * @param onMutation the handler used when a mutation is detected.
 * @param match the matcher handler for finding valid nodes.
 */
export function createMutationObserver(rootNode, onMutation, validNodes = VALID_MUTATION_NODES) {
    const observer = new MutationObserver((mutations) => {
        for (let i = 0; i < mutations.length; ++i) {
            // added
            for (let a = 0; a < mutations[i].addedNodes.length; ++a) {
                const node = mutations[i].addedNodes[a];
                if (!matchNode(node, validNodes))
                    continue;
                onMutation(node, 'add');
            }
            // removed.
            for (let r = 0; r < mutations[i].removedNodes.length; ++r) {
                const node = mutations[i].removedNodes[r];
                const matches = recurseNode(node, validNodes);
                if (matches.length)
                    matches.forEach(n => onMutation(n, 'remove'));
            }
        }
    });
    observer.observe(rootNode, {
        childList: true,
        subtree: true
    });
    return () => observer.disconnect();
}
/**
 * Ensures handlers are an array.
 *
 * @param value converts value to an array of values or empty array.
 */
export function ensureArray(value) {
    if (Array.isArray(value) || typeof value === 'undefined' || value === null)
        return (value || []);
    return [value];
}
/**
 * Converts nested object to flat map with not notated keys.
 *
 * @param obj the object to be flattened.
 * @param sep the path separator for keys.
 */
export function toFlatMap(obj, sep = '.') {
    const result = {};
    const flatten = (o, parent) => {
        for (const [key, val] of Object.entries(o)) {
            const prop = parent ? `${parent}${sep}${key}` : key;
            if (val && typeof val === 'object' && !Array.isArray(val))
                flatten(val, prop);
            else
                result[prop] = val;
        }
        return result;
    };
    return flatten(obj);
}
/**
 * Debounces a function ensuring the function is not endlessly executed.
 *
 * @param fn the function to debounce
 * @param delay timeout to wait until activating.
 * @param immediate when true executes immediately.
 */
export function debounce(fn, delay = 0, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate)
                fn.apply(context, args);
        };
        const callNow = immediate && !timeout;
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(later, delay);
        if (callNow)
            fn.apply(context, args);
    };
}
/**
 * Checks if an element supports placeholders by type.
 *
 * @param el the html element to check if can support placeholder.
 * @param validTypes valid types that can receive a placeholder.
 */
export function canPlaceholder(el, validTypes) {
    console.log('placeholder types:', validTypes);
    if (validTypes === false)
        return false;
    const types = !validTypes ? HTML5_PLACEHOLDER_TYPES : validTypes === true ? HTML5_PLACEHOLDER_TYPES : validTypes;
    return types.includes(el.type);
}
/**
 * Creates a placeholder for intput and textarea elements.
 *
 * @param name the value to create as placeholder.
 */
export function createPlaceholder(name) {
    if (!name)
        return '';
    const segments = name.split('.');
    let first = segments.shift();
    first = (first === null || first === void 0 ? void 0 : first.charAt(0).toUpperCase()) + (first === null || first === void 0 ? void 0 : first.slice(1));
    return [first, ...segments].join(' ');
}
//# sourceMappingURL=utils.js.map