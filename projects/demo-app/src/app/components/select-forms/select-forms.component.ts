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
  selector: 'app-select-forms',
  templateUrl: './select-forms.component.html',
  styleUrls: ['./select-forms.component.css'],
  standalone: true,
  imports: [NgxFormCraftModule, NzButtonModule],
})
export class SelectFormsComponent {
  form!: FormGroup;

  formConfigurations: NgxFromCraftConfig[] = [
    {
      key: 'animals',
      fieldConfig: {
        type: 'select',
        selectOptions: [
          {
            label: 'Dog',
            value: 'dog',
          },
          {
            label: 'Cat',
            value: 'cat',
          },
        ],
      },
      errorMessages: {
        required: 'Select an animal',
      },
      templateOptions: {
        label: 'Animals',
      },
      validators: [Validators.required],
    },
  ];

  formSetting: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: this.formConfigurations,
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
