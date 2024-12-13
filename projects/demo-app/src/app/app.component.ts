import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import {
  NgxFormCraftModule,
  NgxFormCraftService,
  NgxFromCraftConfig,
  NgxFormCraftSettings,
} from 'ngx-form-craft';
import { NzIconLiterals } from './configs/nz-icon.literals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxFormCraftModule, NzButtonModule, NzIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  formConfigurations: NgxFromCraftConfig[] = [
    {
      key: 'firstName',
      size: 'large',
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
      },
      errorMessage: 'Required field',
      validators: [Validators.required],
    },
    {
      key: 'lastName',
      size: 'large',
      fieldConfig: {
        type: 'input',
        inputType: 'text',
      },
      templateOptions: {
        label: 'Last name (large size input field)',
        placeholder: 'Enter your last name',
        required: true,
      },
      errorMessage: 'Required field',
      validators: [Validators.required],
    },
    {
      key: 'phone',
      size: 'small',
      fieldConfig: {
        type: 'input',
        inputType: 'text',
        prefixIcon: 'icon:my-lock',
      },
      errorMessage: '',
      templateOptions: {
        label: 'Phone number (small size input field)',
        placeholder: '+998',
      },
    },
    {
      key: 'email',
      fieldConfig: {
        type: 'input',
        inputType: 'email',
        prefixIcon: 'icon:my-lock',
      },
      errorMessage: '',
      templateOptions: {
        label: 'E-mail (default size input field)',
        placeholder: 'example@mail',
      },
    },
    {
      key: 'password',
      size: 'large',
      fieldConfig: {
        type: 'input',
        inputType: 'password',
        prefixIcon: 'icon:my-lock',
        passwordIcons: ['phone', 'icon:my-lock'],
      },
      templateOptions: {
        label: 'Set password with custom suffix-icons',
        placeholder: '',
      },
      errorMessage: 'Required field',
      validators: [Validators.required],
    },
    {
      key: 'password-two',
      size: 'large',
      fieldConfig: {
        type: 'input',
        inputType: 'password',
        prefixIcon: 'icon:my-lock',
      },
      templateOptions: {
        label: 'Set password with default suffix icons',
        placeholder: '',
      },
      errorMessage: 'Required field',
      validators: [Validators.required],
    },
  ];

  formSetting: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: this.formConfigurations,
  };

  form!: FormGroup;

  constructor(
    private formBuilder: NgxFormCraftService,
    private cd: ChangeDetectorRef,
    private iconService: NzIconService
  ) {
    this.form = this.formBuilder.createForm(this.formConfigurations);
    this.iconService.addIconLiteral('icon:my-lock', NzIconLiterals.icons.lock);
    this.iconService.addIconLiteral(
      'icon:my-phone',
      NzIconLiterals.icons.phone
    );
  }

  submit() {
    if (this.form.invalid) {
      this.formBuilder.markAsDirty(this.form);
      this.cd.markForCheck();
      return;
    }
    console.log(this.form.getRawValue());
  }
}
