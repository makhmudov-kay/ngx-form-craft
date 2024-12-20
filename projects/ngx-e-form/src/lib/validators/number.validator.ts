import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (isNaN(+value)) {
      return { isNaN: true };
    }
    return null;
  };
}
