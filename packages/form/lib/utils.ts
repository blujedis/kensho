import type { DataType, DataTypeBase, FlatMap, FormElement } from './types';
import { MAX_DEPTH, VALID_NODES } from './constants';

// Data Type Conversion //

/**
 * Used to convert/cast to data type.
 */
export const DATA_TYPE_MAP = {
  string: String,
  number: Number,
  integer: (v: unknown) => {
    try {
      return parseInt(v + '');
    }
    catch (err) {
      return v;
    }
  },
  float: (v: unknown, places = 2) => {
    try {
      const val = parseFloat(v + '');
      return Number(val.toFixed(places));
    }
    catch (err) {
      return v;
    }
  },
  bigint: (v: unknown) => {
    try {
      return BigInt(v + '');
    }
    catch (err) {
      return v;
    }
  },
  boolean: (v: unknown) => /(true|yes|1)/.test(v + '') ? true : false,
  array: (v: unknown, datatype = 'string' as DataTypeBase) => {
    const arr = ensureArray(v);
    return arr.map(v => DATA_TYPE_MAP[datatype]);
  },
  none: (v: unknown) => v
};

/**
 * Parses default values provided to initialValues. Used for casting values back to type.
 * 
 * @param value the value to be inspected.
 */
export function parseDefaultType(value: unknown) {
  let isArray = false;
  let dataType = 'none';
  let dataTypeOptions = [] as any[];
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
    if (places) dataTypeOptions = [places];
  }
  if (isArray)
    dataType = `[${dataType}]`;
  return {
    dataType,
    dataTypeOptions
  } as { dataType: DataType, dataTypeOptions: any[] };
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
export function parseDataType(config: string | undefined, defaultValue: unknown): { dataType: DataType, dataTypeOptions: any[] } {
  if (typeof config === 'undefined')
    return parseDefaultType(defaultValue);
  const segments = config.split('|');
  let type = segments.shift() || 'none';
  let options = [...segments] as any[];
  return {
    dataType: type as DataType,
    dataTypeOptions: options
  };
}

export function castDataType<V = any>(dataType: DataType, dataTypeOptions: any[], value: V) {
  const isArray = dataType.startsWith('[');
  const cleanType = dataType.replace(/([|])/g, '') as DataTypeBase;
  if (cleanType === 'none' || !DATA_TYPE_MAP[cleanType])
    return value;
  if (isArray)
    return ensureArray(value).map(v => DATA_TYPE_MAP[cleanType](v, ...dataTypeOptions))
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
export function parseNativeAttributes(el: FormElement) {

  const attrs = {
    type: el.type,
    required: el.hasAttribute('required'),
    readonly: el.hasAttribute('readonly'),
    disabled: el.hasAttribute('disabled'),
    pattern: el.getAttribute('pattern') || '',
    min: el.getAttribute('min') as null | number,
    max: el.getAttribute('min') as null | number,
    minlength: el.getAttribute('min') as null | number,
    maxlength: el.getAttribute('min') as null | number,
    step: el.getAttribute('min') as null | number,
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
export function noop(...args: any[]) { };

/**
 * Inspects a node checking to see if should be watched on mutation.
 * 
 * @param node the mutated node to inspect as valid.
 */
function MATCH_NODE(node: Node): boolean {
  return VALID_NODES.includes(node.nodeName);
};

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
 * @param match the matcher used to find valid nodes.
 * @param depth the max depth to recurse.
 */
export function recurseNode(node: Node, match = MATCH_NODE, depth = 0) {
  let matches = [] as Node[];
  if (match(node)) matches.push(node);
  if (depth > MAX_DEPTH)
    return matches;
  if (node.childNodes) {
    const childNodes = Array.from(node.childNodes).reduce((a, n) => {
      a = [...a, ...recurseNode(n, match, depth = 1)];
      return a;
    }, [] as Node[]);
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
export function createMutationObserver(
  rootNode: Node,
  onMutation: (el: Node, type: 'add' | 'remove') => void, match = MATCH_NODE) {
  const observer = new MutationObserver((mutations) => {
    for (let i = 0; i < mutations.length; ++i) {
      // added
      for (let a = 0; a < mutations[i].addedNodes.length; ++a) {
        const node = mutations[i].addedNodes[a];
        if (!match(node)) continue;
        onMutation(node, 'add');
      }
      // removed.
      for (let r = 0; r < mutations[i].removedNodes.length; ++r) {
        const node = mutations[i].removedNodes[r];
        const matches = recurseNode(node, match);
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
export function ensureArray<T = any>(value: T | T[]): T[] {
  if (Array.isArray(value) || typeof value === 'undefined' || value === null)
    return (value || []) as T[];
  return [value];
};

/**
 * Converts nested object to flat map with not notated keys.
 * 
 * @param obj the object to be flattened.
 * @param sep the path separator for keys.
 */
export function toFlatMap<T extends Record<string, unknown>>(obj: T, sep = '.') {
  const result = {} as FlatMap<T>;
  const flatten = (o: object, parent?: string) => {
    for (const [key, val] of Object.entries(o)) {
      const prop = parent ? `${parent}${sep}${key}` : key;
      if (val && typeof val === 'object' && !Array.isArray(val))
        flatten(val, prop);
      else
        result[prop as keyof typeof result] = val;
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
export function debounce(fn: (...args: any[]) => any, delay = 0, immediate = false) {
  let timeout: NodeJS.Timeout | null;
  return function executedFunction(this: any, ...args: any[]) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };
    const callNow = immediate && !timeout;
    if (timeout)
      clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    if (callNow) 
      fn.apply(context, args);
  };
};
