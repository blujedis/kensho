import { EXP_EMAIL, EXP_IP_ADDR, EXP_MAC_ADDR, EXP_PASSWORD_COMPLEXITY, EXP_SSN, EXP_TEL, EXP_URL, EXP_ZIP } from './regexp';
import getProperty from 'lodash.get';
import type { ValidatorDefineHandler, TypeApi } from './types';
import { cheapUniq, isFalsey } from './utils';
import { ensureArray } from './utils';

export const stringValidators = {
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

export const numberValidators = {
  default: number,
  required,
  min,
  max,
  integer,
  float,
  define
};

export const arrayValidators = {
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

export const fileValidators = {
  default: file,
  required,
  accept: filetype,
  min: filemin,
  max: filemax,
  define
};

export const booleanValidators = {
  default: boolean,
  //required
};

// Type Defaults //

function boolean(message = 'Value must be a boolean.') {
  return (value: any) => {
    if (isFalsey(value)) return '';
    return typeof value === 'boolean' ? '' : message;
  };
}

function string(message = 'Value is not a string.') {
  return (value: any) => {
    if (isFalsey(value)) return '';
    return typeof value === 'string' ? '' : message;
  };
}

function number(message = 'Value is not a number.') {
  return (value: any) => {
    if (isFalsey(value)) return '';
    return typeof value === 'number' ? '' : message;
  };
}

function array(message = 'Value is not an array.') {
  return (value: any) => {
    if (isFalsey(value)) return '';
    return Array.isArray(value) ? '' : message;
  };
}

function file(message = 'Value is not of type File.') {
  return (value: File | File[]) => {
    value = ensureArray(value);
    if (isFalsey(value)) return '';
    return (value[0] instanceof File) ? '' : message;
  };
}

function arrayOf<T extends Record<string, any>>(validators: TypeApi<T>) {
  const fn = (value: any) => '';
  fn._handlers = validators;
  return fn;
}

// Methods //

function required(message = 'Field is required.') {
  return (value: any) => {
    let valid = !isFalsey(value);
    if (Array.isArray(value) && !value.length)
      valid = false;
    if (typeof value === 'boolean' && value === false)
      valid = false;
    return valid ? '' : message;
  };
}

function min(min: number, message = 'Less than minimum required value.') {
  return (value: any) => {
    if (typeof value !== 'number') return '';
    return value >= min ? '' : message;
  };
};

function max(max: number, message = 'Greater than maximum allowed value.') {
  return (value: any) => {
    if (typeof value !== 'number') return '';
    return value <= max ? '' : message;
  };
};

function minlength(len: number, message = 'Less than minimum required length.') {
  return (value: any) => {
    if (isFalsey(value) || !(Array.isArray(value) || typeof value === 'string')) return '';
    return value.length >= len ? '' : message;
  };
};

function maxlength(len: number, message = 'Greater than maximum allowed length.') {
  return (value: any) => {
    if (isFalsey(value) || !(Array.isArray(value) || typeof value === 'string')) return '';
    return value.length <= len ? '' : message;
  };
};

function includes(tokens: string | (string | number | boolean)[], message = `Value must include {params[0]}`) {
  return (value: any) => {
    if (isFalsey(value)) return '';
    if (Array.isArray(tokens)) {
      return tokens.includes(value) ? '' : message;
    }
    else {
      return value.includes(tokens) ? '' : message;
    }
  }
}

function excludes(tokens: string | (string | number | boolean)[], message = `Value must exclude {params[0]}`) {
  return (value: any) => {
    if (isFalsey(value)) return '';
    if (Array.isArray(tokens)) {
      return !tokens.includes(value) ? '' : message;
    }
    else {
      return !value.includes(tokens) ? '' : message;
    }
  }
}

function pattern(
  exp: string | RegExp,
  message = 'Does not match required pattern.'
) {
  return (value: any) => {
    if (isFalsey(value)) return '';
    if (typeof exp === 'string') exp = new RegExp(exp);
    return exp.test(value) ? '' : message;
  };
};

function url(exp: RegExp, message?: string): (value: any) => string;
function url(message?: string): (value: any) => string;
function url(exp = EXP_URL as string | RegExp, message = 'Value is not a url.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_URL : exp, typeof exp === 'string' ? exp : message)(value);
}

function email(exp: RegExp, message?: string): (value: any) => string;
function email(message?: string): (value: any) => string;
function email(exp = EXP_EMAIL as string | RegExp, message = 'Value is not an email address.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_EMAIL : exp, typeof exp === 'string' ? exp : message)(value);
};

function tel(exp: RegExp, message?: string): (value: any) => string;
function tel(message?: string): (value: any) => string;
function tel(exp = EXP_TEL as string | RegExp, message = 'Value must be a phone number.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_TEL : exp, typeof exp === 'string' ? exp : message)(value);
};

function password(exp: RegExp, message?: string): (value: any) => string;
function password(message?: string): (value: any) => string;
function password(exp = EXP_PASSWORD_COMPLEXITY as string | RegExp, message = 'Requires one of each. Upper, lower, numeric and a special character.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_PASSWORD_COMPLEXITY : exp, typeof exp === 'string' ? exp : message)(value);
}

function ssn(exp: RegExp, message?: string): (value: any) => string;
function ssn(message?: string): (value: any) => string;
function ssn(exp = EXP_SSN as string | RegExp, message = 'Value must be an SSN number.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_SSN : exp, typeof exp === 'string' ? exp : message)(value);
}

function ip(exp: RegExp, message?: string): (value: any) => string;
function ip(message?: string): (value: any) => string;
function ip(exp = EXP_IP_ADDR as string | RegExp, message = 'Value must be an ip address.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_IP_ADDR : exp, typeof exp === 'string' ? exp : message)(value);
}

function mac(exp: RegExp, message?: string): (value: any) => string;
function mac(message?: string): (value: any) => string;
function mac(exp = EXP_MAC_ADDR as string | RegExp, message = 'Value must be a mac address.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_MAC_ADDR : exp, typeof exp === 'string' ? exp : message)(value);
}

function zip(exp: RegExp, message?: string): (value: any) => string;
function zip(message?: string): (value: any) => string;
function zip(exp = EXP_ZIP as string | RegExp, message = 'Value must be a zip code.') {
  return (value: any) => pattern(typeof exp === 'string' ? EXP_ZIP : exp, typeof exp === 'string' ? exp : message)(value);
}

function float(message = 'Value must be a float.') {
  return (value: any) => {
    if (typeof value !== 'number') return '';
    return value % 1 !== 0 ? '' : message;
  };
}

function integer(message = 'Value must be an integer.') {
  return (value: any) => {
    if (typeof value !== 'number') return '';
    return value % 1 === 0 ? '' : message;
  };
}

function equals(compare: any, message = 'Values must be equal.') {
  return (value: any) => {
    if (isFalsey(value)) return '';
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
  }
}

function equalto(key: string, message = 'Values must be equal.') {
  return (value: any, data?: Record<string, any>) => {
    const compare = getProperty(data || {}, key);
    return equals(compare, message)(value);
  };
};

function define(validator: ValidatorDefineHandler, name = '') {
  name = name || validator.name || validator._name || cheapUniq();
  (validator as any)._name = name;
  return validator;
}

function length(len: number, message = 'Value must be length of {params[0]}') {
  return (value: any) => {
    if (isFalsey(value)) return '';
    let valid = !isFalsey(value);
    if (Array.isArray(value))
      valid = value.length === len;
    else if (typeof value === 'string')
      valid = value.length === len;
    return valid ? '' : message;
  };
}

function filetype(accept: string | string[], message = 'File input contains invalid mime type.') {
  const accepted = ensureArray(accept);
  return (value: File | File[]) => {
    value = ensureArray(value);
    if (!((value)[0] instanceof File))
      return '';
    const invalid = value.some(f => !accept.includes(f.type));
    return invalid ? message : '';
  };
}

function filemax(max: number, message = 'File input is too large.') {
  return (value: File | File[]) => {
    value = ensureArray(value);
    if (isFalsey(value) || !(value[0] instanceof File))
      return '';
    const invalid = value.some(f => f.size > max);
    return invalid ? message : '';
  };
}

function filemin(min: number, message = 'File input is too small.') {
  return (value: File | File[]) => {
    value = ensureArray(value);
    if (isFalsey(value) || !(value[0] instanceof File))
      return '';
    const invalid = value.some(f => f.size < min);
    return invalid ? message : '';
  };
}












