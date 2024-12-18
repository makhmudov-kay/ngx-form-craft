import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFormCraftSettings,
  NgxFromCraftConfig,
} from 'ngx-form-craft';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.less'],
  standalone: true,
  imports: [NgxFormCraftModule, NzButtonModule],
})
export class NumberFormComponent {
  form!: FormGroup;

  formConfigurations: NgxFromCraftConfig[] = [
    {
      key: 'age',
      initialValue: 10,
      fieldConfig: {
        type: 'input',
        inputType: 'number',
        numberOptions: {
          min: 20,
          max: 80,
        },
      },
      errorMessages: {
        required: 'Age is required',
        min: 'Age must be at least 20',
        max: 'Age must be at most 80',
      },
      templateOptions: {
        label: 'Age',
        size: 'large',
        placeholder: 'Enter your age',
      },
      validators: [Validators.required, Validators.min(20), Validators.max(80)],
    },
    {
      key: 'price',
      initialValue: 'check this',
      fieldConfig: {
        type: 'input',
        inputType: 'number',
        suffixIcon: 'user',
        prefixIcon: 'warning',
      },
      errorMessages: {
        required: 'Price is required',
      },
      templateOptions: {
        label: 'Price (with icons)',
        size: 'large',
        placeholder: 'Enter your price',
      },
      validators: [Validators.required],
    },
  ];

  formSetting: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: this.formConfigurations,
    formStyle: {
      display: 'grid',
      gap: '10px',
      gridTemplateColumns: '1fr 1fr',
    },
  };

  constructor(private formBuilder: NgxFormCraftService) {
    this.form = this.formBuilder.createForm(this.formConfigurations);
  }

  submit() {
    if (this.form.invalid) {
      this.formBuilder.markAsDirty(this.form);
      return;
    }
    console.log(this.form.getRawValue());
  }
}
