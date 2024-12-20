import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function isNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const cleanedValue =
      typeof value === 'string' ? value.replace(/\s+/g, '') : value;
    return isNaN(Number(cleanedValue)) ? { isNaN: true } : null;
  };
}

export function checkUniqNameValidator() {}
export function passwordMatchValidator() {}
export function numberValidator() {}

class AnyComponentName {
  apiService!: any;

  formBuilder = {
    layout: 'vertical',
    formClass: ['form'],
    formStyles: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
    },
    fieldSize: 'large',
    fields: {
      firstName: {
        type: 'input',
        inputType: 'text',
        label: 'First name',
        placeholder: 'Enter your first name',
        required: true,
        fieldClass: ['col-span-1'],
        fieldStyle: { width: '100%', borderRadius: '5px' },
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        asyncValidators: [checkUniqNameValidator()],
        errorMesages: {
          required: 'First name is required',
          minlength: 'First name must be at least 3 characters',
          maxlength: 'First name must be at most 20 characters',
          uniqName: 'First name must be unique',
        },
        events: {
          onFocus: () => console.log('Field firstName focused'),
          onBlur: () => console.log('Field firstName blurred'),
          onChange: (value: any) =>
            console.log('Field firstName changed:', value),
        },
      },
      lastName: {
        type: 'input',
        inputType: 'text',
        label: 'Last name',
        placeholder: 'Enter your last name',
        required: true,
        fieldClass: ['col-span-1'],
        fieldStyle: { width: '100%', borderRadius: '5px' },
        validators: [Validators.required],
        errorMesages: {
          required: 'First name is required',
        },
        dependsOn: 'firstName',
        dependencyCondition: (value: any) => value !== 'John',
        events: {
          onChange: (value: any) =>
            console.log('Field lastName changed:', value),
        },
      },
      sex: {
        type: 'radio',
        label: 'Sex',
        placeholder: 'Select your sex',
        fieldClass: ['col-span-1'],
        fieldStyle: { fontSize: '12px' },
        validators: [Validators.required],
        dataSource: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
        errorMesages: {
          required: 'Sex is required',
        },
        events: {
          onChange: (value: any) =>
            console.log('Field lastName changed:', value),
        },
      },
      // FormArray
      adresses: {
        country: {
          type: 'select',
          label: 'Country',
          placeholder: 'Select Country',
          fieldClass: ['col-span-1'],
          fieldStyle: { fontSize: '12px' },
          validators: [Validators.required],
          dataSource: this.apiService.getCountries(),
          errorMesages: {
            required: 'Country is required',
          },
          events: {
            onChange: (value: any) =>
              console.log('Field lastName changed:', value),
          },
        },
        city: {
          type: 'input',
          inputType: 'text',
          label: 'City',
          placeholder: 'Enter your city',
          // Если указать размер то будет использовать его, если не указывать то всем будет устанавливать из поля fieldSize
          size: 'default',
          fieldStyle: { fontSize: '12px' },
        },
      },
      email: {
        type: 'input',
        inputType: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true,
        validators: [Validators.required, Validators.email],
        errorMesages: {
          required: 'Email is required',
          email: 'Email is invalid',
        },
      },
      age: {
        type: 'input',
        inputType: 'number',
        label: 'Age',
        placeholder: 'Enter your age',
        required: true,
        validators: [Validators.required, numberValidator()],
        errorMesages: {
          required: 'Age is required',
          isNaN: 'Age must be a number',
        },
      },
      avatar: {
        type: 'input',
        inputType: 'file',
        label: 'Avatar',
        placeholder: 'Upload your avatar',
        required: true,
        validators: [Validators.required],
        errorMesages: {
          required: 'Avatar is required',
        },
        events: {
          onChange: (value: any) => console.log('Field avatar changed:', value),
        },
      },
      password: {
        type: 'input',
        inputType: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
        confirmPassword: true, // если добавлен то появляется поле подтверждения пароля, которое сравнивается с паролем. По умолчанию false
        validators: [
          Validators.required,
          Validators.minLength(6),
          passwordMatchValidator(), // custom validator
        ],
        errorMesages: {
          required: 'Password is required',
          minlength: 'Password must be at least 6 characters',
          passwordMatch: 'Passwords do not match',
        },
      },
      about: {
        type: 'textarea',
        label: 'About',
        placeholder: 'Enter your about',
        required: true,
        fieldClass: ['col-span-1'],
        minRow: 4,
        maxRow: 6,
        charactersCount: 100,
      },
      agreeWithTerms: {
        type: 'checkbox',
        label: 'Agree with terms',
        required: true,
        fieldClass: ['col-span-1'],
        errorMesages: {
          required: 'Agree with terms is required',
        },
      },
      extraTerm: {
        type: 'checkbox',
        label: 'Extra term',
        required: true,
        fieldClass: ['col-span-1'],
        errorMesages: {
          required: 'Agree with terms is required',
        },
        visibilityCondition: (form: FormGroup) =>
          form.get('agreeWithTerms')?.value,
        enableCondition: (form: FormGroup) => form.get('agreeWithTerms')?.value,
      },
    },
  };
}
