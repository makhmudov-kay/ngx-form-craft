import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Проверяем, является ли значение числом
    if (value === null || value === undefined || value === '') {
      return null; // Пустое значение допустимо
    }

    return isNaN(value) ? { isNaN: true } : null; // Ошибка, если значение NaN
  };
}
