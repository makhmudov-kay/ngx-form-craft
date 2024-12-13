import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

type Layout = 'vertical' | 'horizontal';
type Fields = 'input' | 'textarea' | 'select';
type FieldTypes =
  | 'text'
  | 'email'
  | 'checkbox'
  | 'radio'
  | 'number'
  | 'file'
  | 'password';

interface BaseField {
  type: Fields;
}

export interface InputField extends BaseField {
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

interface TextareaField extends BaseField {
  type: 'textarea';
}

interface SelectField extends BaseField {
  type: 'select';
}

type Field = InputField | TextareaField | SelectField;

type FieldSize = 'small' | 'default' | 'large';

export interface NgxFormCraftSettings {
  nzLayout: Layout;
  formFields: NgxFromCraftConfig[];
}

export interface NgxFromCraftConfig {
  key: string;
  fieldConfig: Field;
  size?: FieldSize;
  errorMessage: string;
  templateOptions: {
    label?: string;
    placeholder?: string;
    required?: boolean;
    [key: string]: any;
  };
  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
}
