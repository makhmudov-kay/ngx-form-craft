import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { FieldType } from './field-types.enum';
import { DataSourceType } from './data-source.type';

export interface FormBuilderConfig {
  layout?: 'vertical' | 'horizontal' | 'custom';
  formClass?: string[];
  formStyles?: { [key: string]: string };
  fieldSize?: 'small' | 'default' | 'large';
  fields: { [fieldName: string]: FieldConfig | FormArrayConfig };
}

export interface FieldConfig {
  type: FieldType;
  label?: string;
  placeholder?: string;
  required?: boolean;
  fieldClass?: string[];
  fieldStyle?: { [key: string]: string };
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
  errorMesages?: { [errorKey: string]: string };
  events?: {
    onFocus?: (value?: any) => void;
    onBlur?: (value?: any) => void;
    onChange?: (value?: any) => void;
  };
  dependsOn?: string;
  dependencyCondition?: (value: any) => boolean;
  visibilityCondition?: (form: any) => boolean;
  enableCondition?: (form: any) => boolean;
  // специфичные для определенных типов полей:
  inputType?: string;
  confirmPassword?: boolean;
  minRow?: number;
  maxRow?: number;
  charactersCount?: number;
  size?: 'small' | 'default' | 'large';
  dataSource?: DataSourceType;
}

export interface FormArrayConfig {
  [key: string]: FieldConfig;
}
