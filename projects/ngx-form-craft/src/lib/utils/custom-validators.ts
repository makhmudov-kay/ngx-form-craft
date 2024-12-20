import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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
