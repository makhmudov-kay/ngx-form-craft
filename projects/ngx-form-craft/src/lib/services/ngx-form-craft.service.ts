import { Injectable } from '@angular/core';
import { NgxFromCraftConfig } from '../models/ngx-form-craft.model';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxFormCraftValidators } from '../utils/confirm-password.util';
import { PasswordFieldWithConfirm } from '../models/password-type.model';
import { CheckBoxField } from '../models/checkbox-type.model';

@Injectable({
  providedIn: 'root',
})
export class NgxFormCraftService {
  createForm(fields: NgxFromCraftConfig[]): FormGroup {
    const formGroup = new FormGroup({});

    fields.forEach((field) => {
      let initialValue = field.initialValue || '';

      const checkBoxField = field.fieldConfig as CheckBoxField;
      // Для чекбоксов инициализируем правильные значения
      if (checkBoxField.inputType === 'checkbox') {
        initialValue as boolean;
        if (checkBoxField.checkBoxType === 'single') {
          initialValue = !!initialValue; // Приведение к булевому значению
        } else if (checkBoxField.checkBoxType === 'multiple') {
          initialValue = Array.isArray(checkBoxField.checkBoxOptions) ? checkBoxField.checkBoxOptions : [];
        }
      }

      const validators = Array.isArray(field.validators)
        ? field.validators
        : field.validators
        ? [field.validators]
        : null;

      const asyncValidators: AsyncValidatorFn[] | null = Array.isArray(
        field.asyncValidators
      )
        ? field.asyncValidators
        : field.asyncValidators
        ? [field.asyncValidators]
        : null;

      const control = new FormControl(
        initialValue,
        validators ? Validators.compose(validators) : null,
        asyncValidators ? Validators.composeAsync(asyncValidators) : null
      );
      formGroup.addControl(field.key, control);

      const passFieldWithConfirm =
        field.fieldConfig as PasswordFieldWithConfirm;

      if (
        passFieldWithConfirm.confirmPassword &&
        passFieldWithConfirm.confirmFieldKey
      ) {
        const confirmControl = new FormControl('', [
          Validators.required,
          NgxFormCraftValidators.confirmMatchPasswordValidator(field.key),
        ]);
        formGroup.addControl(
          passFieldWithConfirm.confirmFieldKey,
          confirmControl
        );
      }
    });

    return formGroup;
  }

  markAsDirty(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
}
