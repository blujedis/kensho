import type { DataType, DataTypeBase, FormElement } from './types';
/**
 * Used to convert/cast to data type.
 */
export declare const COERCE_MAP: {
    string: StringConstructor;
    number: NumberConstructor;
    integer: (v: unknown) => unknown;
    float: (v: unknown, places?: number) => unknown;
    bigint: (v: unknown) => unknown;
    boolean: (v: unknown) => boolean;
    array: (v: unknown, datatype?: DataTypeBase) => (StringConstructor | NumberConstructor | ((v: unknown) => unknown) | ((v: unknown, places?: number) => unknown) | ((v: unknown) => unknown) | ((v: unknown) => boolean) | ((v: unknown) => unknown))[];
    none: (v: unknown) => unknown;
};
/**
 * Parses default values provided to initialValues. Used for casting values back to type.
 *
 * @param value the value to be inspected.
 */
export declare function parseDefaultType(value: unknown): {
    dataType: DataType;
    dataTypeOptions: any[];
};
/**
 * Parses data-datatype attribute for data type converstion on submit.
 *
 * @example
 * data-datatype="integer"
 * data-datatype="[float]|2"
 *
 * @param config the value to be parse.
 */
export declare function parseDataType(config: string | undefined, defaultValue: unknown): {
    dataType: DataType;
    dataTypeOptions: any[];
};
export declare function castDataType(dataType: DataType, dataTypeOptions: any[], value: any): any;
/**
 * Parses element for native validation attributes. This can be used with
 * user defined custom validators if you wish to leverage these built in attributes.
 *
 * @param el the element to be parsed for attributes.
 */
export declare function parseNativeAttributes(el: FormElement): {
    type: import("./types").ElementType;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    pattern: string;
    min: number | null;
    max: number | null;
    minlength: number | null;
    maxlength: number | null;
    step: number | null;
};
/**
 * Non operation function.
 */
export declare function noop(...args: any[]): void;
/**
 * Recurses a mutated node looking for valid nodes that should be bound to form control.
 * @param node the mutated node.
 * @param validNodes the valid nodes that can be watched for mutation.
 * @param depth the max depth to recurse.
 */
export declare function recurseNode(node: Node, validNodes?: string[], depth?: number): Node[];
/**
 * Creates a mutation observer watching for DOM mutations from the root node.
 *
 * @param rootNode the root node to observe from.
 * @param onMutation the handler used when a mutation is detected.
 * @param match the matcher handler for finding valid nodes.
 */
export declare function createMutationObserver(rootNode: Node, onMutation: (el: Node, type: 'add' | 'remove') => void, validNodes?: string[]): () => void;
/**
 * Debounces a function ensuring the function is not endlessly executed.
 *
 * @param fn the function to debounce
 * @param delay timeout to wait until activating.
 * @param immediate when true executes immediately.
 */
export declare function debounce(fn: (...args: any[]) => any, delay?: number, immediate?: boolean): (this: any, ...args: any[]) => void;
/**
 * Checks if an element supports placeholders by type.
 *
 * @param el the html element to check if can support placeholder.
 * @param validTypes valid types that can receive a placeholder.
 */
export declare function canPlaceholder(el: FormElement, validTypes?: (HTMLInputElement | HTMLTextAreaElement)['type'][] | boolean): boolean;
/**
 * Creates a placeholder for intput and textarea elements.
 *
 * @param name the value to create as placeholder.
 */
export declare function createPlaceholder(name: string): string;
//# sourceMappingURL=utils.d.ts.map