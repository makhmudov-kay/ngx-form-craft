import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxFormCraftSettings } from '../../models/ngx-form-craft.model';
import { PasswordFieldWithConfirm } from '../../models/password-type.model';
import { Field } from '../../models/common.model';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css'],
})
export class FormRendererComponent {
  @Input()
  configs!: NgxFormCraftSettings;

  @Input()
  form: FormGroup = new FormGroup({});

  confirmPasswordType(field: Field) {
    return field as PasswordFieldWithConfirm;
  }
}
