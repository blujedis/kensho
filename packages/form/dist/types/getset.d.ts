import type { FormElementConfig, FormElementValue } from './types';
import { noop } from './utils';
export declare const TYPE_MAP: {
    text: (typeof setInputValue)[];
    email: (typeof setInputValue)[];
    tel: (typeof setInputValue)[];
    'select-one': (typeof setSelectValue)[];
    'select-multiple': (typeof setSelectValue)[];
    checkbox: (typeof setCheckboxValue)[];
    password: (typeof setInputValue)[];
    textarea: (typeof setInputValue)[];
    radio: (typeof setRadioValue)[];
    color: (typeof setInputValue)[];
    date: (typeof setInputValue)[];
    'datetime-local': (typeof setInputValue)[];
    file: (typeof getFileValue | typeof noop)[];
    hidden: (typeof setInputValue)[];
    month: (typeof setInputValue)[];
    number: (typeof setInputValue)[];
    range: (typeof setInputValue)[];
    time: (typeof setInputValue)[];
    url: (typeof setInputValue)[];
    week: (typeof setInputValue)[];
};
export declare const TYPES: string[];
/**
 * Sets the value for an input type element.
 *
 * @param conf the element configuration object.
 * @param value the value to be set to the input.
 */
export declare function setInputValue(conf: FormElementConfig, value: FormElementValue): void;
/**
 * Sets the value for a checkbox type element.
 *
 * @param conf the element configuration object.
 * @param value the value indicating if the component is checked.
 */
export declare function setCheckboxValue(conf: FormElementConfig, value: FormElementValue): void;
/**
 * Sets the value for a radio type element.
 *
 * @param conf the element configuration object.
 * @param value the value when matched element is set to checked.
 */
export declare function setRadioValue(conf: FormElementConfig, value: FormElementValue): void;
/**
 * Sets the value for a select or multiple select.
 *
 * @param conf the element configuration object.
 * @param value the value or values that are to be selected.
 */
export declare function setSelectValue(conf: FormElementConfig, value: FormElementValue): void;
/**
 * Gets the value of an input element.
 *
 * @param conf the element configuration object.
 */
export declare function getInputValue(conf: FormElementConfig): boolean | FormElementValue;
/**
 * Gets the value of a checkbox element.
 *
 * @param conf the element configuration object.
 */
export declare function getCheckboxValue(conf: FormElementConfig): boolean;
/**
 * Gets the value of a radio element.
 *
 * @param conf the element configuration object.
 */
export declare function getRadioValue(conf: FormElementConfig): string | undefined;
/**
 * Gets the value or values for a select element.
 *
 * @param conf the element configuration object.
 */
export declare function getSelectValue(conf: FormElementConfig): string | string[];
/**
 * Gets the value/File or Files of an input File element.
 *
 * @param conf the element configuration object.
 */
export declare function getFileValue(conf: FormElementConfig): File[];
//# sourceMappingURL=getset.d.ts.map