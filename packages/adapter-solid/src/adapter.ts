import { createSignal, onMount, onCleanup } from 'solid-js';
import createController, {
	FormAdapterOptions,
	SubscribeState,
	FormElement,
	DEFAULT_FORM_STATE,
	KeyOfAny,
	Path,
	helpers
} from '@kensho/form';
// import { useCallback, useEffect, useMemo } from 'react';

const { getProperty, getFirstDefined } = helpers;

/**
 * Gets the default value for element based on adapter type.
 *
 * @param el the current element to get default value for.
 * @param values the initial values provided in options.
 */
const defaultGetter = <E extends FormElement, T extends Record<string, unknown>>(
	name: KeyOfAny<Path<T>>,
	el: E,
	values: T
) => {
	const defaultDataVal = getProperty(values, name);
	// It a value was provided in initial values it
	// takes priority over any default set on element.
	// if data val is empty string allow fallback to
	// default field value if any.
	if (typeof defaultDataVal !== 'undefined' && defaultDataVal !== '')
		return defaultDataVal;
	if (el.type === 'checkbox' || el.type === 'radio') {
		const checked = el.defaultChecked;
		if (el.type === 'checkbox') return checked;
		else if (el.type === 'radio' && checked) return el.value;
		return '';
	}
	return getFirstDefined(el, ['defaultValue', 'value']) || '';
};

/**
 * Initializes Kensho form controller hook.
 *
 * @example
 * const { register } = useKensho({
 *    // you could also do something like {} as SomeType then set defaultValues.
 *    initialValues: { firstname: 'Milton', email: 'waddams@basement.com' },
 *    onSubmit(values) { console.log(values); }
 * });
 * export default function Myform(props) {
 *    return (
 *       <form ref={register}>
 *          <input type="text" name="firstname" />
 *          <input type="email" name="email" />
 *       </form>
 *    );
 * }
 *
 * @param options form controller options for initialization.
 */
export function useKensho<
	T extends Record<string, unknown>,
	F extends boolean = false
>(options: FormAdapterOptions<T, F>) {
	const [store, setStore] = createSignal({
		...DEFAULT_FORM_STATE,
		errors: {},
		fields: {}
	} as SubscribeState<T, F>);

	const ctrl = createController({
		...options,
		adapter: 'none',
		defaultGetter
	});

	let unsubscribe: () => void = () => {};

	onMount(() => {
		unsubscribe = ctrl.subscribe((values) => {
			setStore(values);
		});
	});

	onCleanup(() => unsubscribe());

	const _store = store as typeof store & {
		subscribe: (...args: Parameters<typeof ctrl.subscribe>) => () => void;
	};
	_store.subscribe = (...args: Parameters<typeof ctrl.subscribe>) =>
		ctrl.subscribe(...args);

	return {
		...ctrl,
		store: _store
	};
}
