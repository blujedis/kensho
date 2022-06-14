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
export function setInputValue(conf, value) {
    const el = conf.el;
    if (el)
        el.value = value + '';
    else
        conf.virtualValue = value;
}
export function setSelectValue(conf, value) {
    const el = conf.el;
    if (!el) {
        conf.virtualValue = ensureArray(value);
    }
    else {
        const _values = ensureArray(value);
        if (el.type === 'select-multiple') {
            Array.from(el.children).forEach((child) => {
                const _child = child;
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
export function setCheckboxValue(conf, value) {
    const el = conf.el;
    if (!el) {
        conf.virtualValue = /(true|1|yes)/.test(value + '') ? true : false;
    }
    else {
        if (/(true|1|yes)/.test(value + ''))
            el.setAttribute('checked', 'true');
    }
}
export function setRadioValue(conf, value) {
    const el = conf.el;
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
export function getInputValue(conf) {
    const el = conf.el;
    if (!el)
        return conf.virtualValue;
    return el.value;
}
export function getCheckboxValue(conf) {
    const el = conf.el;
    if (!el)
        return conf.virtualValue;
    return el.checked;
}
export function getRadioValue(conf) {
    let value;
    const el = conf.el;
    for (const e of el) {
        if (typeof value !== 'undefined')
            return value;
        if (e.checked)
            value = e.value;
    }
    return value;
}
export function getSelectValue(conf) {
    const el = conf.el;
    if (el.type === 'select-multiple') {
        const values = [];
        Array.from(el.children).forEach((child) => {
            const _child = child;
            if (_child.selected)
                values.push(_child.value);
        });
        return values;
    }
    else {
        return el.value;
    }
}
export function getFileValue(conf) {
    const el = conf.el;
    return !el.files ? [] : Array.from(el.files);
}
//# sourceMappingURL=getset.js.map