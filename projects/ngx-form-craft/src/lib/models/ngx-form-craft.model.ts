import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Field, FieldSize, Layout } from './common.model';

export interface NgxFormCraftSettings {
  nzLayout: Layout;
  formFields: NgxFromCraftConfig[];
}

export interface NgxFromCraftConfig {
  key: string;
  initialValue?: any;
  fieldConfig: Field;
  errorMessages: { [key: string]: string };
  templateOptions: {
    label?: string;
    placeholder?: string;
    required?: boolean;
    size?: FieldSize;
    [key: string]: any;
  };
  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
}
