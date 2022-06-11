import getProperty from 'lodash.get';
import setProperty from 'lodash.set';
import hasProperty from 'lodash.has';
import { stringValidators, booleanValidators, numberValidators, arrayValidators, fileValidators } from './methods';
import type { CreateValidatorHandler, ValidatorDefineHandler, TypeApi, Api, ParsedErrors, ValidatorOptions, ApiConfig, WithParsers, FromObjectItem, FromApiConfig, FromObject } from './types';
import { ensureArray } from './utils';


function createParsers(handlers: ValidatorDefineHandler[], options: ValidatorOptions) {


  function parse(value: any, data?: Record<string, unknown>) {
    const errors = [] as string[];
    if (typeof value === 'undefined' || value === 'null') throw new Error(`Cannot parse value of null or undefined.`);
    if (Array.isArray(value))
      throw new Error(`Parse value cannot be an array.`);
    handlers = ensureArray(handlers);
    if (!handlers.length)
      return [];
    for (const handler of handlers) {
      if (options.depth > 0 && errors.length >= options.depth)
        return errors;
      const message = handler(value, data);
      if (typeof message === 'string' && message.length)
        errors.push(message);
    }
    return errors;
  }

  async function parseAsync(value: any, data?: Record<string, unknown>) {
    const errors = [] as string[];
    if (typeof value === 'undefined' || value === 'null') throw new Error(`Cannot parse value of null or undefined.`);
    if (Array.isArray(value))
      throw new Error(`Parse value cannot be an array.`);
    handlers = ensureArray(handlers);
    if (!handlers.length)
      return [];
    for (const handler of handlers) {
      if (options.depth > 0 && errors.length >= options.depth)
        return errors;
      const message = await handler(value, data);
      if (typeof message === 'string' && message.length)
        errors.push(message);
    }
    return errors;
  }

  return {
    parse,
    parseAsync
  };

}

function initMethods<T extends Record<string, CreateValidatorHandler>, O extends ValidatorOptions>(validators: T, options: O) {
  type Parsers = ReturnType<typeof createParsers>
  const api = {
    parse: undefined as unknown as Parsers['parse'],
    parseAsync: undefined as unknown as Parsers['parseAsync'],
    __handlers__: [] as ValidatorDefineHandler[],
    __kensho__: true
  };
  for (const [key, func] of Object.entries(validators)) {
    (api as any)[key] = function validatorWrapper(...args: any[]) {
      const fn = func(...args) as ValidatorDefineHandler;
      api.__handlers__.push(fn);
      return api;
    };
  }
  const parsers = createParsers(api.__handlers__, options);
  api.parse = parsers.parse;
  api.parseAsync = parsers.parseAsync;
  return api as unknown as TypeApi<T> & WithParsers;
}

function initInstance<T extends Record<string, CreateValidatorHandler>, O extends ValidatorOptions>(validators = {} as T, options: O) {
  const result = Object.keys(validators).reduce((a, k) => {
    a[k] = (...args: any[]) => initMethods(validators, options)[k](...args as any)
    return a;
  }, {} as any) as TypeApi<T> & WithParsers;
  return result;
}

export function createValidators<T extends Record<string, Record<string, CreateValidatorHandler>>, O extends ValidatorOptions = { depth: 0, flatten: false }>(validators = {} as T, options = { depth: 0, flatten: false } as ValidatorOptions) {

  const initializedValidators = { ...validators };

  const instance = Object.entries(validators).reduce((a, [key, val]) => {
    a[key] = () => initInstance(val, options).default();
    return a;
  }, {} as any) as Api<T>;

  /**
   * Creates an object configuration of validators based on object keys.
   * 
   * @example
   * import k from '@kensho/validator';
   * const validator = k.object({
   *    name: k.minlength(5),
   *    email: k.email()
   * });
   * 
   * @param config configuration containing validator definitions.
   */
  function object<C extends ApiConfig<T>>(config: C) {


    function parseBase<V extends Record<string, unknown>, A extends boolean, F extends boolean>(async: A, flatten: F, values: V, ...args: any[]): A extends true ? Promise<ParsedErrors<V, F>> : ParsedErrors<V, F> {

      if (values === null || Array.isArray(values) || typeof values !== 'object')
        throw new Error(`Parse value must be an object.`);

      const errors = {} as any;

      function handleMessages(path: keyof typeof errors, messages: string[]) {
        if (!messages || !messages.length) return;
        if (flatten === true) {
          errors[path] = errors[path] || [];
          errors[path] = [...errors[path], ...messages];
        }
        else {
          let msgs = getProperty(errors, path as string) as string[];
          msgs = msgs || [];
          setProperty(errors, path as string, [...msgs, ...messages]);
        }
      }

      function recurseConfig(conf: C, parent = '') {
        for (const [key, val] of Object.entries(conf)) {
          if (((val || {}) as any).__kensho__ !== true) {
            recurseConfig(val as C, key);
          }
          else {
            const path = parent.length ? parent + '.' + key : key;
            // This can happen when a key not represented in dom is presented.
            if (!hasProperty(values, path)) {
              console.warn(`Validator ${path} has no corresponding data.`)
              continue;
            }
            const dataVal = getProperty(values, path);
            const messages = (val as any).parse(dataVal, values) as unknown as string[];
            const k = path as keyof typeof errors;
            handleMessages(k, messages);
          }
        }
        return errors;
      }

      async function recurseConfigAsync(conf: C, parent = '') {
        for (const [key, val] of Object.entries(conf)) {
          if (((val || {}) as any).__kensho__ !== true) {
            await recurseConfigAsync(val as C, key);
          }
          else {
            const path = parent.length ? parent + '.' + key : key;
            // This can happen when a key not represented in dom is presented.
            if (!hasProperty(values, path)) {
              console.warn(`Validator ${path} has no corresponding data.`)
              continue;
            }

            const dataVal = getProperty(values, path);
            const messages = await (val as any).parseAsync(dataVal, values) as unknown as string[];
            const k = path as keyof typeof errors;
            handleMessages(k, messages);
          }
        }
        return errors;
      }

      if (async)
        return recurseConfigAsync(config) as any;

      return recurseConfig(config);

    }

    /**
     * Parses data against validation schema.
     * 
     * @param values the values to be parsed against validation schema.
     * @param args any additional args, making types play nice.
     */
    function parse<V extends Record<string, unknown>>(values: V, ...args: any[]) {
      return parseBase(false, false, values, args) as ParsedErrors<V, false>
    }

    /**
     * Parses data against validation schema asynchronously. 
     * 
     * @param values the values to be parsed against validation schema.
     * @param args any additional args, making types play nice.
     */
    function parseAsync<V extends Record<string, unknown>>(values: V, ...args: any[]) {
      return parseBase(true, false, values, args) as Promise<ParsedErrors<V, false>>;
    }

    /**
     * Parses data against validation schema.
     * 
     * @param values the values to be parsed against validation schema.
     * @param args any additional args, making types play nice.
     */
    function parseFlat<V extends Record<string, unknown>>(values: V, ...args: any[]) {
      return parseBase(false, true, values, args) as ParsedErrors<V, true>;
    }

    /**
     * Parses data against validation schema asynchronously. 
     * 
     * @param values the values to be parsed against validation schema.
     * @param args any additional args, making types play nice.
     */
    function parseFlatAsync<V extends Record<string, unknown>>(values: V, ...args: any[]) {
      return parseBase(true, true, values, args) as Promise<ParsedErrors<V, true>>;
    }

    return {
      parse,
      parseFlat,
      parseAsync,
      parseFlatAsync
    }

  }

  /**
  * Generate validation configuration from validator map.
  * This is used internally by "fromObject" method.
  * 
  * @example
  * import k from '@kensho/validator';
  * const item = k.mapFromItem({
  *    type: string,
  *    validators: {
  *      required: true,
  *      min: 5,
  *      max: [10, 'Field is too long.']
  *    }
  * });
  * 
  * @param item the configuration item containing type and validators. 
  */
  function fromObjectItem<I extends FromObjectItem<T>>(item: I) {
    const scope = instance[item.type]();
    if (!item.validators) return scope;
    return Object.entries(item.validators).reduce((s, [key, val]) => {
      let args = val as any[];
      if (typeof val !== 'undefined' && typeof s[key] === 'function') {
        if (val === true)
          args = [];
        if (!Array.isArray(val))
          args = [val];
        s[key](...args as any);
      }
      return s;
    }, scope);
  }

  /**
   * Generate configuration using key map parsed from native validation attributes.
   * Object must be flat meaning nested paths must be represented as 'some.nested.path'
   * as the key rather than an object containing the nested property.
   * 
   * @example 
   * import k from '@kensho/validator';
   * const validator = k.fromSchema({
   *  name: { 
   *    type: string, 
   *    validation: {required: true, minlength: [6, 'Name is too short']}
   *       },
   *  email: { type: string, validators: { email: true } },
   *  'phone.mobile': { type: 'string', validators: { tel: true } }
   * })
   * 
   * @param config an object containing keys to map to known validators.
   */
  function fromObject<F extends FromObject<T>>(config: F) {
    let obj = {} as any;
    function recurseObject(conf: F, parent = '') {
      for (const [key, val] of Object.entries(conf)) {
        if (!val.type || !val.validators) {
          recurseObject(val as any, key);
        }
        else {
          const item = fromObjectItem(val as FromObjectItem<T>);
          const path = parent.length ? parent + '.' + key : key;
          setProperty(obj, path, item);
        }
      }
      return object(obj as FromApiConfig<Extract<keyof F, string>, T>);
    }
    // Need to fix this typing.
    // @ts-ignore
    return recurseObject(config) as ReturnType<typeof object>;
  }

  /**
   * Extends the current instance with additional validator methods.
   * 
   * @param extend object of validator to extend instance with.
   * @param depth the depth of errors.
   */
  function extend<E extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E, opt?: ValidatorOptions) {
    const clone = { ...(initializedValidators as any) };
    for (const [key, val] of Object.entries(extend)) {
      clone[key] = { ...clone[key], ...val[key] };
    }
    return createValidators(clone as T & E, { ...options, ...opt });
  }

  return {
    ...instance,
    extend,
    object,
    fromObject
  };

}

const kensho = createValidators({
  string: stringValidators,
  array: arrayValidators,
  number: numberValidators,
  boolean: booleanValidators,
  file: fileValidators
});

const { string, array, number, boolean, file } = kensho;

export { string, array, number, boolean, file };

export default kensho;



