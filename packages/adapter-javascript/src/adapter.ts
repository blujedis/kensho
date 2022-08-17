import createController, {
	FormAdapterOptions,
	FormElement,
	helpers,
	KeyOfAny,
	Path,
	SubscribeState
} from '@kensho/form';

const { getProperty } = helpers;

function createStore<T>(def?: T) {
	let _state: T | undefined;
	const api = {
		set(v: T) {
			_state = v;
		}
	};
	if (typeof def !== 'undefined') api.set(def);
	return {
		..._state,
		set: api.set
	};
}

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
		const checked = el.checked;
		if (el.type === 'checkbox') return checked;
		else if (el.type === 'radio' && checked) return el.value;
		return '';
	}
	return el.value || '';
};

export function useKensho<
	T extends Record<string, unknown>,
	F extends boolean = false
>(options: FormAdapterOptions<T, F>) {
	const ctrl = createController({ ...options, adapter: 'svelte', defaultGetter });
	const { set, ...store } = createStore({} as SubscribeState<T, F>);
	ctrl.subscribe(set);
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
