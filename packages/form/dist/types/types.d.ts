import type { TYPE_MAP } from './getset';
import type { parseNativeAttributes } from './utils';
import type { useKensho } from './controller';
export declare type ParsePath<T, Key extends keyof T> = Key extends string ? T[Key] extends Record<string, any> ? `${Key}.${ParsePath<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}` | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}` : never : never;
export declare type ParsePathKey<T> = ParsePath<T, keyof T> | keyof T;
export declare type Path<T> = ParsePathKey<T> extends string | keyof T ? ParsePathKey<T> : keyof T;
export declare type PathValue<T, P extends Path<T>> = P extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? Rest extends Path<T[Key]> ? PathValue<T[Key], Rest> : never : never : P extends keyof T ? T[P] : never;
export declare type AnyString = string & {
    value?: any;
};
export declare type KeyOfAny<K extends string | number | symbol> = AnyString | K;
export declare type DeepPartial<T> = {
    [P in keyof T]: DeepPartial<T[P]>;
};
export declare type FlatMap<T extends Record<string, unknown>> = {
    [P in Path<T>]: PathValue<T, P>;
};
export declare type MapToType<T extends Record<string, unknown>, V = any> = {
    [K in keyof T]: T[K] extends Record<string, unknown> ? MapToType<T[K]> : V extends never ? T[K] : V;
};
export declare type NativeValidators = ReturnType<typeof parseNativeAttributes>;
export declare type FormContext = ReturnType<typeof useKensho>;
export declare type FormElementValue = string | number | boolean | undefined | null;
export declare type FormDataValue = FormElementValue | File;
export declare type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export declare type ElementType = keyof typeof TYPE_MAP;
export declare type DataTypeBase = 'string' | 'number' | 'integer' | 'float' | 'bigint' | 'boolean' | 'none';
export declare type DataType = DataTypeBase | `[${Exclude<DataTypeBase, 'none'>}]`;
export interface FormElementConfig {
    type: ElementType;
    el: FormElement | FormElement[];
    virtualValue: FormDataValue | FormDataValue[];
    defaultValue: FormDataValue | FormDataValue[];
    dataType: DataType;
    dataTypeOptions: any[];
}
export declare type FormElementGetter = (conf: FormElementConfig) => FormDataValue | FormDataValue[];
export declare type FormElementSetter = (conf: FormElementConfig, value: FormElementValue | FormElementValue[]) => void;
export declare type ElementGetterSetter = [FormElementGetter, FormElementSetter];
export interface NativeValidatorAttributes {
    type: string;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    pattern: string;
    min: number | null;
    max: number | null;
    minlength: number | null;
    maxlength: number | null;
    step: number | null;
}
export interface FormState {
    initialized: boolean;
    validating: boolean;
    pristine: boolean;
    dirty: boolean;
    valid: boolean;
    invalid: boolean;
    submitting: boolean;
    submitted: boolean;
}
export interface Store<T extends Record<string, unknown>, F extends boolean> {
    set: (this: void, state: SubscribeState<T, F>) => void;
}
export declare type ErrorStateMap<T extends Record<string, unknown>> = {
    [K in keyof T]: T[K] extends Record<string, unknown> ? ErrorStateMap<T[K]> : string[];
};
export declare type ErrorState<T extends Record<string, unknown>, F extends boolean> = F extends true ? Record<KeyOfAny<Path<T>>, string[]> : F extends never ? never : ErrorStateMap<T>;
export interface FieldStateItem {
    value: FormDataValue | FormDataValue[];
    pristine: boolean;
    dirty: boolean;
    valid: boolean;
    invalid: boolean;
    touched: boolean;
}
export declare type FieldStateMap<T extends Record<string, unknown>> = {
    [K in keyof T]: T[K] extends Record<string, unknown> ? FieldStateMap<T[K]> : FieldStateItem;
};
export declare type FieldState<T extends Record<string, unknown>, F extends boolean> = F extends true ? Record<KeyOfAny<Path<T>>, FieldStateItem> : F extends never ? never : FieldStateMap<T>;
export interface FormField<E extends FormElement | FormElement[]> extends FieldStateItem {
    el?: E;
    reset: () => void;
    validate: () => Promise<string[]>;
}
export interface SubscribeState<T extends Record<string, unknown>, F extends boolean = false> extends FormState {
    fields: FieldState<T, F>;
    errors: ErrorState<T, F>;
}
export interface FormOptions<T extends Record<string, unknown>, F extends boolean = false> {
    initialValues?: T;
    flattenOutput?: F;
    initValidate?: boolean;
    castValues?: boolean;
    placeholders?: boolean | (HTMLInputElement | HTMLTextAreaElement)['type'][];
    mutationNodes?: HTMLElement['nodeName'][];
    transform?: (values: T & {
        [key: string]: unknown;
    }, context: FormContext) => T & {
        [key: string]: unknown;
    };
    validator?: false | ((values: T & {
        [key: string]: unknown;
    }, context: FormContext) => ErrorState<T, F> | Promise<ErrorState<T, F>>);
    subscribe?: <U extends Record<string, unknown> = T, X extends boolean = F>(this: void, state: SubscribeState<U, X>) => void;
    onSubmit: (values: T & {
        [key: string]: unknown;
    }, context?: FormContext) => void;
    onError?: (errors: ErrorState<T, F>, context?: FormContext) => void;
}
//# sourceMappingURL=types.d.ts.map