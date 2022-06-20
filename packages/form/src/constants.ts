
export const VALID_MUTATION_NODES = ['INPUT', 'SELECT', 'TEXTAREA'] as HTMLElement['nodeName'][];

export const MAX_DEPTH = 20; // if you are nesting more than this you're doing it wrong.

export const HTML5_INPUT_TYPES = ['email', 'number', 'date', 'datetime-local', 'time', 'url', 'tel', 'color'] as HTMLInputElement['type'][];

export const HTML5_PLACEHOLDER_TYPES = [...HTML5_INPUT_TYPES, 'textarea'] as (HTMLInputElement | HTMLTextAreaElement)['type'][];

export const DEFAULT_FORM_STATE = {
  initialized: false,
  validating: false,
  pristine: true,
  dirty: false,
  valid: true,
  invalid: false,
  submitting: false,
  submitted: false,
};