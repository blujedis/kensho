"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFalsey = exports.cheapUniq = exports.formatStr = exports.ensureArray = void 0;
const lodash_get_1 = __importDefault(require("lodash.get"));
/**
 * Ensures value returned is an array.
 *
 * @param value the value to ensure as an array.
 */
const ensureArray = (value) => {
    if (Array.isArray(value) || typeof value === 'undefined' || value === null)
        return (value || []);
    return [value];
};
exports.ensureArray = ensureArray;
function formatStr(str = '', ...args) {
    if (args.length) {
        const first = args[0];
        const isObj = typeof first === 'object' && first !== null && !Array.isArray(first);
        let vals = isObj ? args[0] : args;
        for (const key in vals) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), !isObj ? vals[key] : (0, lodash_get_1.default)(vals, key));
        }
    }
    return str;
}
exports.formatStr = formatStr;
/**
 * Cheap unique id that's safe enough for a small list of ids.
 * However If you use this in a database I'll find you & slap you!!!
 *
 * @param prefix prefixed to the output result.
 * @param radix the base number system used when parsing the string.
 * @param hexadecimal the base hexadecimal number used for generating. (16777215)
 */
function cheapUniq(prefix = '#', radix = 16, hexadecimal = 0xffffff) {
    return prefix + ((Math.random() * hexadecimal) << 0).toString(radix);
}
exports.cheapUniq = cheapUniq;
/**
 * Checks value if is falsey, null, empty string or undefined.
 *
 * @param value the value to inspect as falsey
 */
function isFalsey(value) {
    return typeof value === 'undefined' || value === null || value === '';
}
exports.isFalsey = isFalsey;
//# sourceMappingURL=utils.js.map