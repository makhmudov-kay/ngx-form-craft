import { Component } from '@angular/core';
import { NumberField } from '../../../models/number-type.modle';
import { BaseFieldComponent } from '../../../shared/components/abstract/base-field.component';

@Component({
  selector: 'number-type',
  templateUrl: './number-type.component.html',
  styleUrls: ['./number-type.component.css'],
})
export class NumberTypeComponent extends BaseFieldComponent {
  get numberTypeField(): NumberField {
    return this.field.fieldConfig as NumberField;
  }

  onNumberInput(event: any): void {
    if (event) {
      const plainValue = event.target.value.replace(/\s+/g, '');
      this.control?.setValue(plainValue, { emitEvent: false });
    }
  }
}
