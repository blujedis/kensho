import type { TYPE_MAP } from './getset';
import type { parseNativeAttributes } from './utils';
import type { useKensho } from './controller';
import type { HTML5_PLACEHOLDER_TYPES, VALID_MUTATION_NODES } from './constants';
/////////////////////////////////////////////////////////////////////////////
// HELPER TYPES 
/////////////////////////////////////////////////////////////////////////////

export type ParsePath<T, Key extends keyof T> =
  Key extends string ? T[Key] extends Record<string, any>
  ? | `${Key}.${ParsePath<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
  | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
  : never
  : never;

export type ParsePathKey<T> = ParsePath<T, keyof T> | keyof T;

export type Path<T> = ParsePathKey<T> extends string | keyof T ? ParsePathKey<T> : keyof T;

export type PathValue<T, P extends Path<T>> =
  P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T ? Rest extends Path<T[Key]>
  ? PathValue<T[Key], Rest>
  : never
  : never
  : P extends keyof T ? T[P]
  : never;


export type AnyString = string & { value?: any };
export type KeyOfAny<K extends string | number | symbol> = AnyString | K;

export type DeepPartial<T> = {
  [P in keyof T]: DeepPartial<T[P]>;
};

export type FlatMap<T extends Record<string, unknown>> =
  { [P in Path<T>]: PathValue<T, P> }

export type MapToType<T extends Record<string, unknown>, V = any> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? MapToType<T[K]> : V extends never ? T[K] : V;
}


/////////////////////////////////////////////////////////////////////////////
// FORM TYPES 
/////////////////////////////////////////////////////////////////////////////

export type NativeValidators = ReturnType<typeof parseNativeAttributes>;

export type FormContext = ReturnType<typeof useKensho>;

export type FormElementValue = string | number | boolean | undefined | null;

export type FormDataValue = FormElementValue | File;

export type FormElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export type ElementType = keyof typeof TYPE_MAP;

export type DataTypeBase = 'string' | 'number' | 'integer' | 'float' | 'bigint' | 'boolean' | 'none';

export type DataType = DataTypeBase | `[${Exclude<DataTypeBase, 'none'>}]`;

export interface FormElementConfig {
  type: ElementType;
  el: FormElement | FormElement[];
  virtualValue: FormDataValue | FormDataValue[];
  defaultValue: FormDataValue | FormDataValue[];
  dataType: DataType;
  dataTypeOptions: any[];
}

export type FormElementGetter = (conf: FormElementConfig) => FormDataValue | FormDataValue[];

export type FormElementSetter = (conf: FormElementConfig, value: FormElementValue | FormElementValue[]) => void;

export type ElementGetterSetter = [FormElementGetter, FormElementSetter];

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

export type ErrorStateMap<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? ErrorStateMap<T[K]> : string[];
}

export type ErrorState<T extends Record<string, unknown>, F extends boolean> = F extends true ? Record<KeyOfAny<Path<T>>, string[]> : F extends never ? never : ErrorStateMap<T>;

export interface FieldStateItem {
  value: FormDataValue | FormDataValue[];
  pristine: boolean,
  dirty: boolean,
  valid: boolean,
  invalid: boolean,
  touched: boolean;
}

export type FieldStateMap<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? FieldStateMap<T[K]> : FieldStateItem;
}

export type FieldState<T extends Record<string, unknown>, F extends boolean> =
  F extends true ? Record<KeyOfAny<Path<T>>, FieldStateItem> : F extends never ? never : FieldStateMap<T>;

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
  flattenOutput?: F;    // default: false
  initValidate?: boolean; // default: true
  castValues?: boolean; // default: true
  placeholders?: boolean | (HTMLInputElement | HTMLTextAreaElement)['type'][]; // default: true
  mutationNodes?: HTMLElement['nodeName'][]; //'INPUT', 'SELECT', 'TEXTAREA'
  transform?: (values: T & { [key: string]: unknown }, context: FormContext) => T & { [key: string]: unknown };
  validator?: false | ((values: T & { [key: string]: unknown }, context: FormContext) => ErrorState<T, F> | Promise<ErrorState<T, F>>);
  subscribe?: <U extends Record<string, unknown> = T, X extends boolean = F>(this: void, state: SubscribeState<U, X>) => void;
  onSubmit: (values: T & { [key: string]: unknown }, context?: FormContext) => void;
  onError?: (errors: ErrorState<T, F>, context?: FormContext) => void;
}
