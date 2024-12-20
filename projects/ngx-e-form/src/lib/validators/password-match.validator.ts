import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Приводим AbstractControl к FormGroup, так как мы ожидаем
    // что валидатор будет использоваться на уровне формы (FormGroup).
    const formGroup = control as FormGroup;

    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMatch: true };
    }

    return null;
  };
}
