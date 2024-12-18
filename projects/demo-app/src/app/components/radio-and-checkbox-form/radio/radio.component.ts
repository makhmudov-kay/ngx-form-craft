import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFormCraftSettings,
  NgxFromCraftConfig,
} from 'ngx-form-craft';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  standalone: true,
  imports: [NgxFormCraftModule, NzButtonModule],
})
export class RadioComponent {
  formRadio!: FormGroup;

  /* RADIO FORM */
  formConfigurationsRadio: NgxFromCraftConfig[] = [
    {
      key: 'cars',
      fieldConfig: {
        type: 'input',
        inputType: 'radio',
        radioOptions: [
          {
            label: 'Car 1',
            value: '1',
          },
          {
            label: 'Car 2',
            value: '2',
          },
          {
            label: 'Car 3',
            value: '3',
          },
        ],
      },
      errorMessages: {},
      templateOptions: {},
    },
  ];

  //RADIO FORM
  formSettingRadio: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: this.formConfigurationsRadio,
  };

  constructor(private formBuilder: NgxFormCraftService) {
    this.formRadio = this.formBuilder.createForm(this.formConfigurationsRadio);
  }

  submitRadio() {
    // if (this.form.invalid) {
    //   this.formBuilder.markAsDirty(this.form);
    //   return;
    // }
    console.log(this.formRadio.getRawValue());
  }
}
