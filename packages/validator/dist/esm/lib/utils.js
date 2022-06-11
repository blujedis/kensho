import getProperty from 'lodash.get';
/**
 * Ensures value returned is an array.
 *
 * @param value the value to ensure as an array.
 */
export const ensureArray = (value) => {
    if (Array.isArray(value) || typeof value === 'undefined' || value === null)
        return (value || []);
    return [value];
};
export function formatStr(str = '', ...args) {
    if (args.length) {
        const first = args[0];
        const isObj = typeof first === 'object' && first !== null && !Array.isArray(first);
        let vals = isObj ? args[0] : args;
        for (const key in vals) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), !isObj ? vals[key] : getProperty(vals, key));
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
export function isFalsey(value) {
    return typeof value === 'undefined' || value === null || value === '';
}
//# sourceMappingURL=utils.js.map