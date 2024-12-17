import { CheckBoxField } from './checkbox-type.model';
import { BaseField } from './common.model';
import { PasswordField } from './password-type.model';

export type FieldTypes =
  | 'text'
  | 'email'
  | 'checkbox'
  | 'radio'
  | 'number'
  | 'file'
  | 'password';

export interface InputFieldBase extends BaseField {
  type: 'input';
  inputType: FieldTypes;
  prefixIcon?: string;
  suffixIcon?: string;
  /**
   * This field has two required parameters
   * - ['initial icon', 'show password icon']
   *
   * Example: ['lock', 'unlock'], ['eye', 'eye-invisible']
   *  */
  passwordIcons?: [string, string];
}

export type InputField = InputFieldBase | PasswordField | CheckBoxField;
