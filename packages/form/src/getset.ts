import type {FormElementConfig, FormElementValue } from './types';
import { ensureArray, noop } from './utils';

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

export function setInputValue(conf: FormElementConfig, value: FormElementValue) {
  const el = conf.el as HTMLInputElement;
  if (el)
    el.value = value + '';
  else
    conf.virtualValue = value;
}

export function setSelectValue(conf: FormElementConfig, value: FormElementValue | FormElementValue[]) {
  const el = conf.el as HTMLSelectElement;
  if (!el) {
    conf.virtualValue = ensureArray(value);
  }
  else {
    const _values = ensureArray(value);
    if (el.type === 'select-multiple') {
      Array.from(el.children).forEach((child) => {
        const _child = child as HTMLOptionElement & { selected: boolean };
        const curVal = _child.value;
        if (_values.includes(curVal))
          _child.selected = true;
        else
          _child.selected = false;
      });
    }
    else {
      el.value = value + '';
    }
  }

}

export function setCheckboxValue(conf: FormElementConfig, value: FormElementValue) {
  const el = conf.el as HTMLInputElement;
  if (!el) {
    conf.virtualValue = /(true|1|yes)/.test(value + '') ? true : false;
  }
  else {
    if (/(true|1|yes)/.test(value + ''))
      el.setAttribute('checked', 'true');
  }
}

export function setRadioValue(conf: FormElementConfig, value: FormElementValue) {
  const el = conf.el as HTMLInputElement[];
  if (!el) {
    conf.virtualValue = value;
  }
  else {
    el.forEach(e => {
      if (e.value === value)
        e.setAttribute('checked', 'true');
    });
  }
}

export function getInputValue(conf: FormElementConfig) {
  const el = conf.el as HTMLInputElement;
  if (!el) return conf.virtualValue;
  return el.value;
}

export function getCheckboxValue(conf: FormElementConfig) {
  const el = conf.el as HTMLInputElement;
  if (!el) return conf.virtualValue;
  return el.checked
}

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

export function getSelectValue(conf: FormElementConfig) {
  const el = conf.el as HTMLSelectElement;
  if (el.type === 'select-multiple') {
    const values = [] as string[];
    Array.from(el.children).forEach((child) => {
      const _child = child as HTMLOptionElement & { selected: boolean };
      if (_child.selected)
        values.push(_child.value);
    });
    return values;
  }
  else {
    return el.value;
  }
}

export function getFileValue(conf: FormElementConfig) {
  const el = conf.el as HTMLInputElement;
  return !el.files ? [] : Array.from(el.files);
}