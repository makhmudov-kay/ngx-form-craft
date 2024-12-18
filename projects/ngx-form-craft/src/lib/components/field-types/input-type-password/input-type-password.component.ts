import { Component, Input } from '@angular/core';
import {
  NgxFromCraftConfig,
} from '../../../models/ngx-form-craft.model';
import { InputField } from '../../../models/input-type.model';
import { PasswordFieldWithConfirm } from '../../../models/password-type.model';

@Component({
  selector: 'password-type',
  templateUrl: './input-type-password.component.html',
  styleUrls: ['./input-type-password.component.css'],
})
export class InputTypePasswordComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;

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
