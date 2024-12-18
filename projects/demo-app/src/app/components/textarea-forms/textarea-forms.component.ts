import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFormCraftSettings,
  NgxFromCraftConfig,
} from 'ngx-form-craft';

@Component({
  selector: 'app-textarea-forms',
  templateUrl: './textarea-forms.component.html',
  styleUrls: ['./textarea-forms.component.css'],
  standalone: true,
  imports: [NgxFormCraftModule, NzButtonModule],
})
export class TextareaFormsComponent {
  form!: FormGroup;

  formConfigurations: NgxFromCraftConfig[] = [
    {
      key: 'message',
      fieldConfig: {
        type: 'textarea',
        textAreaConfigs: {
          maxCharacterCount: 100,
          sizeConfig: {
            minRows: 4,
            maxRows: 6,
          },
        },
      },
      errorMessages: {
        required: 'Message is required',
      },
      templateOptions: {
        label: 'Message',
        placeholder: 'Enter your message',
      },
      validators: [Validators.required],
    },
    {
      key: 'description',
      fieldConfig: {
        type: 'textarea',
        textAreaConfigs: {},
      },
      errorMessages: {
        required: 'Description is required',
      },
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter your Description',
      },
      validators: [Validators.required],
    },
    {
      key: 'text',
      fieldConfig: {
        type: 'textarea',
        textAreaConfigs: {
          sizeConfig: {
            minRows: 4,
            maxRows: 6,
          },
        },
      },
      errorMessages: {
        required: 'text is required',
      },
      templateOptions: {
        label: 'text',
        placeholder: 'Enter your text',
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
