import { InputFieldBase } from './input-type.model';

export type CheckBoxFieldType = 'single' | 'multiple';

export interface CheckBoxFieldBase extends InputFieldBase {
  inputType: 'checkbox';
  checkBoxType: CheckBoxFieldType;
}

export interface CheckBoxOption {
  checked?: boolean;
  label: string;
  value: string | number | boolean;
}

export interface SingleCheckBoxField extends CheckBoxFieldBase {
  checkBoxType: 'single';
  checkBoxOptions: CheckBoxOption;
}

export interface MultipleCheckBoxField extends CheckBoxFieldBase {
  checkBoxType: 'multiple';
  checkBoxOptions: CheckBoxOption[];
}

export type CheckBoxField = SingleCheckBoxField | MultipleCheckBoxField;
