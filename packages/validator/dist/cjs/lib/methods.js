"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanValidators = exports.fileValidators = exports.arrayValidators = exports.numberValidators = exports.stringValidators = void 0;
const regexp_1 = require("./regexp");
const lodash_get_1 = __importDefault(require("lodash.get"));
const utils_1 = require("./utils");
const utils_2 = require("./utils");
exports.stringValidators = {
    default: string,
    required,
    minlength,
    equals,
    equalto,
    maxlength,
    length,
    pattern,
    url,
    email,
    tel,
    define,
    includes,
    excludes,
    ssn,
    ip,
    mac,
    zip,
    password
};
exports.numberValidators = {
    default: number,
    required,
    min,
    max,
    integer,
    float,
    define
};
exports.arrayValidators = {
    default: array,
    required,
    minlength,
    maxlength,
    length,
    equalto,
    define,
    includes,
    excludes,
    of: arrayOf
};
exports.fileValidators = {
    default: file,
    required,
    accept: filetype,
    min: filemin,
    max: filemax,
    define
};
exports.booleanValidators = {
    default: boolean,
    //required
};
// Type Defaults //
function boolean(message = 'Value must be a boolean.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        return typeof value === 'boolean' ? '' : message;
    };
}
function string(message = 'Value is not a string.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        return typeof value === 'string' ? '' : message;
    };
}
function number(message = 'Value is not a number.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        return typeof value === 'number' ? '' : message;
    };
}
function array(message = 'Value is not an array.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        return Array.isArray(value) ? '' : message;
    };
}
function file(message = 'Value is not of type File.') {
    return (value) => {
        value = (0, utils_2.ensureArray)(value);
        if ((0, utils_1.isFalsey)(value))
            return '';
        return (value[0] instanceof File) ? '' : message;
    };
}
function arrayOf(validators) {
    const fn = (value) => '';
    fn._handlers = validators;
    return fn;
}
// Methods //
function required(message = 'Field is required.') {
    return (value) => {
        let valid = !(0, utils_1.isFalsey)(value);
        if (Array.isArray(value) && !value.length)
            valid = false;
        if (typeof value === 'boolean' && value === false)
            valid = false;
        return valid ? '' : message;
    };
}
function min(min, message = 'Less than minimum required value.') {
    return (value) => {
        if (typeof value !== 'number')
            return '';
        return value >= min ? '' : message;
    };
}
;
function max(max, message = 'Greater than maximum allowed value.') {
    return (value) => {
        if (typeof value !== 'number')
            return '';
        return value <= max ? '' : message;
    };
}
;
function minlength(len, message = 'Less than minimum required length.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value) || !(Array.isArray(value) || typeof value === 'string'))
            return '';
        return value.length >= len ? '' : message;
    };
}
;
function maxlength(len, message = 'Greater than maximum allowed length.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value) || !(Array.isArray(value) || typeof value === 'string'))
            return '';
        return value.length <= len ? '' : message;
    };
}
;
function includes(tokens, message = `Value must include {params[0]}`) {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        if (Array.isArray(tokens)) {
            return tokens.includes(value) ? '' : message;
        }
        else {
            return value.includes(tokens) ? '' : message;
        }
    };
}
function excludes(tokens, message = `Value must exclude {params[0]}`) {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        if (Array.isArray(tokens)) {
            return !tokens.includes(value) ? '' : message;
        }
        else {
            return !value.includes(tokens) ? '' : message;
        }
    };
}
function pattern(exp, message = 'Does not match required pattern.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        if (typeof exp === 'string')
            exp = new RegExp(exp);
        return exp.test(value) ? '' : message;
    };
}
;
function url(exp = regexp_1.EXP_URL, message = 'Value is not a url.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_URL : exp, typeof exp === 'string' ? exp : message)(value);
}
function email(exp = regexp_1.EXP_EMAIL, message = 'Value is not an email address.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_EMAIL : exp, typeof exp === 'string' ? exp : message)(value);
}
;
function tel(exp = regexp_1.EXP_TEL, message = 'Value must be a phone number.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_TEL : exp, typeof exp === 'string' ? exp : message)(value);
}
;
function password(exp = regexp_1.EXP_PASSWORD_COMPLEXITY, message = 'Requires one of each. Upper, lower, numeric and a special character.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_PASSWORD_COMPLEXITY : exp, typeof exp === 'string' ? exp : message)(value);
}
function ssn(exp = regexp_1.EXP_SSN, message = 'Value must be an SSN number.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_SSN : exp, typeof exp === 'string' ? exp : message)(value);
}
function ip(exp = regexp_1.EXP_IP_ADDR, message = 'Value must be an ip address.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_IP_ADDR : exp, typeof exp === 'string' ? exp : message)(value);
}
function mac(exp = regexp_1.EXP_MAC_ADDR, message = 'Value must be a mac address.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_MAC_ADDR : exp, typeof exp === 'string' ? exp : message)(value);
}
function zip(exp = regexp_1.EXP_ZIP, message = 'Value must be a zip code.') {
    return (value) => pattern(typeof exp === 'string' ? regexp_1.EXP_ZIP : exp, typeof exp === 'string' ? exp : message)(value);
}
function float(message = 'Value must be a float.') {
    return (value) => {
        if (typeof value !== 'number')
            return '';
        return value % 1 !== 0 ? '' : message;
    };
}
function integer(message = 'Value must be an integer.') {
    return (value) => {
        if (typeof value !== 'number')
            return '';
        return value % 1 === 0 ? '' : message;
    };
}
function equals(compare, message = 'Values must be equal.') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        if (Array.isArray(value)) {
            if (!Array.isArray(compare) || compare.length !== value.length)
                return message;
            const cloneVal = [...value].sort();
            const cloneCompare = [...compare].sort();
            for (let i = 0, el = cloneVal[i]; i < cloneVal.length; i++) {
                if (el !== cloneCompare[i])
                    return message;
            }
            return '';
        }
        else {
            const valid = value === compare;
            return valid ? '' : message;
        }
    };
}
function equalto(key, message = 'Values must be equal.') {
    return (value, data) => {
        const compare = (0, lodash_get_1.default)(data || {}, key);
        return equals(compare, message)(value);
    };
}
;
function define(validator, name = '') {
    name = name || validator.name || validator._name || (0, utils_1.cheapUniq)();
    validator._name = name;
    return validator;
}
function length(len, message = 'Value must be length of {params[0]}') {
    return (value) => {
        if ((0, utils_1.isFalsey)(value))
            return '';
        let valid = !(0, utils_1.isFalsey)(value);
        if (Array.isArray(value))
            valid = value.length === len;
        else if (typeof value === 'string')
            valid = value.length === len;
        return valid ? '' : message;
    };
}
function filetype(accept, message = 'File input contains invalid mime type.') {
    const accepted = (0, utils_2.ensureArray)(accept);
    return (value) => {
        value = (0, utils_2.ensureArray)(value);
        if (!((value)[0] instanceof File))
            return '';
        const invalid = value.some(f => !accept.includes(f.type));
        return invalid ? message : '';
    };
}
function filemax(max, message = 'File input is too large.') {
    return (value) => {
        value = (0, utils_2.ensureArray)(value);
        if ((0, utils_1.isFalsey)(value) || !(value[0] instanceof File))
            return '';
        const invalid = value.some(f => f.size > max);
        return invalid ? message : '';
    };
}
function filemin(min, message = 'File input is too small.') {
    return (value) => {
        value = (0, utils_2.ensureArray)(value);
        if ((0, utils_1.isFalsey)(value) || !(value[0] instanceof File))
            return '';
        const invalid = value.some(f => f.size < min);
        return invalid ? message : '';
    };
}
//# sourceMappingURL=methods.js.map