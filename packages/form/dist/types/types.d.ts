import type { TYPE_MAP } from "./getset";
import type { parseNativeAttributes } from "./utils";
import type { createController } from "./controller";
export declare type ParsePath<T, Key extends keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${ParsePath<T[Key], Exclude<keyof T[Key], keyof any[]>> &
            string}`
        | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
    : never
  : never;
export declare type ParsePathKey<T> = ParsePath<T, keyof T> | keyof T;
export declare type Path<T> = ParsePathKey<T> extends string | keyof T
  ? ParsePathKey<T>
  : keyof T;
export declare type PathValue<
  T,
  P extends Path<T>
> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;
export declare type AnyString = string & {
  value?: any;
};
export declare type KeyOfAny<K extends string | number | symbol> =
  | AnyString
  | K;
export declare type DeepPartial<T> = {
  [P in keyof T]: DeepPartial<T[P]>;
};
export declare type FlatMap<T extends Record<string, unknown>> = {
  [P in Path<T>]: PathValue<T, P>;
};
export declare type MapToType<T extends Record<string, unknown>, V = any> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? MapToType<T[K]>
    : V extends never
    ? T[K]
    : V;
};
export declare type NativeValidators = ReturnType<typeof parseNativeAttributes>;
export declare type FormContext = ReturnType<typeof createController>;
export declare type FormElementValue =
  | string
  | number
  | readonly string[]
  | undefined;
export declare type FormElement = HTMLElement & {
  name: string;
  type: ElementType;
  value?: FormElementValue;
  defaultValue?: FormElementValue;
  defaultChecked?: boolean;
  virtual?: boolean;
  checked?: boolean;
};
export declare type ElementType = KeyOfAny<keyof typeof TYPE_MAP>;
export declare type DataTypeBase =
  | "string"
  | "number"
  | "integer"
  | "float"
  | "bigint"
  | "boolean"
  | "none";
export declare type DataType =
  | DataTypeBase
  | `[${Exclude<DataTypeBase, "none">}]`;
export declare type DataTypeConfig =
  | DataType
  | `[${Exclude<DataTypeBase, "none">}]|${string}`;
export interface FormElementConfig {
  type: ElementType;
  el: FormElement | FormElement[];
  virtualValue: FormElementValue | boolean;
  defaultValue: FormElementValue;
  dataType: DataType;
  dataTypeOptions: any[];
  virtual: boolean;
}
export declare type FormElementGetter = (
  conf: FormElementConfig
) => FormElementValue;
export declare type FormElementSetter = (
  conf: FormElementConfig,
  value: FormElementValue
) => void;
export declare type ElementGetterSetter = [
  FormElementGetter,
  FormElementSetter
];
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
export declare type ErrorStateMap<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? ErrorStateMap<T[K]>
    : string[];
};
export declare type ErrorState<
  T extends Record<string, unknown>,
  F extends boolean
> = F extends true
  ? Record<KeyOfAny<Path<T>>, string[]>
  : F extends never
  ? never
  : ErrorStateMap<T>;
export interface FieldStateItem {
  value: FormElementValue;
  pristine: boolean;
  dirty: boolean;
  valid: boolean;
  invalid: boolean;
  touched: boolean;
}
export interface FormField extends FieldStateItem {
  name: string;
  el?: HTMLElement | HTMLElement[];
  reset: () => void;
  validate: () => Promise<string[] | null | undefined>;
}
export declare type FieldStateMap<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? FieldStateMap<T[K]>
    : FieldStateItem;
};
export interface SubscribeState<
  T extends Record<string, unknown>,
  F extends boolean = false
> extends FormState {
  fields: FieldStateMap<
    T & {
      [key: string]: any;
    }
  >;
  errors: ErrorState<T, F>;
}
export declare type TransformHandler<T extends Record<string, unknown>> = (
  values: T
) => Record<string, unknown>;
export declare type CoerceHandler = (
  key: string,
  value: FormElementValue,
  options: {
    dataType: any;
    dataTypeOptions: any[];
  }
) => FormElementValue;
export declare type AdapterType =
  | "react"
  | "angular"
  | "vue"
  | "svelte"
  | "none";
export interface FormOptions<
  T extends Record<string, unknown>,
  F extends boolean = false
> {
  adapter: AdapterType;
  defaultGetter: <E extends FormElement>(
    name: KeyOfAny<Path<T>>,
    el: E,
    values: T
  ) => any;
  initialValues?: T;
  flattenErrors?: F;
  validateInit?: boolean;
  validateChange?: boolean;
  mergeUnbound?: boolean;
  unboundAttribute?: "data-unbound" | AnyString;
  placeholders?: boolean | (HTMLInputElement | HTMLTextAreaElement)["type"][];
  mutationNodes?: HTMLElement["nodeName"][];
  subscribe?: <U extends Record<string, unknown> = T, Y extends boolean = F>(
    this: void,
    state: SubscribeState<U, Y>
  ) => void;
  onValidate?:
    | false
    | ((
        values: T,
        fields: KeyOfAny<Path<T>>[],
        context: FormContext
      ) =>
        | Partial<ErrorState<T, F>>
        | undefined
        | null
        | Promise<Partial<ErrorState<T, F>> | undefined | null>);
  onCoerce?: boolean | CoerceHandler;
  onTransform?: TransformHandler<T>;
  onSubmit: (values: T, context?: FormContext) => void;
  onError?: (errors: ErrorState<T, F>, context?: FormContext) => void;
  onReset?: (values: T, context?: FormContext) => void;
}
export declare type FormAdapterOptions<
  T extends Record<string, unknown>,
  F extends boolean = false
> = Omit<FormOptions<T, F>, "adapter" | "subscribe" | "defaultGetter">;
//# sourceMappingURL=types.d.ts.map
