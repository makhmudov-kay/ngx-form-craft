import { Component, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';
import { CheckBoxField } from '../../../models/checkbox-type.model';

@Component({
  selector: 'checkbox-type',
  templateUrl: './checkbox-type.component.html',
  styleUrls: ['./checkbox-type.component.css'],
})
export class CheckboxTypeComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;

  get checkboxTypeField(): CheckBoxField {
    return this.field.fieldConfig as CheckBoxField;
  }
}
