import { Component, Input } from '@angular/core';
import { InputField } from '../../../models/input-type.model';
import { PasswordFieldWithConfirm } from '../../../models/password-type.model';
import { BaseFieldComponent } from '../../../shared/components/abstract/base-field.component';

@Component({
  selector: 'password-type',
  templateUrl: './input-type-password.component.html',
  styleUrls: ['./input-type-password.component.css'],
})
export class InputTypePasswordComponent extends BaseFieldComponent {
  @Input()
  confirmPasswordControl!: any;

  get passwordTypeField(): InputField {
    return this.field.fieldConfig as InputField;
  }

  get confirmPasswordField(): PasswordFieldWithConfirm {
    return this.field.fieldConfig as PasswordFieldWithConfirm;
  }

  passwordVisible = false;
}
