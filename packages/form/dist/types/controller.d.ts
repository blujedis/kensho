import type { FormElement, FormElementValue, FormOptions, Path, KeyOfAny, FormField, NativeValidatorAttributes, ErrorState, SubscribeState } from './types';
/**
 * Creates the Kensho form controller context for managing HTML forms.
 *
 * @example
 * <script>
 *    const form = document.getElementById('myform');
 *    const { register } = createController({ options... });
 *    register(form);
 * </script>
 * <form id="myform">
 *    <input type="text" name="firstname" />
 * </form>
 *
 * @param options form controller options for creating the Kensho form controller.
 */
export declare function createController<T extends Record<string, unknown>, F extends boolean = false>(options: FormOptions<T & {
    [key: string]: unknown;
}, F>): {
    form: null;
    register: (f: HTMLFormElement | null) => {
        destroy: () => void;
    };
    field: {
        (name: KeyOfAny<Path<T>>, value?: FormElementValue): FormField;
        (element: Partial<FormElement>): FormField;
    };
    getValue: (name: KeyOfAny<Path<T>>, cast?: boolean | import("./types").CoerceHandler | undefined) => FormElementValue;
    getValues: (canTransform?: boolean) => Required<T & {
        [key: string]: unknown;
    }>;
    setValue: (name: KeyOfAny<Path<T>>, value: FormElementValue) => void;
    setValues: <U extends Record<string, unknown>>(values: U) => void;
    validate: {
        <U_1 extends Record<string, unknown>>(values: U_1): Promise<ErrorState<T & {
            [key: string]: unknown;
        }, F>>;
        (names?: KeyOfAny<Path<T>> | KeyOfAny<Path<T>>[] | undefined): Promise<ErrorState<T & {
            [key: string]: unknown;
        }, F>>;
    };
    getNativeValidators: (name: KeyOfAny<Path<T>>) => NativeValidatorAttributes | NativeValidatorAttributes[];
    reset: <U_2 extends Record<string, unknown> = T & {
        [key: string]: unknown;
    }>(values?: U_2 | undefined, replaceDefaults?: boolean) => Promise<void>;
    submit: (e?: Event) => void;
    subscribe: (fn: (state: SubscribeState<T & {
        [key: string]: unknown;
    }, F>) => void) => () => void;
    unsubscribe: (fn?: ((...args: any[]) => void) | undefined) => void;
    destroy: () => void;
};
//# sourceMappingURL=controller.d.ts.map