import { InputField } from './input-type.model';
import { SelectField } from './select-type.modle';
import { TextareaField } from './textarea-type.model';

export type Layout = 'vertical' | 'horizontal';
export type FieldSize = 'small' | 'default' | 'large';
export type Fields = 'input' | 'textarea' | 'select';

export interface BaseField {
  type: Fields;
}

export type Field = InputField | TextareaField | SelectField;
