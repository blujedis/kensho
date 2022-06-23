import getProperty from 'lodash.get';
/**
 * Ensures value returned is an array.
 *
 * @param value the value to ensure as an array.
 */
export const ensureArray = <T>(value: T | T[]): T[] => {
	if (Array.isArray(value) || typeof value === 'undefined' || value === null)
		return (value || []) as T[];
	return [value] as T[];
};

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
export function formatStr(
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
export function formatStr(str: string, map: Record<string, unknown>): string;
export function formatStr(str = '', ...args: any[]) {
	if (args.length) {
		const first = args[0];
		const isObj =
			typeof first === 'object' && first !== null && !Array.isArray(first);
		const vals = isObj ? args[0] : args;
		for (const key in vals) {
			str = str.replace(
				new RegExp('\\{' + key + '\\}', 'gi'),
				!isObj ? vals[key] : getProperty(vals, key)
			);
		}
	}
	return str;
}

/**
 * Cheap unique id that's safe enough for a small list of ids.
 * However If you use this in a database I'll find you & slap you!!!
 *
 * @param prefix prefixed to the output result.
 * @param radix the base number system used when parsing the string.
 * @param hexadecimal the base hexadecimal number used for generating. (16777215)
 */
export function cheapUniq(prefix = '#', radix = 16, hexadecimal = 0xffffff) {
	return prefix + ((Math.random() * hexadecimal) << 0).toString(radix);
}

/**
 * Checks value if is falsey, null, empty string or undefined.
 *
 * @param value the value to inspect as falsey
 */
export function isFalsey(value: any) {
	return typeof value === 'undefined' || value === null || value === '';
}
