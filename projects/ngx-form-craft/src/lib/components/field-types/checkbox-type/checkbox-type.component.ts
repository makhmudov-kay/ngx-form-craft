import { Component } from '@angular/core';
import { CheckBoxField } from '../../../models/checkbox-type.model';
import { BaseFieldComponent } from '../../../shared/components/abstract/base-field.component';

@Component({
  selector: 'checkbox-type',
  templateUrl: './checkbox-type.component.html',
  styleUrls: ['./checkbox-type.component.css'],
})
export class CheckboxTypeComponent extends BaseFieldComponent {
  get checkboxTypeField(): CheckBoxField {
    return this.field.fieldConfig as CheckBoxField;
  }
}
