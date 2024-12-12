import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxFormCraftModule, NgxFormCraftService, NgxFromCraftConfig } from 'ngx-form-craft';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxFormCraftModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fields: NgxFromCraftConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: false,
      },
    },
    {
      key: 'sur name',
      type: 'input',
      templateOptions: {
        label: 'sur name',
        placeholder: 'Enter your name',
        required: true,
      },
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
      },
    },
  ];
  form: FormGroup;

  constructor(private formBuilder: NgxFormCraftService) {
    this.form = this.formBuilder.createForm(this.fields);
  }
}
