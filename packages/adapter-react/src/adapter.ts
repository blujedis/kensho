/* eslint-disable react-hooks/exhaustive-deps */
import createController, {
	FormAdapterOptions,
	SubscribeState,
	FormElement,
	DEFAULT_FORM_STATE,
	getProperty,
	KeyOfAny,
	Path,
	getFirstDefined
} from '@kensho/form';
import { useCallback, useEffect, useMemo } from 'react';
import useStateRef from './useStateRef';

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
	// Create the store the controller will update
	const [store, setStore] = useStateRef({
		...DEFAULT_FORM_STATE,
		errors: {},
		fields: {}
	} as SubscribeState<T, F>);

	const ctrl = useMemo(
		() => createController({ ...options, adapter: 'react', defaultGetter }),
		[options]
	);
	const register = ctrl.register;
	ctrl.register = useCallback((f: HTMLFormElement | null) => {
		if (!f) {
			return { destroy: () => {} };
		}
		return register(f);
	}, []);

	ctrl.subscribe = useCallback(ctrl.subscribe, []);
	ctrl.getValue = useCallback(ctrl.getValue, []);
	ctrl.getValues = useCallback(ctrl.getValues, []);
	ctrl.setValue = useCallback(ctrl.setValue, []);
	ctrl.setValues = useCallback(ctrl.setValues, []);
	ctrl.field = useCallback(ctrl.field, []);
	ctrl.submit = useCallback(ctrl.submit, []);
	ctrl.reset = useCallback(ctrl.reset, []);
	ctrl.validate = useCallback(ctrl.validate, []);

	// subscribe to the controller's state.
	useEffect(() => {
		const unsubscribe = ctrl.subscribe((s) => {
			setStore({ ...s });
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return {
		...ctrl,
		store
	};
}
