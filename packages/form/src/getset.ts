import type { FormElementConfig, FormElementValue } from './types';
import { noop } from './utils';
import { ensureArray } from './helpers';

export const TYPE_MAP = {
  'text': [getInputValue, setInputValue],
  'email': [getInputValue, setInputValue],
  'tel': [getInputValue, setInputValue],
  'select-one': [getSelectValue, setSelectValue],
  'select-multiple': [getSelectValue, setSelectValue],
  'checkbox': [getCheckboxValue, setCheckboxValue],
  'password': [getInputValue, setInputValue],
  'textarea': [getInputValue, setInputValue],
  'radio': [getRadioValue, setRadioValue],
  'color': [getInputValue, setInputValue],
  'date': [getInputValue, setInputValue],
  'datetime-local': [getInputValue, setInputValue],
  'file': [getFileValue, noop],
  'hidden': [getInputValue, setInputValue],
  'month': [getInputValue, setInputValue],
  'number': [getInputValue, setInputValue],
  'range': [getInputValue, setInputValue],
  'time': [getInputValue, setInputValue],
  'url': [getInputValue, setInputValue],
  'week': [getInputValue, setInputValue],
};

export const TYPES = Object.keys(TYPE_MAP);

type OptionType = (HTMLOptGroupElement | HTMLOptionElement) & { selected?: boolean };

/**
 * Sets the value for an input type element.
 * 
 * @param conf the element configuration object.
 * @param value the value to be set to the input.
 */
export function setInputValue(conf: FormElementConfig, value: FormElementValue) {
  const el = conf.el as HTMLInputElement;
  if (conf.virtual || !el)
    conf.virtualValue = value;
  else
    el.value = value + '';
}

/**
 * Sets the value for a checkbox type element.
 * 
 * @param conf the element configuration object.
 * @param value the value indicating if the component is checked.
 */
export function setCheckboxValue(conf: FormElementConfig, value: FormElementValue) {
  const el = conf.el as HTMLInputElement;
  if (conf.virtual || !el) {
    conf.virtualValue = /(true|1|yes)/.test(value + '') ? true : false;
  }
  else {
    if (/(true|1|yes)/.test(value + ''))
      el.setAttribute('checked', 'true');
  }
}

/**
 * Sets the value for a radio type element.
 * 
 * @param conf the element configuration object.
 * @param value the value when matched element is set to checked.
 */
export function setRadioValue(conf: FormElementConfig, value: FormElementValue) {
  const el = conf.el as HTMLInputElement[];
  if (conf.virtual || !el) {
    conf.virtualValue = value;
  }
  else {
    el.forEach(e => {
      if (e.value === value)
        e.setAttribute('checked', 'true');
    });
  }
}

/**
 * Sets the value for a select or multiple select.
 * 
 * @param conf the element configuration object.
 * @param value the value or values that are to be selected.
 */
export function setSelectValue(conf: FormElementConfig, value: FormElementValue) {


  const el = conf.el as HTMLSelectElement;

  function recurseChildren(values: string[], children: OptionType[]) {
    for (const c of children) {
      if (c instanceof HTMLOptGroupElement) {
        recurseChildren(values, Array.from(c.children) as HTMLOptionElement[]);
      }
      else {
        const val = c.value;
        if (values.includes(val))
          c.selected = true;
        else
          c.selected = false;
      }
    }
  }

  if (conf.virtual || !el) {
    conf.virtualValue = conf.type === 'select-multiple' ? ensureArray(value as string[]) : value;
  }
  else {
    const _values = ensureArray(value as string[]).filter(v => v !== null && typeof v !== 'undefined') as string[];
    if (el.type === 'select-multiple') {
      const children = Array.from(el.children);
      recurseChildren(_values, children as OptionType[]);
    }
    else {
      el.value = _values.shift() + '';
    }
  }
}

/**
 * Gets the value of an input element.
 * 
 * @param conf the element configuration object.
 */
export function getInputValue(conf: FormElementConfig) {
  const el = conf.el as HTMLInputElement;
  if (conf.virtual || !el) return conf.virtualValue;
  return el.value;
}

/**
 * Gets the value of a checkbox element.
 * 
 * @param conf the element configuration object.
 */
export function getCheckboxValue(conf: FormElementConfig) {
  const el = conf.el as HTMLInputElement;
  if (conf.virtual || !el) return conf.virtualValue as boolean;
  return el.checked
}

/**
 * Gets the value of a radio element.
 * 
 * @param conf the element configuration object.
 */
export function getRadioValue(conf: FormElementConfig) {
  let value;
  const el = conf.el as HTMLInputElement[];
  for (const e of el) {
    if (typeof value !== 'undefined')
      return value;
    if (e.checked)
      value = e.value;
  }
  return value;
}

/**
 * Gets the value or values for a select element.
 * 
 * @param conf the element configuration object.
 */
export function getSelectValue(conf: FormElementConfig) {
  const el = conf.el as HTMLSelectElement;

  const selectedValues = [] as string[];

  function recurseChildren(children: OptionType[]) {
    for (const c of children) {
      if (c instanceof HTMLOptGroupElement) {
        recurseChildren(Array.from(c.children) as HTMLOptionElement[]);
      }
      else if (c.selected) {
        selectedValues.push(c.value);
      }
    }
    return selectedValues;
  }
  if (el.type === 'select-multiple') {
    const children = Array.from(el.children);
    return recurseChildren(children as OptionType[]);
  }
  else {
    return el.value;
  }

}

/**
 * Gets the value/File or Files of an input File element.
 * 
 * @param conf the element configuration object.
 */
export function getFileValue(conf: FormElementConfig) {
  const el = conf.el as HTMLInputElement;
  return !el.files ? [] : Array.from(el.files);
}