import type { TYPE_MAP } from './getset';
import type { parseNativeAttributes } from './utils';
import type { createController } from './controller';
// import type { HTML5_PLACEHOLDER_TYPES, VALID_MUTATION_NODES } from './constants';
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
  { [P in Path<T>]: PathValue<T, P> };

export type MapToType<T extends Record<string, unknown>, V = any> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? MapToType<T[K]> : V extends never ? T[K] : V;
}


/////////////////////////////////////////////////////////////////////////////
// FORM TYPES 
/////////////////////////////////////////////////////////////////////////////

export type NativeValidators = ReturnType<typeof parseNativeAttributes>;

export type FormContext = ReturnType<typeof createController>;

export type FormElementValue = string | number | readonly string[] | undefined;

export type FormElement =
  HTMLElement & { name: string, type: ElementType, value?: FormElementValue, defaultValue?: FormElementValue, defaultChecked?: boolean; virtual?: boolean; checked?: boolean; }

export type ElementType = KeyOfAny<keyof typeof TYPE_MAP>;

export type DataTypeBase = 'string' | 'number' | 'integer' | 'float' | 'bigint' | 'boolean' | 'none';

export type DataType = DataTypeBase | `[${Exclude<DataTypeBase, 'none'>}]`;

export type DataTypeConfig = DataType | `[${Exclude<DataTypeBase, 'none'>}]|${string}`;

export interface FormElementConfig {
  type: ElementType;
  el: FormElement | FormElement[];
  virtualValue: FormElementValue | boolean;
  defaultValue: FormElementValue;
  dataType: DataType;
  dataTypeOptions: any[];
  virtual: boolean;
}

export type FormElementGetter = (conf: FormElementConfig) => FormElementValue;

export type FormElementSetter = (conf: FormElementConfig, value: FormElementValue) => void;

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

// export interface Store<T extends Record<string, unknown>, F extends boolean> {
//   set: (this: void, state: SubscribeState<T, F>) => void;
// }

export type ErrorStateMap<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? ErrorStateMap<T[K]> : string[];
}

export type ErrorState<T extends Record<string, unknown>, F extends boolean> = F extends true ? Record<KeyOfAny<Path<T>>, string[]> : F extends never ? never : ErrorStateMap<T>;

export interface FieldStateItem {
  value: FormElementValue;
  pristine: boolean,
  dirty: boolean,
  valid: boolean,
  invalid: boolean,
  touched: boolean;
}

export interface FormField extends FieldStateItem {
  name: string;
  el?: HTMLElement | HTMLElement[];
  reset: () => void;
  validate: () => Promise<string[] | null | undefined>;
}

export type FieldStateMap<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? FieldStateMap<T[K]> : FieldStateItem;
}

// export type FieldState<T extends Record<string, unknown>, F extends boolean> =
//   F extends true ? Record<KeyOfAny<Path<T>>, FieldStateItem> : F extends never ? never : FieldStateMap<T>;

export interface SubscribeState<T extends Record<string, unknown>, F extends boolean = false> extends FormState {
  //  FieldState<T & { [key: string]: any }, F>;
  fields: FieldStateMap<T & { [key: string]: any }>;
  errors: ErrorState<T, F>;
}

export type TransformHandler<T extends Record<string, unknown>> = (values: T) => Record<string, unknown>;

export type CoerceHandler = (key: string, value: FormElementValue, options: { dataType: any, dataTypeOptions: any[] }) => FormElementValue;

export type AdapterType = 'react' | 'angular' | 'vue' | 'svelte' | 'none';

export interface FormOptions<T extends Record<string, unknown>, F extends boolean = false> {
  adapter: AdapterType; // none is plain javascript.
  defaultGetter: <E extends FormElement>(name: KeyOfAny<Path<T>>, el: E, values: T) => any;
  initialValues?: T;
  flattenErrors?: F;    // default: false
  validateInit?: boolean; // default: false
  validateChange?: boolean; // default: true
  mergeUnbound?: boolean; // default: true 
  unboundAttribute?: 'data-unbound' | AnyString;
  placeholders?: boolean | (HTMLInputElement | HTMLTextAreaElement)['type'][]; // default: true
  mutationNodes?: HTMLElement['nodeName'][]; //'INPUT', 'SELECT', 'TEXTAREA'
  subscribe?: <U extends Record<string, unknown> = T, Y extends boolean = F>(this: void, state: SubscribeState<U, Y>) => void;
  onValidate?: false | ((values: T, fields: KeyOfAny<Path<T>>[], context: FormContext) => Partial<ErrorState<T, F>> | undefined | null | Promise<Partial<ErrorState<T, F>> | undefined | null>);
  onCoerce?: boolean | CoerceHandler; // default: true
  onTransform?: TransformHandler<T>; // default: undefined.
  onSubmit: (values: T, context?: FormContext) => void;
  onError?: (errors: ErrorState<T, F>, context?: FormContext) => void;
  onReset?: (values: T, context?: FormContext) => void;
}

export type FormAdapterOptions<T extends Record<string, unknown>, F extends boolean = false> = Omit<FormOptions<T, F>, 'adapter' | 'subscribe' | 'defaultGetter'>;