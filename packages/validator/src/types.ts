export type ParsePath<T, Key extends keyof T> = Key extends string
	? T[Key] extends Record<string, any>
		?
				| `${Key}.${ParsePath<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
				| `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
		: never
	: never;

export type ParsePathKey<T> = ParsePath<T, keyof T> | keyof T;

export type Path<T> = ParsePathKey<T> extends string | keyof T
	? ParsePathKey<T>
	: keyof T;

export type PathValue<T, P extends Path<T>> = P extends `${infer Key}.${infer Rest}`
	? Key extends keyof T
		? Rest extends Path<T[Key]>
			? PathValue<T[Key], Rest>
			: never
		: never
	: P extends keyof T
	? T[P]
	: never;

export type AnyString = string & { value?: any };

export type KeyOfAny<K extends string | number | symbol> = AnyString | K;

export type ValueOf<T> = T[keyof T];

export type ValidatorReturnType = string | null | undefined | false;

export interface ValidatorDefineHandler<
	T extends Record<string, CreateValidatorHandler> = any
> {
	(value: any, data?: Record<string, unknown>): ValidatorReturnType;
	_name?: string;
	_handlers?: TypeApi<T>;
}
export type CreateValidatorHandler = (
	...args: any
) => (value: any, data?: Record<string, unknown>) => ValidatorReturnType;

export interface NativeValidators {
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

export interface ValidatorOptions {
	depth: number;
	flatten: boolean;
}

export type TypeApi<
	T extends Record<string, CreateValidatorHandler> = Record<
		string,
		CreateValidatorHandler
	>
> = {
	[P in keyof Omit<T, 'default'>]: (...params: Parameters<T[P]>) => TypeApi<T>;
};

export type ParseHandler = (value: any, data?: Record<string, unknown>) => string[];

export type WithParsers = {
	parse: ParseHandler;
	parseAsync: Promise<ParseHandler>;
};

export type Api<T extends Record<string, Record<string, CreateValidatorHandler>>> = {
	[K in keyof T]: () => TypeApi<T[K]> & WithParsers;
};

export interface ApiConfig<
	T extends Record<string, Record<string, CreateValidatorHandler>>,
	K extends keyof T = keyof T
> {
	[key: string]: Partial<TypeApi<T[K]>> | ApiConfig<T>;
}

export type FromApiConfig<
	P extends string,
	T extends Record<string, Record<string, CreateValidatorHandler>>
> = Record<P, ApiConfig<T>>;

export type SingleParam = string | number | boolean;

export type FromObjectItemParams<
	P extends Record<string, CreateValidatorHandler>,
	K extends keyof P = keyof P
> = Record<
	string,
	Parameters<P[K]>[1] extends undefined
		? true | SingleParam | [SingleParam]
		: Parameters<P[K]> | Parameters<P[K]>[0]
>;

export type FromObjectItem<
	T extends Record<string, Record<string, CreateValidatorHandler>>,
	K extends keyof T = keyof T
> = {
	type: K;
	validators?: FromObjectItemParams<T[K]>;
};

export interface FromObject<
	T extends Record<string, Record<string, CreateValidatorHandler>>
> {
	[key: string]: FromObjectItem<T, keyof T> | FromObject<T>;
}

export type ParsedErrorsMap<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K] extends Record<string, unknown>
		? ParsedErrorsMap<T[K]>
		: string[];
};

export type ParsedErrors<
	T extends Record<string, unknown>,
	F extends boolean
> = F extends true
	? Record<KeyOfAny<Path<T>>, string[]>
	: F extends never
	? never
	: ParsedErrorsMap<T>;
