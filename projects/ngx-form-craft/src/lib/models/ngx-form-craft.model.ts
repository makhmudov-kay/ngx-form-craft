import { AsyncValidatorFn, ValidatorFn } from "@angular/forms";

export interface NgxFromCraftConfig {
  key: string;
  type: string;
  templateOptions?: {
    label?: string;
    placeholder?: string;
    required?: boolean;
    [key: string]: any;
  };
  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
}
