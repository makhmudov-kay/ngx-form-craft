import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFromCraftConfig,
  NgxFormCraftSettings,
} from 'ngx-form-craft';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxFormCraftModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formSetting: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: [
      {
        key: 'name',
        fieldConfig: {
          type: 'input',
          inputType: 'text',
        },
        errorMessage: '',
        templateOptions: {
          label: 'Name',
          placeholder: 'Enter your name',
          required: false,
        },
      },
      {
        key: 'sur name',
        fieldConfig: {
          type: 'input',
          inputType: 'text',
        },
        errorMessage: '',
        templateOptions: {
          label: 'sur name',
          placeholder: 'Enter your name',
          required: true,
        },
      },
      {
        key: 'ttt',
        fieldConfig: {
          type: 'input',
          inputType: 'text',
        },
        errorMessage: '',
        templateOptions: {
          label: 'Name',
          placeholder: 'Enter your name',
          required: true,
        },
      },
    ],
  };

  form!: FormGroup;

  constructor(private formBuilder: NgxFormCraftService) {
    this.form = this.formBuilder.createForm(this.formSetting.formFields);
  }
}
