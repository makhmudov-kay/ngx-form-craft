import { Component } from '@angular/core';
import { RadioField } from '../../../models/radio-type.model';
import { BaseFieldComponent } from '../../../shared/components/abstract/base-field.component';

@Component({
  selector: 'radio-type',
  templateUrl: './radio-type.component.html',
  styleUrls: ['./radio-type.component.css'],
})
export class RadioTypeComponent extends BaseFieldComponent {
  get radioTypeField(): RadioField {
    return this.field.fieldConfig as RadioField;
  }
}
