import { Injectable } from '@angular/core';
import { NgxFromCraftConfig } from '../models/ngx-form-craft.model';
import { FormGroup } from '@angular/forms';
import { FieldUtils } from '../utils/field-utils';

@Injectable({
  providedIn: 'root',
})
export class NgxFormCraftService {
  createForm(fields: NgxFromCraftConfig[]): FormGroup {
    const formGroup = new FormGroup({});

    fields.forEach((field) => {
      const control = FieldUtils.createFormControl(field);
      formGroup.addControl(field.key, control);

      if (FieldUtils.isPasswordFieldWithConfirm(field.fieldConfig)) {
        const confirmControl = FieldUtils.createConfirmPasswordControl(field);
        formGroup.addControl(field.fieldConfig.confirmFieldKey, confirmControl);
      }
    });

    return formGroup;
  }

  markAsDirty(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: true });
    });
  }
}
