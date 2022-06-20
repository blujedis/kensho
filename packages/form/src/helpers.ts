// This file is exported for use in adapters.

import getProperty from 'lodash.get';
import setProperty from 'lodash.set';
import hasProperty from 'lodash.has';
import mergeObject from 'lodash.merge';
import { FlatMap, FormElement } from './types';

export {
  getProperty,
  setProperty,
  hasProperty,
  mergeObject
};

/**
 * Ensures handlers are an array.
 * 
 * @example
 * ensureArray(undefined); // result: []
 * ensureArray(null); // result: [],
 * ensureArray(['home', 'phone.mobile']); // result: ['home', 'phone.mobile']
 * ensureArray('phone.mobile'); // result ['phone.mobile']
 *
 * @param value converts value to an array of values or empty array.
 */
export function ensureArray<T = any>(value: T | T[]): Exclude<T, undefined>[] {
  if (Array.isArray(value) || typeof value === 'undefined' || value === null)
    return (value || []) as Exclude<T, undefined>[];
  return [value] as Exclude<T, undefined>[];
}

/**
 * Converts nested object to flat map with not notated keys.
 * 
 * @example
 * const map = { 
 *    name: 'Milton Waddams', 
 *    phone: { home: '8885553456', mobile: '7773457896' }
 * };
 * const flattened = flattenMap(map);
 * flattened = {
 *    name: 'Milton Waddams',
 *    'phone.home': '8885553456',
 *    'phone.mobile': '7773457896'
 * };
 * 
 * @param obj the object to be flattened.
 * @param sep the path separator for keys.
 */
export function flattenMap<T extends Record<string, unknown>>(obj: T, sep = '.') {
  const result = {} as FlatMap<T>;
  const flatten = (o: object, parent?: string) => {
    for (const [key, val] of Object.entries(o)) {
      const prop = parent ? `${parent}${sep}${key}` : key;
      if (typeof val !== 'undefined' && val !== null && !Array.isArray(val) && typeof val === 'object')
        flatten(val, prop);
      else
        result[prop as keyof typeof result] = val;
    }
    return result;
  };
  return flatten(obj);
}

/**
 * Iterates an object and builds flattened keys/paths.
 * 
 * @example
 * const map = { 
 *    name: 'Milton Waddams', 
 *    phone: { home: '8885553456', mobile: '7773457896' }
 * };
 * const flattened = flattenKeys(map);
 * flattened = ['name', 'phone.mobile', 'phone.home'];
 * 
 * @param obj the object to flatten keys for.
 * @param sep the separator for building flat paths.
 */
export function flattenKeys<T extends Record<string, unknown>>(obj: T, sep = '.') {
  const result = [] as any[];
  const flatten = (o: object, parent?: string) => {
    for (const [key, val] of Object.entries(o)) {
      const path = parent ? `${parent}${sep}${key}` : key;
      if (typeof val !== 'undefined' && val !== null && !Array.isArray(val) && typeof val === 'object')
        flatten(val, path);
      else
        result.push(path);
    }
    return result;
  };
  return flatten(obj);
}

/**
 * Converts a flattened object expanding it to its unflattened state.
 * 
 * @param obj a flattened object to be expanded.
 */
export function unflattenMap<T extends Record<string, unknown> = Record<string, unknown>>(obj: Record<string, unknown>) {
  const keys = Object.keys(obj) as (keyof T)[];
  return keys.reduce((a, c) => {
    setProperty(a, c, getProperty(obj, c));
    return a;
  }, {} as T);
}

/**
 * Iterates an array of props, stops at first defined/found value.
 * 
 * @param obj the object containing props.
 * @param props array of props exists if prop is not defined.
 * @param altProp when prop is found another prop value is selected.
 */
export function getFirstDefined<T extends FormElement>(obj: T, props: (keyof T)[], altProp?: keyof T) {
  let found: any;
  for (const prop of props) {
    if (typeof found !== 'undefined') return found;
    found = obj[prop];
  }
  const altPropVal = typeof altProp !== 'undefined' ? obj[altProp] : undefined;
  if (typeof found !== 'undefined' && typeof altPropVal !== 'undefined')
    found = altPropVal;
  return found;
}
