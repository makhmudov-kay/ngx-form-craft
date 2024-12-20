import { FormControl, Validators } from '@angular/forms';
import { NgxFromCraftConfig } from '../models/ngx-form-craft.model';
import { PasswordFieldWithConfirm } from '../models/password-type.model';
import { NgxFormCraftValidators } from './confirm-password.util';
import { isNumberValidator } from './custom-validators';

export class FieldUtils {
  static createFormControl(field: NgxFromCraftConfig): FormControl {
    const initialValue = field.initialValue || '';
    const validators = Array.isArray(field.validators)
      ? field.validators
      : [field.validators || Validators.nullValidator];

    if (
      field.fieldConfig.type === 'input' &&
      field.fieldConfig.inputType === 'number'
    ) {
      validators.push(isNumberValidator());
    }
    const asyncValidators = Array.isArray(field.asyncValidators)
      ? field.asyncValidators
      : [field.asyncValidators || null];

    return new FormControl(
      initialValue,
      Validators.compose(validators),
      Validators.composeAsync(asyncValidators)
    );
  }

  static isPasswordFieldWithConfirm(
    fieldConfig: any
  ): fieldConfig is PasswordFieldWithConfirm {
    return fieldConfig.confirmPassword && fieldConfig.confirmFieldKey;
  }

  static createConfirmPasswordControl(field: NgxFromCraftConfig): FormControl {
    return new FormControl('', [
      Validators.required,
      NgxFormCraftValidators.confirmMatchPasswordValidator(field.key),
    ]);
  }
}
