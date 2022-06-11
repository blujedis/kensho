"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = exports.boolean = exports.number = exports.array = exports.string = exports.createValidators = void 0;
const lodash_get_1 = __importDefault(require("lodash.get"));
const lodash_set_1 = __importDefault(require("lodash.set"));
const lodash_has_1 = __importDefault(require("lodash.has"));
const methods_1 = require("./methods");
const utils_1 = require("./utils");
function createParsers(handlers, options) {
    function parse(value, data) {
        const errors = [];
        if (typeof value === 'undefined' || value === 'null')
            throw new Error(`Cannot parse value of null or undefined.`);
        if (Array.isArray(value))
            throw new Error(`Parse value cannot be an array.`);
        handlers = (0, utils_1.ensureArray)(handlers);
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
    async function parseAsync(value, data) {
        const errors = [];
        if (typeof value === 'undefined' || value === 'null')
            throw new Error(`Cannot parse value of null or undefined.`);
        if (Array.isArray(value))
            throw new Error(`Parse value cannot be an array.`);
        handlers = (0, utils_1.ensureArray)(handlers);
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
function initMethods(validators, options) {
    const api = {
        parse: undefined,
        parseAsync: undefined,
        __handlers__: [],
        __kensho__: true
    };
    for (const [key, func] of Object.entries(validators)) {
        api[key] = function validatorWrapper(...args) {
            const fn = func(...args);
            api.__handlers__.push(fn);
            return api;
        };
    }
    const parsers = createParsers(api.__handlers__, options);
    api.parse = parsers.parse;
    api.parseAsync = parsers.parseAsync;
    return api;
}
function initInstance(validators = {}, options) {
    const result = Object.keys(validators).reduce((a, k) => {
        a[k] = (...args) => initMethods(validators, options)[k](...args);
        return a;
    }, {});
    return result;
}
function createValidators(validators = {}, options = { depth: 0, flatten: false }) {
    const initializedValidators = { ...validators };
    const instance = Object.entries(validators).reduce((a, [key, val]) => {
        a[key] = () => initInstance(val, options).default();
        return a;
    }, {});
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
    function object(config) {
        function parseBase(async, flatten, values, ...args) {
            if (values === null || Array.isArray(values) || typeof values !== 'object')
                throw new Error(`Parse value must be an object.`);
            const errors = {};
            function handleMessages(path, messages) {
                if (!messages || !messages.length)
                    return;
                if (flatten === true) {
                    errors[path] = errors[path] || [];
                    errors[path] = [...errors[path], ...messages];
                }
                else {
                    let msgs = (0, lodash_get_1.default)(errors, path);
                    msgs = msgs || [];
                    (0, lodash_set_1.default)(errors, path, [...msgs, ...messages]);
                }
            }
            function recurseConfig(conf, parent = '') {
                for (const [key, val] of Object.entries(conf)) {
                    if ((val || {}).__kensho__ !== true) {
                        recurseConfig(val, key);
                    }
                    else {
                        const path = parent.length ? parent + '.' + key : key;
                        // This can happen when a key not represented in dom is presented.
                        if (!(0, lodash_has_1.default)(values, path)) {
                            console.warn(`Validator ${path} has no corresponding data.`);
                            continue;
                        }
                        const dataVal = (0, lodash_get_1.default)(values, path);
                        const messages = val.parse(dataVal, values);
                        const k = path;
                        handleMessages(k, messages);
                    }
                }
                return errors;
            }
            async function recurseConfigAsync(conf, parent = '') {
                for (const [key, val] of Object.entries(conf)) {
                    if ((val || {}).__kensho__ !== true) {
                        await recurseConfigAsync(val, key);
                    }
                    else {
                        const path = parent.length ? parent + '.' + key : key;
                        // This can happen when a key not represented in dom is presented.
                        if (!(0, lodash_has_1.default)(values, path)) {
                            console.warn(`Validator ${path} has no corresponding data.`);
                            continue;
                        }
                        const dataVal = (0, lodash_get_1.default)(values, path);
                        const messages = await val.parseAsync(dataVal, values);
                        const k = path;
                        handleMessages(k, messages);
                    }
                }
                return errors;
            }
            if (async)
                return recurseConfigAsync(config);
            return recurseConfig(config);
        }
        /**
         * Parses data against validation schema.
         *
         * @param values the values to be parsed against validation schema.
         * @param args any additional args, making types play nice.
         */
        function parse(values, ...args) {
            return parseBase(false, false, values, args);
        }
        /**
         * Parses data against validation schema asynchronously.
         *
         * @param values the values to be parsed against validation schema.
         * @param args any additional args, making types play nice.
         */
        function parseAsync(values, ...args) {
            return parseBase(true, false, values, args);
        }
        /**
         * Parses data against validation schema.
         *
         * @param values the values to be parsed against validation schema.
         * @param args any additional args, making types play nice.
         */
        function parseFlat(values, ...args) {
            return parseBase(false, true, values, args);
        }
        /**
         * Parses data against validation schema asynchronously.
         *
         * @param values the values to be parsed against validation schema.
         * @param args any additional args, making types play nice.
         */
        function parseFlatAsync(values, ...args) {
            return parseBase(true, true, values, args);
        }
        return {
            parse,
            parseFlat,
            parseAsync,
            parseFlatAsync
        };
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
    function fromObjectItem(item) {
        const scope = instance[item.type]();
        if (!item.validators)
            return scope;
        return Object.entries(item.validators).reduce((s, [key, val]) => {
            let args = val;
            if (typeof val !== 'undefined' && typeof s[key] === 'function') {
                if (val === true)
                    args = [];
                if (!Array.isArray(val))
                    args = [val];
                s[key](...args);
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
    function fromObject(config) {
        let obj = {};
        function recurseObject(conf, parent = '') {
            for (const [key, val] of Object.entries(conf)) {
                if (!val.type || !val.validators) {
                    recurseObject(val, key);
                }
                else {
                    const item = fromObjectItem(val);
                    const path = parent.length ? parent + '.' + key : key;
                    (0, lodash_set_1.default)(obj, path, item);
                }
            }
            return object(obj);
        }
        // Need to fix this typing.
        // @ts-ignore
        return recurseObject(config);
    }
    /**
     * Extends the current instance with additional validator methods.
     *
     * @param extend object of validator to extend instance with.
     * @param depth the depth of errors.
     */
    function extend(extend, opt) {
        const clone = { ...initializedValidators };
        for (const [key, val] of Object.entries(extend)) {
            clone[key] = { ...clone[key], ...val[key] };
        }
        return createValidators(clone, { ...options, ...opt });
    }
    return {
        ...instance,
        extend,
        object,
        fromObject
    };
}
exports.createValidators = createValidators;
const kensho = createValidators({
    string: methods_1.stringValidators,
    array: methods_1.arrayValidators,
    number: methods_1.numberValidators,
    boolean: methods_1.booleanValidators,
    file: methods_1.fileValidators
});
const { string, array, number, boolean, file } = kensho;
exports.string = string;
exports.array = array;
exports.number = number;
exports.boolean = boolean;
exports.file = file;
exports.default = kensho;
//# sourceMappingURL=init.js.map