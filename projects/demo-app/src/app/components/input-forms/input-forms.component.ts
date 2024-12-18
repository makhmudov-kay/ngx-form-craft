import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import {
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFormCraftSettings,
  NgxFromCraftConfig,
} from 'ngx-form-craft';
import { NzIconLiterals } from '../../configs/nz-icon.literals';
import { usernameAsyncValidator } from '../../configs/custom-validators';
import { UserService } from '../../services/user.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.css'],
  standalone: true,
  imports: [
    NgxFormCraftModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
  ],
})
export class InputFormsComponent {
  constructor(
    private formBuilder: NgxFormCraftService,
    private iconService: NzIconService
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
        suffixIcon: 'user',
        prefixIcon: 'warning',
      },
      templateOptions: {
        label: 'First name (large size input field)',
        placeholder: 'Enter your first name',
        required: true,
        size: 'large',
        fieldClass: ['col-span-1'],
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
      key: 'lastName',
      initialValue: 'My default inititla lastName',
      fieldConfig: {
        type: 'input',
        inputType: 'text',
      },
      templateOptions: {
        label: 'Last name (large size input field)',
        placeholder: 'Enter your last name',
        required: true,
        size: 'large',
        fieldClass: ['col-span-1'],
      },
      errorMessages: {
        required: 'Required field',
      },
      validators: [Validators.required],
    },
    {
      key: 'password',
      fieldConfig: {
        type: 'input',
        inputType: 'password',
        prefixIcon: 'icon:my-lock',
        passwordIcons: ['phone', 'icon:my-lock'],
        confirmPassword: true,
        confirmFieldLabel: 'Confirm password',
        confirmFieldKey: 'password-confirm',
      },
      templateOptions: {
        label: 'Set password with custom suffix-icons',
        placeholder: '',
        required: true,
        size: 'large',
        fieldClass: ['col-span-2'],
      },
      errorMessages: {
        required: 'Required field',
        passwordsMismatch: 'Password does not match',
      },
      validators: [Validators.required],
    },
    {
      key: 'phone',
      fieldConfig: {
        type: 'input',
        inputType: 'text',
        prefixIcon: 'icon:my-lock',
      },
      errorMessages: {
        required: 'Required field',
      },
      templateOptions: {
        label: 'Phone number (small size input field)',
        placeholder: '+998',
        size: 'small',
        fieldClass: ['col-span-2'],
      },
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
        fieldClass: ['col-span-2'],
      },
      validators: [Validators.required, Validators.email],
    },

    {
      key: 'password-two',

      fieldConfig: {
        type: 'input',
        inputType: 'password',
        prefixIcon: 'icon:my-lock',
      },
      templateOptions: {
        label: 'Set password with default suffix icons',
        placeholder: '',
        size: 'large',
      },
      errorMessages: {
        required: 'Required field',
      },
      validators: [Validators.required],
    },
  ];

  formSetting: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: this.formConfigurations,
    formClass: ['grid', 'grid-cols-2', 'gap-4'],
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
