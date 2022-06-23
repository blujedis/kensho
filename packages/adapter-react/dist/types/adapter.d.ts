import { FormAdapterOptions, SubscribeState, FormElement, KeyOfAny, Path } from '@kensho/form';
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
export declare function useKensho<T extends Record<string, unknown>, F extends boolean = false>(options: FormAdapterOptions<T, F>): {
    store: SubscribeState<T, F>;
    form: null;
    register: (f: HTMLFormElement | null) => {
        destroy: () => void;
    };
    field: {
        (name: KeyOfAny<Path<T>>, value?: import("@kensho/form").FormElementValue): import("@kensho/form").FormField;
        (element: Partial<FormElement>): import("@kensho/form").FormField;
    };
    getValue: (name: KeyOfAny<Path<T>>, cast?: boolean | import("@kensho/form").CoerceHandler | undefined) => import("@kensho/form").FormElementValue;
    getValues: (canTransform?: boolean | undefined) => Required<T & {
        [key: string]: unknown;
    }>;
    setValue: (name: KeyOfAny<Path<T>>, value: import("@kensho/form").FormElementValue) => void;
    setValues: <U extends Record<string, unknown>>(values: U) => void;
    validate: {
        <U_1 extends Record<string, unknown>>(values: U_1): Promise<import("@kensho/form").ErrorState<T & {
            [key: string]: unknown;
        }, F>>;
        (names?: KeyOfAny<Path<T>> | KeyOfAny<Path<T>>[] | undefined): Promise<import("@kensho/form").ErrorState<T & {
            [key: string]: unknown;
        }, F>>;
    };
    getNativeValidators: (name: KeyOfAny<Path<T>>) => import("@kensho/form").NativeValidatorAttributes | import("@kensho/form").NativeValidatorAttributes[];
    reset: <U_2 extends Record<string, unknown> = T & {
        [key: string]: unknown;
    }>(values?: U_2 | undefined, replaceDefaults?: boolean | undefined) => Promise<void>;
    submit: (e?: Event | undefined) => void;
    subscribe: (fn: (state: SubscribeState<T & {
        [key: string]: unknown;
    }, F>) => void) => () => void;
    unsubscribe: (fn?: ((...args: any[]) => void) | undefined) => void;
    destroy: () => void;
};
//# sourceMappingURL=adapter.d.ts.map