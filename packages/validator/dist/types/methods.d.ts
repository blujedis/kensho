import type { ValidatorDefineHandler, TypeApi } from "./types";
export declare const stringValidators: {
  default: typeof string;
  required: typeof required;
  minlength: typeof minlength;
  equals: typeof equals;
  equalto: typeof equalto;
  maxlength: typeof maxlength;
  length: typeof length;
  pattern: typeof pattern;
  url: typeof url;
  email: typeof email;
  tel: typeof tel;
  define: typeof define;
  includes: typeof includes;
  excludes: typeof excludes;
  ssn: typeof ssn;
  ip: typeof ip;
  mac: typeof mac;
  zip: typeof zip;
  password: typeof password;
};
export declare const numberValidators: {
  default: typeof number;
  required: typeof required;
  min: typeof min;
  max: typeof max;
  integer: typeof integer;
  float: typeof float;
  define: typeof define;
};
export declare const arrayValidators: {
  default: typeof array;
  required: typeof required;
  minlength: typeof minlength;
  maxlength: typeof maxlength;
  length: typeof length;
  equalto: typeof equalto;
  define: typeof define;
  includes: typeof includes;
  excludes: typeof excludes;
  of: typeof arrayOf;
};
export declare const fileValidators: {
  default: typeof file;
  required: typeof required;
  accept: typeof filetype;
  min: typeof filemin;
  max: typeof filemax;
  define: typeof define;
};
export declare const booleanValidators: {
  default: typeof boolean;
};
declare function boolean(message?: string): (value: any) => string;
declare function string(message?: string): (value: any) => string;
declare function number(message?: string): (value: any) => string;
declare function array(message?: string): (value: any) => string;
declare function file(message?: string): (value: File | File[]) => string;
declare function arrayOf<T extends Record<string, any>>(
  validators: TypeApi<T>
): {
  (value: any): string;
  _handlers: TypeApi<T>;
};
declare function required(message?: string): (value: any) => string;
declare function min(min: number, message?: string): (value: any) => string;
declare function max(max: number, message?: string): (value: any) => string;
declare function minlength(
  len: number,
  message?: string
): (value: any) => string;
declare function maxlength(
  len: number,
  message?: string
): (value: any) => string;
declare function includes(
  tokens: string | (string | number | boolean)[],
  message?: string
): (value: any) => string;
declare function excludes(
  tokens: string | (string | number | boolean)[],
  message?: string
): (value: any) => string;
declare function pattern(
  exp: string | RegExp,
  message?: string
): (value: any) => string;
declare function url(exp: RegExp, message?: string): (value: any) => string;
declare function url(message?: string): (value: any) => string;
declare function email(exp: RegExp, message?: string): (value: any) => string;
declare function email(message?: string): (value: any) => string;
declare function tel(exp: RegExp, message?: string): (value: any) => string;
declare function tel(message?: string): (value: any) => string;
declare function password(
  exp: RegExp,
  message?: string
): (value: any) => string;
declare function password(message?: string): (value: any) => string;
declare function ssn(exp: RegExp, message?: string): (value: any) => string;
declare function ssn(message?: string): (value: any) => string;
declare function ip(exp: RegExp, message?: string): (value: any) => string;
declare function ip(message?: string): (value: any) => string;
declare function mac(exp: RegExp, message?: string): (value: any) => string;
declare function mac(message?: string): (value: any) => string;
declare function zip(exp: RegExp, message?: string): (value: any) => string;
declare function zip(message?: string): (value: any) => string;
declare function float(message?: string): (value: any) => string;
declare function integer(message?: string): (value: any) => string;
declare function equals(compare: any, message?: string): (value: any) => string;
declare function equalto(
  key: string,
  message?: string
): (value: any, data?: Record<string, any>) => string;
declare function define(
  validator: ValidatorDefineHandler,
  name?: string
): ValidatorDefineHandler<any>;
declare function length(len: number, message?: string): (value: any) => string;
declare function filetype(
  accept: string | string[],
  message?: string
): (value: File | File[]) => string;
declare function filemax(
  max: number,
  message?: string
): (value: File | File[]) => string;
declare function filemin(
  min: number,
  message?: string
): (value: File | File[]) => string;
export {};
//# sourceMappingURL=methods.d.ts.map
