import getProperty from 'lodash.get';
import setProperty from 'lodash.set';
import hasProperty from 'lodash.has';
import mergeObject from 'lodash.merge';
import { FlatMap, FormElement } from './types';
export { getProperty, setProperty, hasProperty, mergeObject };
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
export declare function ensureArray<T = any>(value: T | T[]): Exclude<T, undefined>[];
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
export declare function flattenMap<T extends Record<string, unknown>>(obj: T, sep?: string): FlatMap<T>;
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
export declare function flattenKeys<T extends Record<string, unknown>>(obj: T, sep?: string): any[];
/**
 * Converts a flattened object expanding it to its unflattened state.
 *
 * @param obj a flattened object to be expanded.
 */
export declare function unflattenMap<T extends Record<string, unknown> = Record<string, unknown>>(obj: Record<string, unknown>): T;
/**
 * Iterates an array of props, stops at first defined/found value.
 *
 * @param obj the object containing props.
 * @param props array of props exists if prop is not defined.
 * @param altProp when prop is found another prop value is selected.
 */
export declare function getFirstDefined<T extends FormElement>(obj: T, props: (keyof T)[], altProp?: keyof T): any;
//# sourceMappingURL=helpers.d.ts.map