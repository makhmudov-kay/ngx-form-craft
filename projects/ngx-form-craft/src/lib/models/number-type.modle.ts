import { InputFieldBase } from './input-type.model';

export interface NumberFieldBase extends InputFieldBase {
  inputType: 'number';
  numberOptions: {
    min?: number;
    max?: number;
  };
}

export type NumberField = NumberFieldBase;
