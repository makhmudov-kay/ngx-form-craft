import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFormCraftSettings,
  NgxFromCraftConfig,
} from 'ngx-form-craft';
import { RadioComponent } from './radio/radio.component';

@Component({
  selector: 'app-radio-and-checkbox-form',
  templateUrl: './radio-and-checkbox-form.component.html',
  styleUrls: ['./radio-and-checkbox-form.component.css'],
  standalone: true,
  imports: [NgxFormCraftModule, NzButtonModule, NzIconModule, RadioComponent],
})
export class RadioAndCheckboxFormComponent {
  form!: FormGroup;

  formConfigurations: NgxFromCraftConfig[] = [
    {
      key: 'animals',
      fieldConfig: {
        type: 'input',
        inputType: 'checkbox',
        checkBoxType: 'single',
        checkBoxOptions: {
          label: 'Animal',
          value: 1,
        },
      },
      errorMessages: {},
      templateOptions: {
        label: 'Animals',
      },
      validators: [Validators.required],
    },
    {
      key: 'jobs',
      fieldConfig: {
        type: 'input',
        inputType: 'checkbox',
        checkBoxType: 'multiple',
        checkBoxOptions: [
          {
            label: 'Job 1',
            value: '1',
          },
          {
            label: 'Job 2',
            value: '2',
          },
          {
            label: 'Job 3',
            value: '3',
          },
        ],
      },
      errorMessages: {},
      templateOptions: {},
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
    console.log(this.form);
    console.log(this.form.getRawValue());
  }
}
