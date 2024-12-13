import { Injectable } from '@angular/core';
import { NgxFromCraftConfig } from '../models/ngx-form-craft.model';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NgxFormCraftService {
  createForm(fields: NgxFromCraftConfig[]): FormGroup {
    const formGroup = new FormGroup({});
    fields.forEach((field) => {
      const validators = Array.isArray(field.validators)
        ? field.validators
        : field.validators
        ? [field.validators]
        : null;

      const control = new FormControl(
        '',
        field.validators
          ? Validators.compose(validators as ValidatorFn[])
          : null
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
