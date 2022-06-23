import type { CreateValidatorHandler, ValidatorDefineHandler, TypeApi, Api, ValidatorOptions, ApiConfig, WithParsers, FromObject } from './types';
export declare function createValidators<T extends Record<string, Record<string, CreateValidatorHandler>>>(validators?: T, options?: ValidatorOptions): Api<T> & {
    extend: <E extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E, opt?: ValidatorOptions) => Api<T & E> & {
        extend: <E_1 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_1, opt?: ValidatorOptions) => Api<T & E & E_1> & {
            extend: <E_2 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_2, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2> & {
                extend: <E_3 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_3, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3> & {
                    extend: <E_4 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_4, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3 & E_4> & {
                        extend: <E_5 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_5, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3 & E_4 & E_5> & {
                            extend: <E_6 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_6, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6> & {
                                extend: <E_7 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_7, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7> & {
                                    extend: <E_8 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_8, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8> & {
                                        extend: <E_9 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_9, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9> & {
                                            extend: <E_10 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_10, opt?: ValidatorOptions) => Api<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9 & E_10> & any;
                                            object: <C extends ApiConfig<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9, keyof T | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6 | keyof E_7 | keyof E_8 | keyof E_9>>(config: C) => {
                                                parse: <V extends Record<string, unknown>>(values: V, ...args: any[]) => import("./types").ParsedErrorsMap<V>;
                                                parseFlat: <V_1 extends Record<string, unknown>>(values: V_1, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_1>>, string[]>;
                                                parseAsync: <V_2 extends Record<string, unknown>>(values: V_2, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_2>>;
                                                parseFlatAsync: <V_3 extends Record<string, unknown>>(values: V_3, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_3>>, string[]>>;
                                            };
                                            fromObject: <F extends FromObject<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9>>(config: F) => {
                                                parse: <V_4 extends Record<string, unknown>>(values: V_4, ...args: any[]) => import("./types").ParsedErrorsMap<V_4>;
                                                parseFlat: <V_5 extends Record<string, unknown>>(values: V_5, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_5>>, string[]>;
                                                parseAsync: <V_6 extends Record<string, unknown>>(values: V_6, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_6>>;
                                                parseFlatAsync: <V_7 extends Record<string, unknown>>(values: V_7, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_7>>, string[]>>;
                                            };
                                        };
                                        object: <C_1 extends ApiConfig<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8, keyof T | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6 | keyof E_7 | keyof E_8>>(config: C_1) => {
                                            parse: <V_8 extends Record<string, unknown>>(values: V_8, ...args: any[]) => import("./types").ParsedErrorsMap<V_8>;
                                            parseFlat: <V_9 extends Record<string, unknown>>(values: V_9, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_9>>, string[]>;
                                            parseAsync: <V_10 extends Record<string, unknown>>(values: V_10, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_10>>;
                                            parseFlatAsync: <V_11 extends Record<string, unknown>>(values: V_11, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_11>>, string[]>>;
                                        };
                                        fromObject: <F_1 extends FromObject<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8>>(config: F_1) => {
                                            parse: <V_12 extends Record<string, unknown>>(values: V_12, ...args: any[]) => import("./types").ParsedErrorsMap<V_12>;
                                            parseFlat: <V_13 extends Record<string, unknown>>(values: V_13, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_13>>, string[]>;
                                            parseAsync: <V_14 extends Record<string, unknown>>(values: V_14, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_14>>;
                                            parseFlatAsync: <V_15 extends Record<string, unknown>>(values: V_15, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_15>>, string[]>>;
                                        };
                                    };
                                    object: <C_2 extends ApiConfig<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7, keyof T | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6 | keyof E_7>>(config: C_2) => {
                                        parse: <V_16 extends Record<string, unknown>>(values: V_16, ...args: any[]) => import("./types").ParsedErrorsMap<V_16>;
                                        parseFlat: <V_17 extends Record<string, unknown>>(values: V_17, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_17>>, string[]>;
                                        parseAsync: <V_18 extends Record<string, unknown>>(values: V_18, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_18>>;
                                        parseFlatAsync: <V_19 extends Record<string, unknown>>(values: V_19, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_19>>, string[]>>;
                                    };
                                    fromObject: <F_2 extends FromObject<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7>>(config: F_2) => {
                                        parse: <V_20 extends Record<string, unknown>>(values: V_20, ...args: any[]) => import("./types").ParsedErrorsMap<V_20>;
                                        parseFlat: <V_21 extends Record<string, unknown>>(values: V_21, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_21>>, string[]>;
                                        parseAsync: <V_22 extends Record<string, unknown>>(values: V_22, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_22>>;
                                        parseFlatAsync: <V_23 extends Record<string, unknown>>(values: V_23, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_23>>, string[]>>;
                                    };
                                };
                                object: <C_3 extends ApiConfig<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6, keyof T | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6>>(config: C_3) => {
                                    parse: <V_24 extends Record<string, unknown>>(values: V_24, ...args: any[]) => import("./types").ParsedErrorsMap<V_24>;
                                    parseFlat: <V_25 extends Record<string, unknown>>(values: V_25, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_25>>, string[]>;
                                    parseAsync: <V_26 extends Record<string, unknown>>(values: V_26, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_26>>;
                                    parseFlatAsync: <V_27 extends Record<string, unknown>>(values: V_27, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_27>>, string[]>>;
                                };
                                fromObject: <F_3 extends FromObject<T & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6>>(config: F_3) => {
                                    parse: <V_28 extends Record<string, unknown>>(values: V_28, ...args: any[]) => import("./types").ParsedErrorsMap<V_28>;
                                    parseFlat: <V_29 extends Record<string, unknown>>(values: V_29, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_29>>, string[]>;
                                    parseAsync: <V_30 extends Record<string, unknown>>(values: V_30, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_30>>;
                                    parseFlatAsync: <V_31 extends Record<string, unknown>>(values: V_31, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_31>>, string[]>>;
                                };
                            };
                            object: <C_4 extends ApiConfig<T & E & E_1 & E_2 & E_3 & E_4 & E_5, keyof T | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5>>(config: C_4) => {
                                parse: <V_32 extends Record<string, unknown>>(values: V_32, ...args: any[]) => import("./types").ParsedErrorsMap<V_32>;
                                parseFlat: <V_33 extends Record<string, unknown>>(values: V_33, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_33>>, string[]>;
                                parseAsync: <V_34 extends Record<string, unknown>>(values: V_34, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_34>>;
                                parseFlatAsync: <V_35 extends Record<string, unknown>>(values: V_35, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_35>>, string[]>>;
                            };
                            fromObject: <F_4 extends FromObject<T & E & E_1 & E_2 & E_3 & E_4 & E_5>>(config: F_4) => {
                                parse: <V_36 extends Record<string, unknown>>(values: V_36, ...args: any[]) => import("./types").ParsedErrorsMap<V_36>;
                                parseFlat: <V_37 extends Record<string, unknown>>(values: V_37, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_37>>, string[]>;
                                parseAsync: <V_38 extends Record<string, unknown>>(values: V_38, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_38>>;
                                parseFlatAsync: <V_39 extends Record<string, unknown>>(values: V_39, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_39>>, string[]>>;
                            };
                        };
                        object: <C_5 extends ApiConfig<T & E & E_1 & E_2 & E_3 & E_4, keyof T | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4>>(config: C_5) => {
                            parse: <V_40 extends Record<string, unknown>>(values: V_40, ...args: any[]) => import("./types").ParsedErrorsMap<V_40>;
                            parseFlat: <V_41 extends Record<string, unknown>>(values: V_41, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_41>>, string[]>;
                            parseAsync: <V_42 extends Record<string, unknown>>(values: V_42, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_42>>;
                            parseFlatAsync: <V_43 extends Record<string, unknown>>(values: V_43, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_43>>, string[]>>;
                        };
                        fromObject: <F_5 extends FromObject<T & E & E_1 & E_2 & E_3 & E_4>>(config: F_5) => {
                            parse: <V_44 extends Record<string, unknown>>(values: V_44, ...args: any[]) => import("./types").ParsedErrorsMap<V_44>;
                            parseFlat: <V_45 extends Record<string, unknown>>(values: V_45, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_45>>, string[]>;
                            parseAsync: <V_46 extends Record<string, unknown>>(values: V_46, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_46>>;
                            parseFlatAsync: <V_47 extends Record<string, unknown>>(values: V_47, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_47>>, string[]>>;
                        };
                    };
                    object: <C_6 extends ApiConfig<T & E & E_1 & E_2 & E_3, keyof T | keyof E | keyof E_1 | keyof E_2 | keyof E_3>>(config: C_6) => {
                        parse: <V_48 extends Record<string, unknown>>(values: V_48, ...args: any[]) => import("./types").ParsedErrorsMap<V_48>;
                        parseFlat: <V_49 extends Record<string, unknown>>(values: V_49, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_49>>, string[]>;
                        parseAsync: <V_50 extends Record<string, unknown>>(values: V_50, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_50>>;
                        parseFlatAsync: <V_51 extends Record<string, unknown>>(values: V_51, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_51>>, string[]>>;
                    };
                    fromObject: <F_6 extends FromObject<T & E & E_1 & E_2 & E_3>>(config: F_6) => {
                        parse: <V_52 extends Record<string, unknown>>(values: V_52, ...args: any[]) => import("./types").ParsedErrorsMap<V_52>;
                        parseFlat: <V_53 extends Record<string, unknown>>(values: V_53, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_53>>, string[]>;
                        parseAsync: <V_54 extends Record<string, unknown>>(values: V_54, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_54>>;
                        parseFlatAsync: <V_55 extends Record<string, unknown>>(values: V_55, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_55>>, string[]>>;
                    };
                };
                object: <C_7 extends ApiConfig<T & E & E_1 & E_2, keyof T | keyof E | keyof E_1 | keyof E_2>>(config: C_7) => {
                    parse: <V_56 extends Record<string, unknown>>(values: V_56, ...args: any[]) => import("./types").ParsedErrorsMap<V_56>;
                    parseFlat: <V_57 extends Record<string, unknown>>(values: V_57, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_57>>, string[]>;
                    parseAsync: <V_58 extends Record<string, unknown>>(values: V_58, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_58>>;
                    parseFlatAsync: <V_59 extends Record<string, unknown>>(values: V_59, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_59>>, string[]>>;
                };
                fromObject: <F_7 extends FromObject<T & E & E_1 & E_2>>(config: F_7) => {
                    parse: <V_60 extends Record<string, unknown>>(values: V_60, ...args: any[]) => import("./types").ParsedErrorsMap<V_60>;
                    parseFlat: <V_61 extends Record<string, unknown>>(values: V_61, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_61>>, string[]>;
                    parseAsync: <V_62 extends Record<string, unknown>>(values: V_62, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_62>>;
                    parseFlatAsync: <V_63 extends Record<string, unknown>>(values: V_63, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_63>>, string[]>>;
                };
            };
            object: <C_8 extends ApiConfig<T & E & E_1, keyof T | keyof E | keyof E_1>>(config: C_8) => {
                parse: <V_64 extends Record<string, unknown>>(values: V_64, ...args: any[]) => import("./types").ParsedErrorsMap<V_64>;
                parseFlat: <V_65 extends Record<string, unknown>>(values: V_65, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_65>>, string[]>;
                parseAsync: <V_66 extends Record<string, unknown>>(values: V_66, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_66>>;
                parseFlatAsync: <V_67 extends Record<string, unknown>>(values: V_67, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_67>>, string[]>>;
            };
            fromObject: <F_8 extends FromObject<T & E & E_1>>(config: F_8) => {
                parse: <V_68 extends Record<string, unknown>>(values: V_68, ...args: any[]) => import("./types").ParsedErrorsMap<V_68>;
                parseFlat: <V_69 extends Record<string, unknown>>(values: V_69, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_69>>, string[]>;
                parseAsync: <V_70 extends Record<string, unknown>>(values: V_70, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_70>>;
                parseFlatAsync: <V_71 extends Record<string, unknown>>(values: V_71, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_71>>, string[]>>;
            };
        };
        object: <C_9 extends ApiConfig<T & E, keyof T | keyof E>>(config: C_9) => {
            parse: <V_72 extends Record<string, unknown>>(values: V_72, ...args: any[]) => import("./types").ParsedErrorsMap<V_72>;
            parseFlat: <V_73 extends Record<string, unknown>>(values: V_73, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_73>>, string[]>;
            parseAsync: <V_74 extends Record<string, unknown>>(values: V_74, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_74>>;
            parseFlatAsync: <V_75 extends Record<string, unknown>>(values: V_75, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_75>>, string[]>>;
        };
        fromObject: <F_9 extends FromObject<T & E>>(config: F_9) => {
            parse: <V_76 extends Record<string, unknown>>(values: V_76, ...args: any[]) => import("./types").ParsedErrorsMap<V_76>;
            parseFlat: <V_77 extends Record<string, unknown>>(values: V_77, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_77>>, string[]>;
            parseAsync: <V_78 extends Record<string, unknown>>(values: V_78, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_78>>;
            parseFlatAsync: <V_79 extends Record<string, unknown>>(values: V_79, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_79>>, string[]>>;
        };
    };
    object: <C_10 extends ApiConfig<T, keyof T>>(config: C_10) => {
        parse: <V_80 extends Record<string, unknown>>(values: V_80, ...args: any[]) => import("./types").ParsedErrorsMap<V_80>;
        parseFlat: <V_81 extends Record<string, unknown>>(values: V_81, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_81>>, string[]>;
        parseAsync: <V_82 extends Record<string, unknown>>(values: V_82, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_82>>;
        parseFlatAsync: <V_83 extends Record<string, unknown>>(values: V_83, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_83>>, string[]>>;
    };
    fromObject: <F_10 extends FromObject<T>>(config: F_10) => {
        parse: <V_84 extends Record<string, unknown>>(values: V_84, ...args: any[]) => import("./types").ParsedErrorsMap<V_84>;
        parseFlat: <V_85 extends Record<string, unknown>>(values: V_85, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_85>>, string[]>;
        parseAsync: <V_86 extends Record<string, unknown>>(values: V_86, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_86>>;
        parseFlatAsync: <V_87 extends Record<string, unknown>>(values: V_87, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_87>>, string[]>>;
    };
};
declare const kensho: Api<{
    string: {
        default: (message?: string) => (value: any) => string;
        required: (message?: string) => (value: any) => string;
        minlength: (len: number, message?: string) => (value: any) => string;
        equals: (compare: any, message?: string) => (value: any) => string;
        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
        maxlength: (len: number, message?: string) => (value: any) => string;
        length: (len: number, message?: string) => (value: any) => string;
        pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
        url: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
        email: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
        tel: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
        ssn: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
        ip: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
        mac: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
        zip: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
        password: {
            (exp: RegExp, message?: string | undefined): (value: any) => string;
            (message?: string | undefined): (value: any) => string;
        };
    };
    array: {
        default: (message?: string) => (value: any) => string;
        required: (message?: string) => (value: any) => string;
        minlength: (len: number, message?: string) => (value: any) => string;
        maxlength: (len: number, message?: string) => (value: any) => string;
        length: (len: number, message?: string) => (value: any) => string;
        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
        of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
            (_value: any): string;
            _handlers: TypeApi<T>;
        };
    };
    number: {
        default: (message?: string) => (value: any) => string;
        required: (message?: string) => (value: any) => string;
        min: (min: number, message?: string) => (value: any) => string;
        max: (max: number, message?: string) => (value: any) => string;
        integer: (message?: string) => (value: any) => string;
        float: (message?: string) => (value: any) => string;
        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
    };
    boolean: {
        default: (message?: string) => (value: any) => string;
    };
    file: {
        default: (message?: string) => (value: File | File[]) => string;
        required: (message?: string) => (value: any) => string;
        accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
        min: (min: number, message?: string) => (value: File | File[]) => string;
        max: (max: number, message?: string) => (value: File | File[]) => string;
        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
    };
}> & {
    extend: <E extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E, opt?: ValidatorOptions) => Api<{
        string: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            minlength: (len: number, message?: string) => (value: any) => string;
            equals: (compare: any, message?: string) => (value: any) => string;
            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
            maxlength: (len: number, message?: string) => (value: any) => string;
            length: (len: number, message?: string) => (value: any) => string;
            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
            url: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            email: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            tel: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            ssn: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            ip: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            mac: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            zip: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            password: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
        };
        array: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            minlength: (len: number, message?: string) => (value: any) => string;
            maxlength: (len: number, message?: string) => (value: any) => string;
            length: (len: number, message?: string) => (value: any) => string;
            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                (_value: any): string;
                _handlers: TypeApi<T>;
            };
        };
        number: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            min: (min: number, message?: string) => (value: any) => string;
            max: (max: number, message?: string) => (value: any) => string;
            integer: (message?: string) => (value: any) => string;
            float: (message?: string) => (value: any) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        };
        boolean: {
            default: (message?: string) => (value: any) => string;
        };
        file: {
            default: (message?: string) => (value: File | File[]) => string;
            required: (message?: string) => (value: any) => string;
            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
            min: (min: number, message?: string) => (value: File | File[]) => string;
            max: (max: number, message?: string) => (value: File | File[]) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        };
    } & E> & {
        extend: <E_1 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_1, opt?: ValidatorOptions) => Api<{
            string: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                minlength: (len: number, message?: string) => (value: any) => string;
                equals: (compare: any, message?: string) => (value: any) => string;
                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                maxlength: (len: number, message?: string) => (value: any) => string;
                length: (len: number, message?: string) => (value: any) => string;
                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                url: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                email: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                tel: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                ssn: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                ip: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                mac: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                zip: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                password: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
            };
            array: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                minlength: (len: number, message?: string) => (value: any) => string;
                maxlength: (len: number, message?: string) => (value: any) => string;
                length: (len: number, message?: string) => (value: any) => string;
                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                    (_value: any): string;
                    _handlers: TypeApi<T>;
                };
            };
            number: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                min: (min: number, message?: string) => (value: any) => string;
                max: (max: number, message?: string) => (value: any) => string;
                integer: (message?: string) => (value: any) => string;
                float: (message?: string) => (value: any) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            };
            boolean: {
                default: (message?: string) => (value: any) => string;
            };
            file: {
                default: (message?: string) => (value: File | File[]) => string;
                required: (message?: string) => (value: any) => string;
                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                min: (min: number, message?: string) => (value: File | File[]) => string;
                max: (max: number, message?: string) => (value: File | File[]) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            };
        } & E & E_1> & {
            extend: <E_2 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_2, opt?: ValidatorOptions) => Api<{
                string: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    minlength: (len: number, message?: string) => (value: any) => string;
                    equals: (compare: any, message?: string) => (value: any) => string;
                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                    maxlength: (len: number, message?: string) => (value: any) => string;
                    length: (len: number, message?: string) => (value: any) => string;
                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                    url: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    email: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    tel: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    ssn: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    ip: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    mac: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    zip: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    password: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                };
                array: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    minlength: (len: number, message?: string) => (value: any) => string;
                    maxlength: (len: number, message?: string) => (value: any) => string;
                    length: (len: number, message?: string) => (value: any) => string;
                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                        (_value: any): string;
                        _handlers: TypeApi<T>;
                    };
                };
                number: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    min: (min: number, message?: string) => (value: any) => string;
                    max: (max: number, message?: string) => (value: any) => string;
                    integer: (message?: string) => (value: any) => string;
                    float: (message?: string) => (value: any) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                };
                boolean: {
                    default: (message?: string) => (value: any) => string;
                };
                file: {
                    default: (message?: string) => (value: File | File[]) => string;
                    required: (message?: string) => (value: any) => string;
                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                    min: (min: number, message?: string) => (value: File | File[]) => string;
                    max: (max: number, message?: string) => (value: File | File[]) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                };
            } & E & E_1 & E_2> & {
                extend: <E_3 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_3, opt?: ValidatorOptions) => Api<{
                    string: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        minlength: (len: number, message?: string) => (value: any) => string;
                        equals: (compare: any, message?: string) => (value: any) => string;
                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                        maxlength: (len: number, message?: string) => (value: any) => string;
                        length: (len: number, message?: string) => (value: any) => string;
                        pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                        url: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        email: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        tel: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        ssn: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        ip: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        mac: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        zip: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        password: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                    };
                    array: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        minlength: (len: number, message?: string) => (value: any) => string;
                        maxlength: (len: number, message?: string) => (value: any) => string;
                        length: (len: number, message?: string) => (value: any) => string;
                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                            (_value: any): string;
                            _handlers: TypeApi<T>;
                        };
                    };
                    number: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        min: (min: number, message?: string) => (value: any) => string;
                        max: (max: number, message?: string) => (value: any) => string;
                        integer: (message?: string) => (value: any) => string;
                        float: (message?: string) => (value: any) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    };
                    boolean: {
                        default: (message?: string) => (value: any) => string;
                    };
                    file: {
                        default: (message?: string) => (value: File | File[]) => string;
                        required: (message?: string) => (value: any) => string;
                        accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                        min: (min: number, message?: string) => (value: File | File[]) => string;
                        max: (max: number, message?: string) => (value: File | File[]) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    };
                } & E & E_1 & E_2 & E_3> & {
                    extend: <E_4 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_4, opt?: ValidatorOptions) => Api<{
                        string: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            minlength: (len: number, message?: string) => (value: any) => string;
                            equals: (compare: any, message?: string) => (value: any) => string;
                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                            maxlength: (len: number, message?: string) => (value: any) => string;
                            length: (len: number, message?: string) => (value: any) => string;
                            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                            url: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            email: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            tel: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            ssn: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            ip: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            mac: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            zip: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            password: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                        };
                        array: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            minlength: (len: number, message?: string) => (value: any) => string;
                            maxlength: (len: number, message?: string) => (value: any) => string;
                            length: (len: number, message?: string) => (value: any) => string;
                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                (_value: any): string;
                                _handlers: TypeApi<T>;
                            };
                        };
                        number: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            min: (min: number, message?: string) => (value: any) => string;
                            max: (max: number, message?: string) => (value: any) => string;
                            integer: (message?: string) => (value: any) => string;
                            float: (message?: string) => (value: any) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        };
                        boolean: {
                            default: (message?: string) => (value: any) => string;
                        };
                        file: {
                            default: (message?: string) => (value: File | File[]) => string;
                            required: (message?: string) => (value: any) => string;
                            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                            min: (min: number, message?: string) => (value: File | File[]) => string;
                            max: (max: number, message?: string) => (value: File | File[]) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        };
                    } & E & E_1 & E_2 & E_3 & E_4> & {
                        extend: <E_5 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_5, opt?: ValidatorOptions) => Api<{
                            string: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                minlength: (len: number, message?: string) => (value: any) => string;
                                equals: (compare: any, message?: string) => (value: any) => string;
                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                maxlength: (len: number, message?: string) => (value: any) => string;
                                length: (len: number, message?: string) => (value: any) => string;
                                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                url: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                email: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                tel: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                ssn: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                ip: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                mac: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                zip: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                password: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                            };
                            array: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                minlength: (len: number, message?: string) => (value: any) => string;
                                maxlength: (len: number, message?: string) => (value: any) => string;
                                length: (len: number, message?: string) => (value: any) => string;
                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                    (_value: any): string;
                                    _handlers: TypeApi<T>;
                                };
                            };
                            number: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                min: (min: number, message?: string) => (value: any) => string;
                                max: (max: number, message?: string) => (value: any) => string;
                                integer: (message?: string) => (value: any) => string;
                                float: (message?: string) => (value: any) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            };
                            boolean: {
                                default: (message?: string) => (value: any) => string;
                            };
                            file: {
                                default: (message?: string) => (value: File | File[]) => string;
                                required: (message?: string) => (value: any) => string;
                                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                min: (min: number, message?: string) => (value: File | File[]) => string;
                                max: (max: number, message?: string) => (value: File | File[]) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            };
                        } & E & E_1 & E_2 & E_3 & E_4 & E_5> & {
                            extend: <E_6 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_6, opt?: ValidatorOptions) => Api<{
                                string: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    minlength: (len: number, message?: string) => (value: any) => string;
                                    equals: (compare: any, message?: string) => (value: any) => string;
                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                    length: (len: number, message?: string) => (value: any) => string;
                                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                    url: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    email: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    tel: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    ssn: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    ip: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    mac: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    zip: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    password: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                };
                                array: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    minlength: (len: number, message?: string) => (value: any) => string;
                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                    length: (len: number, message?: string) => (value: any) => string;
                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                        (_value: any): string;
                                        _handlers: TypeApi<T>;
                                    };
                                };
                                number: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    min: (min: number, message?: string) => (value: any) => string;
                                    max: (max: number, message?: string) => (value: any) => string;
                                    integer: (message?: string) => (value: any) => string;
                                    float: (message?: string) => (value: any) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                };
                                boolean: {
                                    default: (message?: string) => (value: any) => string;
                                };
                                file: {
                                    default: (message?: string) => (value: File | File[]) => string;
                                    required: (message?: string) => (value: any) => string;
                                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                    min: (min: number, message?: string) => (value: File | File[]) => string;
                                    max: (max: number, message?: string) => (value: File | File[]) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                };
                            } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6> & {
                                extend: <E_7 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_7, opt?: ValidatorOptions) => Api<{
                                    string: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        minlength: (len: number, message?: string) => (value: any) => string;
                                        equals: (compare: any, message?: string) => (value: any) => string;
                                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                        maxlength: (len: number, message?: string) => (value: any) => string;
                                        length: (len: number, message?: string) => (value: any) => string;
                                        pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                        url: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        email: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        tel: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        ssn: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        ip: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        mac: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        zip: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        password: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                    };
                                    array: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        minlength: (len: number, message?: string) => (value: any) => string;
                                        maxlength: (len: number, message?: string) => (value: any) => string;
                                        length: (len: number, message?: string) => (value: any) => string;
                                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                            (_value: any): string;
                                            _handlers: TypeApi<T>;
                                        };
                                    };
                                    number: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        min: (min: number, message?: string) => (value: any) => string;
                                        max: (max: number, message?: string) => (value: any) => string;
                                        integer: (message?: string) => (value: any) => string;
                                        float: (message?: string) => (value: any) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    };
                                    boolean: {
                                        default: (message?: string) => (value: any) => string;
                                    };
                                    file: {
                                        default: (message?: string) => (value: File | File[]) => string;
                                        required: (message?: string) => (value: any) => string;
                                        accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                        min: (min: number, message?: string) => (value: File | File[]) => string;
                                        max: (max: number, message?: string) => (value: File | File[]) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    };
                                } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7> & {
                                    extend: <E_8 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_8, opt?: ValidatorOptions) => Api<{
                                        string: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            minlength: (len: number, message?: string) => (value: any) => string;
                                            equals: (compare: any, message?: string) => (value: any) => string;
                                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                            maxlength: (len: number, message?: string) => (value: any) => string;
                                            length: (len: number, message?: string) => (value: any) => string;
                                            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                            url: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            email: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            tel: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            ssn: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            ip: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            mac: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            zip: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            password: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                        };
                                        array: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            minlength: (len: number, message?: string) => (value: any) => string;
                                            maxlength: (len: number, message?: string) => (value: any) => string;
                                            length: (len: number, message?: string) => (value: any) => string;
                                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                (_value: any): string;
                                                _handlers: TypeApi<T>;
                                            };
                                        };
                                        number: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            min: (min: number, message?: string) => (value: any) => string;
                                            max: (max: number, message?: string) => (value: any) => string;
                                            integer: (message?: string) => (value: any) => string;
                                            float: (message?: string) => (value: any) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        };
                                        boolean: {
                                            default: (message?: string) => (value: any) => string;
                                        };
                                        file: {
                                            default: (message?: string) => (value: File | File[]) => string;
                                            required: (message?: string) => (value: any) => string;
                                            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                            min: (min: number, message?: string) => (value: File | File[]) => string;
                                            max: (max: number, message?: string) => (value: File | File[]) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        };
                                    } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8> & {
                                        extend: <E_9 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_9, opt?: ValidatorOptions) => Api<{
                                            string: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                minlength: (len: number, message?: string) => (value: any) => string;
                                                equals: (compare: any, message?: string) => (value: any) => string;
                                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                maxlength: (len: number, message?: string) => (value: any) => string;
                                                length: (len: number, message?: string) => (value: any) => string;
                                                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                                url: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                email: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                tel: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                ssn: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                ip: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                mac: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                zip: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                password: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                            };
                                            array: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                minlength: (len: number, message?: string) => (value: any) => string;
                                                maxlength: (len: number, message?: string) => (value: any) => string;
                                                length: (len: number, message?: string) => (value: any) => string;
                                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                    (_value: any): string;
                                                    _handlers: TypeApi<T>;
                                                };
                                            };
                                            number: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                min: (min: number, message?: string) => (value: any) => string;
                                                max: (max: number, message?: string) => (value: any) => string;
                                                integer: (message?: string) => (value: any) => string;
                                                float: (message?: string) => (value: any) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            };
                                            boolean: {
                                                default: (message?: string) => (value: any) => string;
                                            };
                                            file: {
                                                default: (message?: string) => (value: File | File[]) => string;
                                                required: (message?: string) => (value: any) => string;
                                                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                                min: (min: number, message?: string) => (value: File | File[]) => string;
                                                max: (max: number, message?: string) => (value: File | File[]) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            };
                                        } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9> & {
                                            extend: <E_10 extends Record<string, Record<string, CreateValidatorHandler>>>(extend: E_10, opt?: ValidatorOptions) => Api<{
                                                string: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    minlength: (len: number, message?: string) => (value: any) => string;
                                                    equals: (compare: any, message?: string) => (value: any) => string;
                                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                                    length: (len: number, message?: string) => (value: any) => string;
                                                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                                    url: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    email: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    tel: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    ssn: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    ip: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    mac: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    zip: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    password: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                };
                                                array: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    minlength: (len: number, message?: string) => (value: any) => string;
                                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                                    length: (len: number, message?: string) => (value: any) => string;
                                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                        (_value: any): string;
                                                        _handlers: TypeApi<T>;
                                                    };
                                                };
                                                number: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    min: (min: number, message?: string) => (value: any) => string;
                                                    max: (max: number, message?: string) => (value: any) => string;
                                                    integer: (message?: string) => (value: any) => string;
                                                    float: (message?: string) => (value: any) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                };
                                                boolean: {
                                                    default: (message?: string) => (value: any) => string;
                                                };
                                                file: {
                                                    default: (message?: string) => (value: File | File[]) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                                    min: (min: number, message?: string) => (value: File | File[]) => string;
                                                    max: (max: number, message?: string) => (value: File | File[]) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                };
                                            } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9 & E_10> & any;
                                            object: <C extends ApiConfig<{
                                                string: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    minlength: (len: number, message?: string) => (value: any) => string;
                                                    equals: (compare: any, message?: string) => (value: any) => string;
                                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                                    length: (len: number, message?: string) => (value: any) => string;
                                                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                                    url: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    email: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    tel: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    ssn: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    ip: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    mac: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    zip: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    password: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                };
                                                array: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    minlength: (len: number, message?: string) => (value: any) => string;
                                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                                    length: (len: number, message?: string) => (value: any) => string;
                                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                        (_value: any): string;
                                                        _handlers: TypeApi<T>;
                                                    };
                                                };
                                                number: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    min: (min: number, message?: string) => (value: any) => string;
                                                    max: (max: number, message?: string) => (value: any) => string;
                                                    integer: (message?: string) => (value: any) => string;
                                                    float: (message?: string) => (value: any) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                };
                                                boolean: {
                                                    default: (message?: string) => (value: any) => string;
                                                };
                                                file: {
                                                    default: (message?: string) => (value: File | File[]) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                                    min: (min: number, message?: string) => (value: File | File[]) => string;
                                                    max: (max: number, message?: string) => (value: File | File[]) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                };
                                            } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6 | keyof E_7 | keyof E_8 | keyof E_9>>(config: C) => {
                                                parse: <V extends Record<string, unknown>>(values: V, ...args: any[]) => import("./types").ParsedErrorsMap<V>;
                                                parseFlat: <V_1 extends Record<string, unknown>>(values: V_1, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_1>>, string[]>;
                                                parseAsync: <V_2 extends Record<string, unknown>>(values: V_2, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_2>>;
                                                parseFlatAsync: <V_3 extends Record<string, unknown>>(values: V_3, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_3>>, string[]>>;
                                            };
                                            fromObject: <F extends FromObject<{
                                                string: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    minlength: (len: number, message?: string) => (value: any) => string;
                                                    equals: (compare: any, message?: string) => (value: any) => string;
                                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                                    length: (len: number, message?: string) => (value: any) => string;
                                                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                                    url: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    email: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    tel: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    ssn: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    ip: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    mac: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    zip: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                    password: {
                                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                        (message?: string | undefined): (value: any) => string;
                                                    };
                                                };
                                                array: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    minlength: (len: number, message?: string) => (value: any) => string;
                                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                                    length: (len: number, message?: string) => (value: any) => string;
                                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                        (_value: any): string;
                                                        _handlers: TypeApi<T>;
                                                    };
                                                };
                                                number: {
                                                    default: (message?: string) => (value: any) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    min: (min: number, message?: string) => (value: any) => string;
                                                    max: (max: number, message?: string) => (value: any) => string;
                                                    integer: (message?: string) => (value: any) => string;
                                                    float: (message?: string) => (value: any) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                };
                                                boolean: {
                                                    default: (message?: string) => (value: any) => string;
                                                };
                                                file: {
                                                    default: (message?: string) => (value: File | File[]) => string;
                                                    required: (message?: string) => (value: any) => string;
                                                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                                    min: (min: number, message?: string) => (value: File | File[]) => string;
                                                    max: (max: number, message?: string) => (value: File | File[]) => string;
                                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                };
                                            } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8 & E_9>>(config: F) => {
                                                parse: <V_4 extends Record<string, unknown>>(values: V_4, ...args: any[]) => import("./types").ParsedErrorsMap<V_4>;
                                                parseFlat: <V_5 extends Record<string, unknown>>(values: V_5, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_5>>, string[]>;
                                                parseAsync: <V_6 extends Record<string, unknown>>(values: V_6, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_6>>;
                                                parseFlatAsync: <V_7 extends Record<string, unknown>>(values: V_7, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_7>>, string[]>>;
                                            };
                                        };
                                        object: <C_1 extends ApiConfig<{
                                            string: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                minlength: (len: number, message?: string) => (value: any) => string;
                                                equals: (compare: any, message?: string) => (value: any) => string;
                                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                maxlength: (len: number, message?: string) => (value: any) => string;
                                                length: (len: number, message?: string) => (value: any) => string;
                                                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                                url: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                email: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                tel: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                ssn: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                ip: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                mac: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                zip: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                password: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                            };
                                            array: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                minlength: (len: number, message?: string) => (value: any) => string;
                                                maxlength: (len: number, message?: string) => (value: any) => string;
                                                length: (len: number, message?: string) => (value: any) => string;
                                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                    (_value: any): string;
                                                    _handlers: TypeApi<T>;
                                                };
                                            };
                                            number: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                min: (min: number, message?: string) => (value: any) => string;
                                                max: (max: number, message?: string) => (value: any) => string;
                                                integer: (message?: string) => (value: any) => string;
                                                float: (message?: string) => (value: any) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            };
                                            boolean: {
                                                default: (message?: string) => (value: any) => string;
                                            };
                                            file: {
                                                default: (message?: string) => (value: File | File[]) => string;
                                                required: (message?: string) => (value: any) => string;
                                                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                                min: (min: number, message?: string) => (value: File | File[]) => string;
                                                max: (max: number, message?: string) => (value: File | File[]) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            };
                                        } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6 | keyof E_7 | keyof E_8>>(config: C_1) => {
                                            parse: <V_8 extends Record<string, unknown>>(values: V_8, ...args: any[]) => import("./types").ParsedErrorsMap<V_8>;
                                            parseFlat: <V_9 extends Record<string, unknown>>(values: V_9, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_9>>, string[]>;
                                            parseAsync: <V_10 extends Record<string, unknown>>(values: V_10, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_10>>;
                                            parseFlatAsync: <V_11 extends Record<string, unknown>>(values: V_11, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_11>>, string[]>>;
                                        };
                                        fromObject: <F_1 extends FromObject<{
                                            string: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                minlength: (len: number, message?: string) => (value: any) => string;
                                                equals: (compare: any, message?: string) => (value: any) => string;
                                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                maxlength: (len: number, message?: string) => (value: any) => string;
                                                length: (len: number, message?: string) => (value: any) => string;
                                                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                                url: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                email: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                tel: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                ssn: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                ip: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                mac: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                zip: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                                password: {
                                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                    (message?: string | undefined): (value: any) => string;
                                                };
                                            };
                                            array: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                minlength: (len: number, message?: string) => (value: any) => string;
                                                maxlength: (len: number, message?: string) => (value: any) => string;
                                                length: (len: number, message?: string) => (value: any) => string;
                                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                    (_value: any): string;
                                                    _handlers: TypeApi<T>;
                                                };
                                            };
                                            number: {
                                                default: (message?: string) => (value: any) => string;
                                                required: (message?: string) => (value: any) => string;
                                                min: (min: number, message?: string) => (value: any) => string;
                                                max: (max: number, message?: string) => (value: any) => string;
                                                integer: (message?: string) => (value: any) => string;
                                                float: (message?: string) => (value: any) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            };
                                            boolean: {
                                                default: (message?: string) => (value: any) => string;
                                            };
                                            file: {
                                                default: (message?: string) => (value: File | File[]) => string;
                                                required: (message?: string) => (value: any) => string;
                                                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                                min: (min: number, message?: string) => (value: File | File[]) => string;
                                                max: (max: number, message?: string) => (value: File | File[]) => string;
                                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            };
                                        } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7 & E_8>>(config: F_1) => {
                                            parse: <V_12 extends Record<string, unknown>>(values: V_12, ...args: any[]) => import("./types").ParsedErrorsMap<V_12>;
                                            parseFlat: <V_13 extends Record<string, unknown>>(values: V_13, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_13>>, string[]>;
                                            parseAsync: <V_14 extends Record<string, unknown>>(values: V_14, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_14>>;
                                            parseFlatAsync: <V_15 extends Record<string, unknown>>(values: V_15, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_15>>, string[]>>;
                                        };
                                    };
                                    object: <C_2 extends ApiConfig<{
                                        string: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            minlength: (len: number, message?: string) => (value: any) => string;
                                            equals: (compare: any, message?: string) => (value: any) => string;
                                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                            maxlength: (len: number, message?: string) => (value: any) => string;
                                            length: (len: number, message?: string) => (value: any) => string;
                                            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                            url: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            email: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            tel: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            ssn: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            ip: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            mac: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            zip: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            password: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                        };
                                        array: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            minlength: (len: number, message?: string) => (value: any) => string;
                                            maxlength: (len: number, message?: string) => (value: any) => string;
                                            length: (len: number, message?: string) => (value: any) => string;
                                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                (_value: any): string;
                                                _handlers: TypeApi<T>;
                                            };
                                        };
                                        number: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            min: (min: number, message?: string) => (value: any) => string;
                                            max: (max: number, message?: string) => (value: any) => string;
                                            integer: (message?: string) => (value: any) => string;
                                            float: (message?: string) => (value: any) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        };
                                        boolean: {
                                            default: (message?: string) => (value: any) => string;
                                        };
                                        file: {
                                            default: (message?: string) => (value: File | File[]) => string;
                                            required: (message?: string) => (value: any) => string;
                                            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                            min: (min: number, message?: string) => (value: File | File[]) => string;
                                            max: (max: number, message?: string) => (value: File | File[]) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        };
                                    } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6 | keyof E_7>>(config: C_2) => {
                                        parse: <V_16 extends Record<string, unknown>>(values: V_16, ...args: any[]) => import("./types").ParsedErrorsMap<V_16>;
                                        parseFlat: <V_17 extends Record<string, unknown>>(values: V_17, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_17>>, string[]>;
                                        parseAsync: <V_18 extends Record<string, unknown>>(values: V_18, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_18>>;
                                        parseFlatAsync: <V_19 extends Record<string, unknown>>(values: V_19, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_19>>, string[]>>;
                                    };
                                    fromObject: <F_2 extends FromObject<{
                                        string: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            minlength: (len: number, message?: string) => (value: any) => string;
                                            equals: (compare: any, message?: string) => (value: any) => string;
                                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                            maxlength: (len: number, message?: string) => (value: any) => string;
                                            length: (len: number, message?: string) => (value: any) => string;
                                            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                            url: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            email: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            tel: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            ssn: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            ip: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            mac: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            zip: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                            password: {
                                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                                (message?: string | undefined): (value: any) => string;
                                            };
                                        };
                                        array: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            minlength: (len: number, message?: string) => (value: any) => string;
                                            maxlength: (len: number, message?: string) => (value: any) => string;
                                            length: (len: number, message?: string) => (value: any) => string;
                                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                                (_value: any): string;
                                                _handlers: TypeApi<T>;
                                            };
                                        };
                                        number: {
                                            default: (message?: string) => (value: any) => string;
                                            required: (message?: string) => (value: any) => string;
                                            min: (min: number, message?: string) => (value: any) => string;
                                            max: (max: number, message?: string) => (value: any) => string;
                                            integer: (message?: string) => (value: any) => string;
                                            float: (message?: string) => (value: any) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        };
                                        boolean: {
                                            default: (message?: string) => (value: any) => string;
                                        };
                                        file: {
                                            default: (message?: string) => (value: File | File[]) => string;
                                            required: (message?: string) => (value: any) => string;
                                            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                            min: (min: number, message?: string) => (value: File | File[]) => string;
                                            max: (max: number, message?: string) => (value: File | File[]) => string;
                                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        };
                                    } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6 & E_7>>(config: F_2) => {
                                        parse: <V_20 extends Record<string, unknown>>(values: V_20, ...args: any[]) => import("./types").ParsedErrorsMap<V_20>;
                                        parseFlat: <V_21 extends Record<string, unknown>>(values: V_21, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_21>>, string[]>;
                                        parseAsync: <V_22 extends Record<string, unknown>>(values: V_22, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_22>>;
                                        parseFlatAsync: <V_23 extends Record<string, unknown>>(values: V_23, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_23>>, string[]>>;
                                    };
                                };
                                object: <C_3 extends ApiConfig<{
                                    string: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        minlength: (len: number, message?: string) => (value: any) => string;
                                        equals: (compare: any, message?: string) => (value: any) => string;
                                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                        maxlength: (len: number, message?: string) => (value: any) => string;
                                        length: (len: number, message?: string) => (value: any) => string;
                                        pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                        url: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        email: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        tel: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        ssn: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        ip: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        mac: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        zip: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        password: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                    };
                                    array: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        minlength: (len: number, message?: string) => (value: any) => string;
                                        maxlength: (len: number, message?: string) => (value: any) => string;
                                        length: (len: number, message?: string) => (value: any) => string;
                                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                            (_value: any): string;
                                            _handlers: TypeApi<T>;
                                        };
                                    };
                                    number: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        min: (min: number, message?: string) => (value: any) => string;
                                        max: (max: number, message?: string) => (value: any) => string;
                                        integer: (message?: string) => (value: any) => string;
                                        float: (message?: string) => (value: any) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    };
                                    boolean: {
                                        default: (message?: string) => (value: any) => string;
                                    };
                                    file: {
                                        default: (message?: string) => (value: File | File[]) => string;
                                        required: (message?: string) => (value: any) => string;
                                        accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                        min: (min: number, message?: string) => (value: File | File[]) => string;
                                        max: (max: number, message?: string) => (value: File | File[]) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    };
                                } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5 | keyof E_6>>(config: C_3) => {
                                    parse: <V_24 extends Record<string, unknown>>(values: V_24, ...args: any[]) => import("./types").ParsedErrorsMap<V_24>;
                                    parseFlat: <V_25 extends Record<string, unknown>>(values: V_25, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_25>>, string[]>;
                                    parseAsync: <V_26 extends Record<string, unknown>>(values: V_26, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_26>>;
                                    parseFlatAsync: <V_27 extends Record<string, unknown>>(values: V_27, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_27>>, string[]>>;
                                };
                                fromObject: <F_3 extends FromObject<{
                                    string: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        minlength: (len: number, message?: string) => (value: any) => string;
                                        equals: (compare: any, message?: string) => (value: any) => string;
                                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                        maxlength: (len: number, message?: string) => (value: any) => string;
                                        length: (len: number, message?: string) => (value: any) => string;
                                        pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                        url: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        email: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        tel: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        ssn: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        ip: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        mac: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        zip: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                        password: {
                                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                                            (message?: string | undefined): (value: any) => string;
                                        };
                                    };
                                    array: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        minlength: (len: number, message?: string) => (value: any) => string;
                                        maxlength: (len: number, message?: string) => (value: any) => string;
                                        length: (len: number, message?: string) => (value: any) => string;
                                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                        of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                            (_value: any): string;
                                            _handlers: TypeApi<T>;
                                        };
                                    };
                                    number: {
                                        default: (message?: string) => (value: any) => string;
                                        required: (message?: string) => (value: any) => string;
                                        min: (min: number, message?: string) => (value: any) => string;
                                        max: (max: number, message?: string) => (value: any) => string;
                                        integer: (message?: string) => (value: any) => string;
                                        float: (message?: string) => (value: any) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    };
                                    boolean: {
                                        default: (message?: string) => (value: any) => string;
                                    };
                                    file: {
                                        default: (message?: string) => (value: File | File[]) => string;
                                        required: (message?: string) => (value: any) => string;
                                        accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                        min: (min: number, message?: string) => (value: File | File[]) => string;
                                        max: (max: number, message?: string) => (value: File | File[]) => string;
                                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    };
                                } & E & E_1 & E_2 & E_3 & E_4 & E_5 & E_6>>(config: F_3) => {
                                    parse: <V_28 extends Record<string, unknown>>(values: V_28, ...args: any[]) => import("./types").ParsedErrorsMap<V_28>;
                                    parseFlat: <V_29 extends Record<string, unknown>>(values: V_29, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_29>>, string[]>;
                                    parseAsync: <V_30 extends Record<string, unknown>>(values: V_30, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_30>>;
                                    parseFlatAsync: <V_31 extends Record<string, unknown>>(values: V_31, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_31>>, string[]>>;
                                };
                            };
                            object: <C_4 extends ApiConfig<{
                                string: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    minlength: (len: number, message?: string) => (value: any) => string;
                                    equals: (compare: any, message?: string) => (value: any) => string;
                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                    length: (len: number, message?: string) => (value: any) => string;
                                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                    url: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    email: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    tel: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    ssn: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    ip: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    mac: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    zip: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    password: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                };
                                array: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    minlength: (len: number, message?: string) => (value: any) => string;
                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                    length: (len: number, message?: string) => (value: any) => string;
                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                        (_value: any): string;
                                        _handlers: TypeApi<T>;
                                    };
                                };
                                number: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    min: (min: number, message?: string) => (value: any) => string;
                                    max: (max: number, message?: string) => (value: any) => string;
                                    integer: (message?: string) => (value: any) => string;
                                    float: (message?: string) => (value: any) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                };
                                boolean: {
                                    default: (message?: string) => (value: any) => string;
                                };
                                file: {
                                    default: (message?: string) => (value: File | File[]) => string;
                                    required: (message?: string) => (value: any) => string;
                                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                    min: (min: number, message?: string) => (value: File | File[]) => string;
                                    max: (max: number, message?: string) => (value: File | File[]) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                };
                            } & E & E_1 & E_2 & E_3 & E_4 & E_5, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4 | keyof E_5>>(config: C_4) => {
                                parse: <V_32 extends Record<string, unknown>>(values: V_32, ...args: any[]) => import("./types").ParsedErrorsMap<V_32>;
                                parseFlat: <V_33 extends Record<string, unknown>>(values: V_33, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_33>>, string[]>;
                                parseAsync: <V_34 extends Record<string, unknown>>(values: V_34, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_34>>;
                                parseFlatAsync: <V_35 extends Record<string, unknown>>(values: V_35, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_35>>, string[]>>;
                            };
                            fromObject: <F_4 extends FromObject<{
                                string: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    minlength: (len: number, message?: string) => (value: any) => string;
                                    equals: (compare: any, message?: string) => (value: any) => string;
                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                    length: (len: number, message?: string) => (value: any) => string;
                                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                    url: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    email: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    tel: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    ssn: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    ip: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    mac: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    zip: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                    password: {
                                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                                        (message?: string | undefined): (value: any) => string;
                                    };
                                };
                                array: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    minlength: (len: number, message?: string) => (value: any) => string;
                                    maxlength: (len: number, message?: string) => (value: any) => string;
                                    length: (len: number, message?: string) => (value: any) => string;
                                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                        (_value: any): string;
                                        _handlers: TypeApi<T>;
                                    };
                                };
                                number: {
                                    default: (message?: string) => (value: any) => string;
                                    required: (message?: string) => (value: any) => string;
                                    min: (min: number, message?: string) => (value: any) => string;
                                    max: (max: number, message?: string) => (value: any) => string;
                                    integer: (message?: string) => (value: any) => string;
                                    float: (message?: string) => (value: any) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                };
                                boolean: {
                                    default: (message?: string) => (value: any) => string;
                                };
                                file: {
                                    default: (message?: string) => (value: File | File[]) => string;
                                    required: (message?: string) => (value: any) => string;
                                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                    min: (min: number, message?: string) => (value: File | File[]) => string;
                                    max: (max: number, message?: string) => (value: File | File[]) => string;
                                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                };
                            } & E & E_1 & E_2 & E_3 & E_4 & E_5>>(config: F_4) => {
                                parse: <V_36 extends Record<string, unknown>>(values: V_36, ...args: any[]) => import("./types").ParsedErrorsMap<V_36>;
                                parseFlat: <V_37 extends Record<string, unknown>>(values: V_37, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_37>>, string[]>;
                                parseAsync: <V_38 extends Record<string, unknown>>(values: V_38, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_38>>;
                                parseFlatAsync: <V_39 extends Record<string, unknown>>(values: V_39, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_39>>, string[]>>;
                            };
                        };
                        object: <C_5 extends ApiConfig<{
                            string: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                minlength: (len: number, message?: string) => (value: any) => string;
                                equals: (compare: any, message?: string) => (value: any) => string;
                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                maxlength: (len: number, message?: string) => (value: any) => string;
                                length: (len: number, message?: string) => (value: any) => string;
                                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                url: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                email: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                tel: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                ssn: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                ip: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                mac: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                zip: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                password: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                            };
                            array: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                minlength: (len: number, message?: string) => (value: any) => string;
                                maxlength: (len: number, message?: string) => (value: any) => string;
                                length: (len: number, message?: string) => (value: any) => string;
                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                    (_value: any): string;
                                    _handlers: TypeApi<T>;
                                };
                            };
                            number: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                min: (min: number, message?: string) => (value: any) => string;
                                max: (max: number, message?: string) => (value: any) => string;
                                integer: (message?: string) => (value: any) => string;
                                float: (message?: string) => (value: any) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            };
                            boolean: {
                                default: (message?: string) => (value: any) => string;
                            };
                            file: {
                                default: (message?: string) => (value: File | File[]) => string;
                                required: (message?: string) => (value: any) => string;
                                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                min: (min: number, message?: string) => (value: File | File[]) => string;
                                max: (max: number, message?: string) => (value: File | File[]) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            };
                        } & E & E_1 & E_2 & E_3 & E_4, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2 | keyof E_3 | keyof E_4>>(config: C_5) => {
                            parse: <V_40 extends Record<string, unknown>>(values: V_40, ...args: any[]) => import("./types").ParsedErrorsMap<V_40>;
                            parseFlat: <V_41 extends Record<string, unknown>>(values: V_41, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_41>>, string[]>;
                            parseAsync: <V_42 extends Record<string, unknown>>(values: V_42, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_42>>;
                            parseFlatAsync: <V_43 extends Record<string, unknown>>(values: V_43, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_43>>, string[]>>;
                        };
                        fromObject: <F_5 extends FromObject<{
                            string: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                minlength: (len: number, message?: string) => (value: any) => string;
                                equals: (compare: any, message?: string) => (value: any) => string;
                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                maxlength: (len: number, message?: string) => (value: any) => string;
                                length: (len: number, message?: string) => (value: any) => string;
                                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                                url: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                email: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                tel: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                ssn: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                ip: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                mac: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                zip: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                                password: {
                                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                                    (message?: string | undefined): (value: any) => string;
                                };
                            };
                            array: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                minlength: (len: number, message?: string) => (value: any) => string;
                                maxlength: (len: number, message?: string) => (value: any) => string;
                                length: (len: number, message?: string) => (value: any) => string;
                                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                    (_value: any): string;
                                    _handlers: TypeApi<T>;
                                };
                            };
                            number: {
                                default: (message?: string) => (value: any) => string;
                                required: (message?: string) => (value: any) => string;
                                min: (min: number, message?: string) => (value: any) => string;
                                max: (max: number, message?: string) => (value: any) => string;
                                integer: (message?: string) => (value: any) => string;
                                float: (message?: string) => (value: any) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            };
                            boolean: {
                                default: (message?: string) => (value: any) => string;
                            };
                            file: {
                                default: (message?: string) => (value: File | File[]) => string;
                                required: (message?: string) => (value: any) => string;
                                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                                min: (min: number, message?: string) => (value: File | File[]) => string;
                                max: (max: number, message?: string) => (value: File | File[]) => string;
                                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            };
                        } & E & E_1 & E_2 & E_3 & E_4>>(config: F_5) => {
                            parse: <V_44 extends Record<string, unknown>>(values: V_44, ...args: any[]) => import("./types").ParsedErrorsMap<V_44>;
                            parseFlat: <V_45 extends Record<string, unknown>>(values: V_45, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_45>>, string[]>;
                            parseAsync: <V_46 extends Record<string, unknown>>(values: V_46, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_46>>;
                            parseFlatAsync: <V_47 extends Record<string, unknown>>(values: V_47, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_47>>, string[]>>;
                        };
                    };
                    object: <C_6 extends ApiConfig<{
                        string: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            minlength: (len: number, message?: string) => (value: any) => string;
                            equals: (compare: any, message?: string) => (value: any) => string;
                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                            maxlength: (len: number, message?: string) => (value: any) => string;
                            length: (len: number, message?: string) => (value: any) => string;
                            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                            url: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            email: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            tel: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            ssn: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            ip: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            mac: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            zip: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            password: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                        };
                        array: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            minlength: (len: number, message?: string) => (value: any) => string;
                            maxlength: (len: number, message?: string) => (value: any) => string;
                            length: (len: number, message?: string) => (value: any) => string;
                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                (_value: any): string;
                                _handlers: TypeApi<T>;
                            };
                        };
                        number: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            min: (min: number, message?: string) => (value: any) => string;
                            max: (max: number, message?: string) => (value: any) => string;
                            integer: (message?: string) => (value: any) => string;
                            float: (message?: string) => (value: any) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        };
                        boolean: {
                            default: (message?: string) => (value: any) => string;
                        };
                        file: {
                            default: (message?: string) => (value: File | File[]) => string;
                            required: (message?: string) => (value: any) => string;
                            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                            min: (min: number, message?: string) => (value: File | File[]) => string;
                            max: (max: number, message?: string) => (value: File | File[]) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        };
                    } & E & E_1 & E_2 & E_3, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2 | keyof E_3>>(config: C_6) => {
                        parse: <V_48 extends Record<string, unknown>>(values: V_48, ...args: any[]) => import("./types").ParsedErrorsMap<V_48>;
                        parseFlat: <V_49 extends Record<string, unknown>>(values: V_49, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_49>>, string[]>;
                        parseAsync: <V_50 extends Record<string, unknown>>(values: V_50, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_50>>;
                        parseFlatAsync: <V_51 extends Record<string, unknown>>(values: V_51, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_51>>, string[]>>;
                    };
                    fromObject: <F_6 extends FromObject<{
                        string: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            minlength: (len: number, message?: string) => (value: any) => string;
                            equals: (compare: any, message?: string) => (value: any) => string;
                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                            maxlength: (len: number, message?: string) => (value: any) => string;
                            length: (len: number, message?: string) => (value: any) => string;
                            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                            url: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            email: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            tel: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            ssn: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            ip: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            mac: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            zip: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                            password: {
                                (exp: RegExp, message?: string | undefined): (value: any) => string;
                                (message?: string | undefined): (value: any) => string;
                            };
                        };
                        array: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            minlength: (len: number, message?: string) => (value: any) => string;
                            maxlength: (len: number, message?: string) => (value: any) => string;
                            length: (len: number, message?: string) => (value: any) => string;
                            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                                (_value: any): string;
                                _handlers: TypeApi<T>;
                            };
                        };
                        number: {
                            default: (message?: string) => (value: any) => string;
                            required: (message?: string) => (value: any) => string;
                            min: (min: number, message?: string) => (value: any) => string;
                            max: (max: number, message?: string) => (value: any) => string;
                            integer: (message?: string) => (value: any) => string;
                            float: (message?: string) => (value: any) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        };
                        boolean: {
                            default: (message?: string) => (value: any) => string;
                        };
                        file: {
                            default: (message?: string) => (value: File | File[]) => string;
                            required: (message?: string) => (value: any) => string;
                            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                            min: (min: number, message?: string) => (value: File | File[]) => string;
                            max: (max: number, message?: string) => (value: File | File[]) => string;
                            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        };
                    } & E & E_1 & E_2 & E_3>>(config: F_6) => {
                        parse: <V_52 extends Record<string, unknown>>(values: V_52, ...args: any[]) => import("./types").ParsedErrorsMap<V_52>;
                        parseFlat: <V_53 extends Record<string, unknown>>(values: V_53, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_53>>, string[]>;
                        parseAsync: <V_54 extends Record<string, unknown>>(values: V_54, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_54>>;
                        parseFlatAsync: <V_55 extends Record<string, unknown>>(values: V_55, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_55>>, string[]>>;
                    };
                };
                object: <C_7 extends ApiConfig<{
                    string: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        minlength: (len: number, message?: string) => (value: any) => string;
                        equals: (compare: any, message?: string) => (value: any) => string;
                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                        maxlength: (len: number, message?: string) => (value: any) => string;
                        length: (len: number, message?: string) => (value: any) => string;
                        pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                        url: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        email: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        tel: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        ssn: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        ip: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        mac: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        zip: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        password: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                    };
                    array: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        minlength: (len: number, message?: string) => (value: any) => string;
                        maxlength: (len: number, message?: string) => (value: any) => string;
                        length: (len: number, message?: string) => (value: any) => string;
                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                            (_value: any): string;
                            _handlers: TypeApi<T>;
                        };
                    };
                    number: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        min: (min: number, message?: string) => (value: any) => string;
                        max: (max: number, message?: string) => (value: any) => string;
                        integer: (message?: string) => (value: any) => string;
                        float: (message?: string) => (value: any) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    };
                    boolean: {
                        default: (message?: string) => (value: any) => string;
                    };
                    file: {
                        default: (message?: string) => (value: File | File[]) => string;
                        required: (message?: string) => (value: any) => string;
                        accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                        min: (min: number, message?: string) => (value: File | File[]) => string;
                        max: (max: number, message?: string) => (value: File | File[]) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    };
                } & E & E_1 & E_2, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1 | keyof E_2>>(config: C_7) => {
                    parse: <V_56 extends Record<string, unknown>>(values: V_56, ...args: any[]) => import("./types").ParsedErrorsMap<V_56>;
                    parseFlat: <V_57 extends Record<string, unknown>>(values: V_57, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_57>>, string[]>;
                    parseAsync: <V_58 extends Record<string, unknown>>(values: V_58, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_58>>;
                    parseFlatAsync: <V_59 extends Record<string, unknown>>(values: V_59, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_59>>, string[]>>;
                };
                fromObject: <F_7 extends FromObject<{
                    string: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        minlength: (len: number, message?: string) => (value: any) => string;
                        equals: (compare: any, message?: string) => (value: any) => string;
                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                        maxlength: (len: number, message?: string) => (value: any) => string;
                        length: (len: number, message?: string) => (value: any) => string;
                        pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                        url: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        email: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        tel: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        ssn: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        ip: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        mac: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        zip: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                        password: {
                            (exp: RegExp, message?: string | undefined): (value: any) => string;
                            (message?: string | undefined): (value: any) => string;
                        };
                    };
                    array: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        minlength: (len: number, message?: string) => (value: any) => string;
                        maxlength: (len: number, message?: string) => (value: any) => string;
                        length: (len: number, message?: string) => (value: any) => string;
                        equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                        includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                        of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                            (_value: any): string;
                            _handlers: TypeApi<T>;
                        };
                    };
                    number: {
                        default: (message?: string) => (value: any) => string;
                        required: (message?: string) => (value: any) => string;
                        min: (min: number, message?: string) => (value: any) => string;
                        max: (max: number, message?: string) => (value: any) => string;
                        integer: (message?: string) => (value: any) => string;
                        float: (message?: string) => (value: any) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    };
                    boolean: {
                        default: (message?: string) => (value: any) => string;
                    };
                    file: {
                        default: (message?: string) => (value: File | File[]) => string;
                        required: (message?: string) => (value: any) => string;
                        accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                        min: (min: number, message?: string) => (value: File | File[]) => string;
                        max: (max: number, message?: string) => (value: File | File[]) => string;
                        define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    };
                } & E & E_1 & E_2>>(config: F_7) => {
                    parse: <V_60 extends Record<string, unknown>>(values: V_60, ...args: any[]) => import("./types").ParsedErrorsMap<V_60>;
                    parseFlat: <V_61 extends Record<string, unknown>>(values: V_61, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_61>>, string[]>;
                    parseAsync: <V_62 extends Record<string, unknown>>(values: V_62, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_62>>;
                    parseFlatAsync: <V_63 extends Record<string, unknown>>(values: V_63, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_63>>, string[]>>;
                };
            };
            object: <C_8 extends ApiConfig<{
                string: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    minlength: (len: number, message?: string) => (value: any) => string;
                    equals: (compare: any, message?: string) => (value: any) => string;
                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                    maxlength: (len: number, message?: string) => (value: any) => string;
                    length: (len: number, message?: string) => (value: any) => string;
                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                    url: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    email: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    tel: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    ssn: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    ip: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    mac: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    zip: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    password: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                };
                array: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    minlength: (len: number, message?: string) => (value: any) => string;
                    maxlength: (len: number, message?: string) => (value: any) => string;
                    length: (len: number, message?: string) => (value: any) => string;
                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                        (_value: any): string;
                        _handlers: TypeApi<T>;
                    };
                };
                number: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    min: (min: number, message?: string) => (value: any) => string;
                    max: (max: number, message?: string) => (value: any) => string;
                    integer: (message?: string) => (value: any) => string;
                    float: (message?: string) => (value: any) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                };
                boolean: {
                    default: (message?: string) => (value: any) => string;
                };
                file: {
                    default: (message?: string) => (value: File | File[]) => string;
                    required: (message?: string) => (value: any) => string;
                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                    min: (min: number, message?: string) => (value: File | File[]) => string;
                    max: (max: number, message?: string) => (value: File | File[]) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                };
            } & E & E_1, "string" | "number" | "boolean" | "array" | "file" | keyof E | keyof E_1>>(config: C_8) => {
                parse: <V_64 extends Record<string, unknown>>(values: V_64, ...args: any[]) => import("./types").ParsedErrorsMap<V_64>;
                parseFlat: <V_65 extends Record<string, unknown>>(values: V_65, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_65>>, string[]>;
                parseAsync: <V_66 extends Record<string, unknown>>(values: V_66, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_66>>;
                parseFlatAsync: <V_67 extends Record<string, unknown>>(values: V_67, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_67>>, string[]>>;
            };
            fromObject: <F_8 extends FromObject<{
                string: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    minlength: (len: number, message?: string) => (value: any) => string;
                    equals: (compare: any, message?: string) => (value: any) => string;
                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                    maxlength: (len: number, message?: string) => (value: any) => string;
                    length: (len: number, message?: string) => (value: any) => string;
                    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                    url: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    email: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    tel: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    ssn: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    ip: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    mac: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    zip: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                    password: {
                        (exp: RegExp, message?: string | undefined): (value: any) => string;
                        (message?: string | undefined): (value: any) => string;
                    };
                };
                array: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    minlength: (len: number, message?: string) => (value: any) => string;
                    maxlength: (len: number, message?: string) => (value: any) => string;
                    length: (len: number, message?: string) => (value: any) => string;
                    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                        (_value: any): string;
                        _handlers: TypeApi<T>;
                    };
                };
                number: {
                    default: (message?: string) => (value: any) => string;
                    required: (message?: string) => (value: any) => string;
                    min: (min: number, message?: string) => (value: any) => string;
                    max: (max: number, message?: string) => (value: any) => string;
                    integer: (message?: string) => (value: any) => string;
                    float: (message?: string) => (value: any) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                };
                boolean: {
                    default: (message?: string) => (value: any) => string;
                };
                file: {
                    default: (message?: string) => (value: File | File[]) => string;
                    required: (message?: string) => (value: any) => string;
                    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                    min: (min: number, message?: string) => (value: File | File[]) => string;
                    max: (max: number, message?: string) => (value: File | File[]) => string;
                    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                };
            } & E & E_1>>(config: F_8) => {
                parse: <V_68 extends Record<string, unknown>>(values: V_68, ...args: any[]) => import("./types").ParsedErrorsMap<V_68>;
                parseFlat: <V_69 extends Record<string, unknown>>(values: V_69, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_69>>, string[]>;
                parseAsync: <V_70 extends Record<string, unknown>>(values: V_70, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_70>>;
                parseFlatAsync: <V_71 extends Record<string, unknown>>(values: V_71, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_71>>, string[]>>;
            };
        };
        object: <C_9 extends ApiConfig<{
            string: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                minlength: (len: number, message?: string) => (value: any) => string;
                equals: (compare: any, message?: string) => (value: any) => string;
                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                maxlength: (len: number, message?: string) => (value: any) => string;
                length: (len: number, message?: string) => (value: any) => string;
                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                url: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                email: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                tel: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                ssn: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                ip: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                mac: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                zip: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                password: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
            };
            array: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                minlength: (len: number, message?: string) => (value: any) => string;
                maxlength: (len: number, message?: string) => (value: any) => string;
                length: (len: number, message?: string) => (value: any) => string;
                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                    (_value: any): string;
                    _handlers: TypeApi<T>;
                };
            };
            number: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                min: (min: number, message?: string) => (value: any) => string;
                max: (max: number, message?: string) => (value: any) => string;
                integer: (message?: string) => (value: any) => string;
                float: (message?: string) => (value: any) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            };
            boolean: {
                default: (message?: string) => (value: any) => string;
            };
            file: {
                default: (message?: string) => (value: File | File[]) => string;
                required: (message?: string) => (value: any) => string;
                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                min: (min: number, message?: string) => (value: File | File[]) => string;
                max: (max: number, message?: string) => (value: File | File[]) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            };
        } & E, "string" | "number" | "boolean" | "array" | "file" | keyof E>>(config: C_9) => {
            parse: <V_72 extends Record<string, unknown>>(values: V_72, ...args: any[]) => import("./types").ParsedErrorsMap<V_72>;
            parseFlat: <V_73 extends Record<string, unknown>>(values: V_73, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_73>>, string[]>;
            parseAsync: <V_74 extends Record<string, unknown>>(values: V_74, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_74>>;
            parseFlatAsync: <V_75 extends Record<string, unknown>>(values: V_75, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_75>>, string[]>>;
        };
        fromObject: <F_9 extends FromObject<{
            string: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                minlength: (len: number, message?: string) => (value: any) => string;
                equals: (compare: any, message?: string) => (value: any) => string;
                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                maxlength: (len: number, message?: string) => (value: any) => string;
                length: (len: number, message?: string) => (value: any) => string;
                pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
                url: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                email: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                tel: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                ssn: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                ip: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                mac: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                zip: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
                password: {
                    (exp: RegExp, message?: string | undefined): (value: any) => string;
                    (message?: string | undefined): (value: any) => string;
                };
            };
            array: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                minlength: (len: number, message?: string) => (value: any) => string;
                maxlength: (len: number, message?: string) => (value: any) => string;
                length: (len: number, message?: string) => (value: any) => string;
                equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
                includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
                of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                    (_value: any): string;
                    _handlers: TypeApi<T>;
                };
            };
            number: {
                default: (message?: string) => (value: any) => string;
                required: (message?: string) => (value: any) => string;
                min: (min: number, message?: string) => (value: any) => string;
                max: (max: number, message?: string) => (value: any) => string;
                integer: (message?: string) => (value: any) => string;
                float: (message?: string) => (value: any) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            };
            boolean: {
                default: (message?: string) => (value: any) => string;
            };
            file: {
                default: (message?: string) => (value: File | File[]) => string;
                required: (message?: string) => (value: any) => string;
                accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
                min: (min: number, message?: string) => (value: File | File[]) => string;
                max: (max: number, message?: string) => (value: File | File[]) => string;
                define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            };
        } & E>>(config: F_9) => {
            parse: <V_76 extends Record<string, unknown>>(values: V_76, ...args: any[]) => import("./types").ParsedErrorsMap<V_76>;
            parseFlat: <V_77 extends Record<string, unknown>>(values: V_77, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_77>>, string[]>;
            parseAsync: <V_78 extends Record<string, unknown>>(values: V_78, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_78>>;
            parseFlatAsync: <V_79 extends Record<string, unknown>>(values: V_79, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_79>>, string[]>>;
        };
    };
    object: <C_10 extends ApiConfig<{
        string: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            minlength: (len: number, message?: string) => (value: any) => string;
            equals: (compare: any, message?: string) => (value: any) => string;
            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
            maxlength: (len: number, message?: string) => (value: any) => string;
            length: (len: number, message?: string) => (value: any) => string;
            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
            url: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            email: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            tel: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            ssn: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            ip: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            mac: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            zip: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            password: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
        };
        array: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            minlength: (len: number, message?: string) => (value: any) => string;
            maxlength: (len: number, message?: string) => (value: any) => string;
            length: (len: number, message?: string) => (value: any) => string;
            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                (_value: any): string;
                _handlers: TypeApi<T>;
            };
        };
        number: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            min: (min: number, message?: string) => (value: any) => string;
            max: (max: number, message?: string) => (value: any) => string;
            integer: (message?: string) => (value: any) => string;
            float: (message?: string) => (value: any) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        };
        boolean: {
            default: (message?: string) => (value: any) => string;
        };
        file: {
            default: (message?: string) => (value: File | File[]) => string;
            required: (message?: string) => (value: any) => string;
            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
            min: (min: number, message?: string) => (value: File | File[]) => string;
            max: (max: number, message?: string) => (value: File | File[]) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        };
    }, "string" | "number" | "boolean" | "array" | "file">>(config: C_10) => {
        parse: <V_80 extends Record<string, unknown>>(values: V_80, ...args: any[]) => import("./types").ParsedErrorsMap<V_80>;
        parseFlat: <V_81 extends Record<string, unknown>>(values: V_81, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_81>>, string[]>;
        parseAsync: <V_82 extends Record<string, unknown>>(values: V_82, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_82>>;
        parseFlatAsync: <V_83 extends Record<string, unknown>>(values: V_83, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_83>>, string[]>>;
    };
    fromObject: <F_10 extends FromObject<{
        string: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            minlength: (len: number, message?: string) => (value: any) => string;
            equals: (compare: any, message?: string) => (value: any) => string;
            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
            maxlength: (len: number, message?: string) => (value: any) => string;
            length: (len: number, message?: string) => (value: any) => string;
            pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
            url: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            email: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            tel: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            ssn: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            ip: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            mac: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            zip: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
            password: {
                (exp: RegExp, message?: string | undefined): (value: any) => string;
                (message?: string | undefined): (value: any) => string;
            };
        };
        array: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            minlength: (len: number, message?: string) => (value: any) => string;
            maxlength: (len: number, message?: string) => (value: any) => string;
            length: (len: number, message?: string) => (value: any) => string;
            equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
            includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
            of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
                (_value: any): string;
                _handlers: TypeApi<T>;
            };
        };
        number: {
            default: (message?: string) => (value: any) => string;
            required: (message?: string) => (value: any) => string;
            min: (min: number, message?: string) => (value: any) => string;
            max: (max: number, message?: string) => (value: any) => string;
            integer: (message?: string) => (value: any) => string;
            float: (message?: string) => (value: any) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        };
        boolean: {
            default: (message?: string) => (value: any) => string;
        };
        file: {
            default: (message?: string) => (value: File | File[]) => string;
            required: (message?: string) => (value: any) => string;
            accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
            min: (min: number, message?: string) => (value: File | File[]) => string;
            max: (max: number, message?: string) => (value: File | File[]) => string;
            define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
        };
    }>>(config: F_10) => {
        parse: <V_84 extends Record<string, unknown>>(values: V_84, ...args: any[]) => import("./types").ParsedErrorsMap<V_84>;
        parseFlat: <V_85 extends Record<string, unknown>>(values: V_85, ...args: any[]) => Record<import("./types").KeyOfAny<import("./types").Path<V_85>>, string[]>;
        parseAsync: <V_86 extends Record<string, unknown>>(values: V_86, ...args: any[]) => Promise<import("./types").ParsedErrorsMap<V_86>>;
        parseFlatAsync: <V_87 extends Record<string, unknown>>(values: V_87, ...args: any[]) => Promise<Record<import("./types").KeyOfAny<import("./types").Path<V_87>>, string[]>>;
    };
};
declare const string: () => TypeApi<{
    default: (message?: string) => (value: any) => string;
    required: (message?: string) => (value: any) => string;
    minlength: (len: number, message?: string) => (value: any) => string;
    equals: (compare: any, message?: string) => (value: any) => string;
    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
    maxlength: (len: number, message?: string) => (value: any) => string;
    length: (len: number, message?: string) => (value: any) => string;
    pattern: (exp: string | RegExp, message?: string) => (value: any) => string;
    url: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
    email: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
    tel: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
    ssn: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
    ip: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
    mac: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
    zip: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
    password: {
        (exp: RegExp, message?: string | undefined): (value: any) => string;
        (message?: string | undefined): (value: any) => string;
    };
}> & WithParsers, array: () => TypeApi<{
    default: (message?: string) => (value: any) => string;
    required: (message?: string) => (value: any) => string;
    minlength: (len: number, message?: string) => (value: any) => string;
    maxlength: (len: number, message?: string) => (value: any) => string;
    length: (len: number, message?: string) => (value: any) => string;
    equalto: (key: string, message?: string) => (value: any, data?: Record<string, any> | undefined) => string;
    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
    includes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
    excludes: (tokens: string | (string | number | boolean)[], message?: string) => (value: any) => string;
    of: <T extends Record<string, any>>(validators: TypeApi<T>) => {
        (_value: any): string;
        _handlers: TypeApi<T>;
    };
}> & WithParsers, number: () => TypeApi<{
    default: (message?: string) => (value: any) => string;
    required: (message?: string) => (value: any) => string;
    min: (min: number, message?: string) => (value: any) => string;
    max: (max: number, message?: string) => (value: any) => string;
    integer: (message?: string) => (value: any) => string;
    float: (message?: string) => (value: any) => string;
    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
}> & WithParsers, boolean: () => TypeApi<{
    default: (message?: string) => (value: any) => string;
}> & WithParsers, file: () => TypeApi<{
    default: (message?: string) => (value: File | File[]) => string;
    required: (message?: string) => (value: any) => string;
    accept: (accept: string | string[], message?: string) => (value: File | File[]) => string;
    min: (min: number, message?: string) => (value: File | File[]) => string;
    max: (max: number, message?: string) => (value: File | File[]) => string;
    define: (validator: ValidatorDefineHandler<any>, name?: string) => ValidatorDefineHandler<any>;
}> & WithParsers;
export { string, array, number, boolean, file };
export default kensho;
//# sourceMappingURL=init.d.ts.map