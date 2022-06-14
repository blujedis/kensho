import type { FormDataValue, FormElement, FormOptions, Path, KeyOfAny, FormField, NativeValidatorAttributes, ErrorState, SubscribeState } from './types';
export declare function useKensho<T extends Record<string, unknown>, F extends boolean = false>(options: FormOptions<T, F>): {
    form: (f: HTMLFormElement) => {
        destroy: () => void;
    };
    field: {
        <E extends FormElement>(name: KeyOfAny<Path<T>>, index: number): FormField<E[]>;
        <E_1 extends FormElement>(name: KeyOfAny<Path<T>>): FormField<E_1>;
    };
    reset: <U extends Record<string, unknown>>(values?: U | undefined) => Promise<void>;
    getValue: (name: KeyOfAny<Path<T>>, transform?: boolean) => FormDataValue | FormDataValue[];
    getValues: {
        (flat: boolean): Record<KeyOfAny<Path<T>>, FormDataValue>;
        (): Required<T>;
    };
    setValue: (name: KeyOfAny<Path<T>>, value: FormDataValue | FormDataValue[]) => void;
    setValues: <U_1 extends Record<string, unknown>>(values: U_1) => void;
    getFields: () => Record<KeyOfAny<Path<T>>, FormField<FormElement>>;
    validate: <U_2 extends Record<string, unknown>>(values?: U_2) => Promise<ErrorState<T, F>>;
    destroy: () => void;
    getNativeValidators: (name: KeyOfAny<Path<T>>) => NativeValidatorAttributes | NativeValidatorAttributes[];
    subscribe: (fn: (state: SubscribeState<T, F>) => void) => any;
};
//# sourceMappingURL=hook.d.ts.map