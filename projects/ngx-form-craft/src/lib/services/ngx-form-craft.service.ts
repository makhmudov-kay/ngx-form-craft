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
import { isNumberValidator } from '../utils/custom-validators';

@Injectable({
  providedIn: 'root',
})
export class NgxFormCraftService {
  createForm(fields: NgxFromCraftConfig[]): FormGroup {
    const formGroup = new FormGroup({});

    fields.forEach((field) => {
      let initialValue = field.initialValue || '';

      if (field.fieldConfig.type === 'input') {
        if (field.fieldConfig.inputType === 'checkbox') {
          const checkBoxField = field.fieldConfig as CheckBoxField;
          initialValue as boolean;
          if (checkBoxField.checkBoxType === 'single') {
            initialValue = !!initialValue;
          } else if (checkBoxField.checkBoxType === 'multiple') {
            initialValue = Array.isArray(checkBoxField.checkBoxOptions)
              ? checkBoxField.checkBoxOptions
              : [];
          }
        }

        // Обработка числовых полей
        if (field.fieldConfig.inputType === 'number') {
          // Проверяем, является ли initialValue валидным числом
          if (
            field.initialValue === null ||
            field.initialValue === undefined ||
            field.initialValue === ''
          ) {
            initialValue = null; // Устанавливаем значение null для пустого ввода
          } else if (!isNaN(Number(field.initialValue))) {
            initialValue = Number(field.initialValue); // Преобразуем в число
          } else {
            initialValue = null; // Если преобразование в число невозможно, значение null
          }

          // Добавляем валидатор isNumberValidator
          const isNumber = isNumberValidator();
          field.validators = Array.isArray(field.validators)
            ? [...field.validators, isNumber]
            : [field.validators || isNumber];
        }

        if (field.fieldConfig.inputType === 'password') {
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
