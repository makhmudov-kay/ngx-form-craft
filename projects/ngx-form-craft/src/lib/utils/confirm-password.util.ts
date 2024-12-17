import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NgxFormCraftValidators {
  static confirmMatchPasswordValidator(otherFieldKey: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) {
        return null;
      }
      const otherControl = control.parent.get(otherFieldKey);
      if (!otherControl) {
        return null;
      }
      return control.value === otherControl.value
        ? null
        : { passwordsMismatch: true };
    };
  }
}
