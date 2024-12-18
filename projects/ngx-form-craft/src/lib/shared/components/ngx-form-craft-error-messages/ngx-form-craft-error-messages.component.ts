import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-form-craft-error-messages',
  template: `
    <ng-container *ngIf="control?.errors as errors">
      <ng-container *ngFor="let errorKey of errorKeys(errors)">
        {{ getErrorMessage(errorKey) }}
      </ng-container>
    </ng-container>
  `,
})
export class NgxFormCraftErrorMessagesComponent {
  @Input() control: any; // FormControl or AbstractControl
  @Input() errorMessages: { [key: string]: string } = {};

  errorKeys(errors: any): string[] {
    return Object.keys(errors);
  }

  getErrorMessage(errorKey: string): string {
    return this.errorMessages[errorKey] || `Unknown error: ${errorKey}`;
  }
}
