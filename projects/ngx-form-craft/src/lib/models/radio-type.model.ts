import { CheckBoxOption } from './checkbox-type.model';
import { InputFieldBase } from './input-type.model';

export interface RadioOption extends CheckBoxOption {}

export interface RadioFieldBase extends InputFieldBase {
  inputType: 'radio';
  radioOptions: RadioOption[];
}

export type RadioField = RadioFieldBase;
