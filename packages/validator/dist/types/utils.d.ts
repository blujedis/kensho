/**
 * Ensures value returned is an array.
 *
 * @param value the value to ensure as an array.
 */
export declare const ensureArray: <T extends unknown>(value: T | T[]) => T[];
/**
 * Simple string format function.
 *
 * @example
 * formatStr('Value must be length of {len}', 5);
 * formatStr('Value must be length of {0} and less than {1}', 5, 10)
 *
 * @param str the string to be formatted.
 * @param args array of string, number or booleans
 */
export declare function formatStr(
  str: string,
  ...args: (string | number | boolean)[]
): string;
/**
 * Simple string format function.
 *
 * @example
 * formatStr('Value must be length of {len}', { len: 5 });
 * formatStr('Requires length of {len} and less than {values.less}',
 *    { len: 10, values: { less: 20 }}
 * );
 *
 * @param str the string to be formatted.
 * @param map object of key values.
 */
export declare function formatStr(
  str: string,
  map: Record<string, unknown>
): string;
/**
 * Cheap unique id that's safe enough for a small list of ids.
 * However If you use this in a database I'll find you & slap you!!!
 *
 * @param prefix prefixed to the output result.
 * @param radix the base number system used when parsing the string.
 * @param hexadecimal the base hexadecimal number used for generating. (16777215)
 */
export declare function cheapUniq(
  prefix?: string,
  radix?: number,
  hexadecimal?: number
): string;
/**
 * Checks value if is falsey, null, empty string or undefined.
 *
 * @param value the value to inspect as falsey
 */
export declare function isFalsey(value: any): boolean;
//# sourceMappingURL=utils.d.ts.map
