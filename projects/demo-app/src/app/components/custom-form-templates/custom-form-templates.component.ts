import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import {
  CustomTemplateDirective,
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFormCraftSettings,
  NgxFromCraftConfig,
} from 'ngx-form-craft';
import { NzIconLiterals } from '../../configs/nz-icon.literals';
import { UserService } from '../../services/user.service';
import { usernameAsyncValidator } from '../../configs/custom-validators';

@Component({
  selector: 'app-custom-form-templates',
  templateUrl: './custom-form-templates.component.html',
  styleUrls: ['./custom-form-templates.component.css'],
  standalone: true,
  imports: [
    NgxFormCraftModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    CustomTemplateDirective,
  ],
})
export class CustomFormTemplatesComponent {
  constructor(
    private formBuilder: NgxFormCraftService,
    private iconService: NzIconService // private userService: UserService
  ) {
    this.inputForm = this.formBuilder.createForm(this.formConfigurations);
    this.iconService.addIconLiteral('icon:my-lock', NzIconLiterals.icons.lock);
    this.iconService.addIconLiteral(
      'icon:my-phone',
      NzIconLiterals.icons.phone
    );
  }

  userService = inject(UserService);

  formConfigurations: NgxFromCraftConfig[] = [
    {
      key: 'firstName',
      fieldConfig: {
        type: 'input',
        inputType: 'text',
      },
      templateOptions: {
        label: 'First name (set Adam for asyncValidator)',
      },
      errorMessages: {
        required: 'Required field',
        usernameTaken: 'Username is already taken',
        usernameError: 'Something went wrong',
        minlength: 'Minimum length is 3',
      },
      validators: [Validators.required, Validators.minLength(3)],
      asyncValidators: [usernameAsyncValidator(this.userService)],
    },
    {
      key: 'email',
      fieldConfig: {
        type: 'input',
        inputType: 'email',
        prefixIcon: 'icon:my-lock',
      },
      errorMessages: {
        required: 'Required field',
        email: 'Поле должно быть валидным e-mail',
      },
      templateOptions: {
        label: 'E-mail (default size input field)',
        placeholder: 'example@mail',
      },
      validators: [Validators.required, Validators.email],
    },
  ];

  formSetting: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: this.formConfigurations,
  };

  inputForm!: FormGroup;

  submit() {
    if (this.inputForm.invalid) {
      this.formBuilder.markAsDirty(this.inputForm);
      return;
    }
    console.log(this.inputForm);
    console.log(this.inputForm.getRawValue());
  }
}
