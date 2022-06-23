import { type Writable } from 'svelte/store';
import { FormOptions, SubscribeState } from '@kensho/form';
interface Store<T> {
	subscribe: Writable<T>['subscribe'];
	set: Writable<T>['set'];
}
export declare function useKensho<T extends Record<string, unknown>, F extends boolean = false>(
	options: FormOptions<T, F>
): {
	store: Store<SubscribeState<T, F>>;
	form: (f: HTMLFormElement | null) => {
		destroy: () => void;
	};
	field: {
		<E extends import('@kensho/form').FormElement>(
			name: import('@kensho/form').KeyOfAny<import('@kensho/form').Path<T>>,
			index: number
		): import('@kensho/form').FormField<E[]>;
		<E_1 extends import('@kensho/form').FormElement>(
			name: import('@kensho/form').KeyOfAny<import('@kensho/form').Path<T>>
		): import('@kensho/form').FormField<E_1>;
	};
	reset: <U extends Record<string, unknown>>(values?: U | undefined) => Promise<void>;
	getValue: (
		name: import('@kensho/form').KeyOfAny<import('@kensho/form').Path<T>>,
		transform?: boolean | undefined
	) => import('@kensho/form').FormDataValue | import('@kensho/form').FormDataValue[];
	getValues: {
		(flat: boolean): Record<
			import('@kensho/form').KeyOfAny<import('@kensho/form').Path<T>>,
			import('@kensho/form').FormDataValue
		>;
		(): Required<T>;
	};
	setValue: (
		name: import('@kensho/form').KeyOfAny<import('@kensho/form').Path<T>>,
		value: import('@kensho/form').FormDataValue | import('@kensho/form').FormDataValue[]
	) => void;
	setValues: <U_1 extends Record<string, unknown>>(values: U_1) => void;
	getFields: () => Record<
		import('@kensho/form').KeyOfAny<import('@kensho/form').Path<T>>,
		import('@kensho/form').FormField<import('@kensho/form').FormElement>
	>;
	validate: <U_2 extends Record<string, unknown>>(
		values?: U_2 | undefined
	) => Promise<import('@kensho/form').ErrorState<T, F>>;
	destroy: () => void;
	getNativeValidators: (
		name: import('@kensho/form').KeyOfAny<import('@kensho/form').Path<T>>
	) =>
		| import('@kensho/form').NativeValidatorAttributes
		| import('@kensho/form').NativeValidatorAttributes[];
	subscribe: (fn: (state: SubscribeState<T, F>) => void) => () => void;
};
export {};
//# sourceMappingURL=adapter.d.ts.map
