import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Field, FieldSize, Layout } from './common.model';
import { TemplateRef } from '@angular/core';

export interface NgxFormCraftSettings {
  nzLayout: Layout;
  formFields: NgxFromCraftConfig[];
  formClass?: string[];
  formStyle?: { [key: string]: string };
}

export interface NgxFromCraftConfig {
  key: string;
  initialValue?: any;
  fieldConfig: Field;
  errorMessages: { [key: string]: string };
  templateOptions: {
    label?: string;
    placeholder?: string | TemplateRef<any> | null;
    required?: boolean;
    size?: FieldSize;
    fieldClass?: string[];
    fieldStyle?: { [key: string]: string };
    [key: string]: any;
  };
  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
}
