import { Component, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';
import { RadioField } from '../../../models/radio-type.model';

@Component({
  selector: 'radio-type',
  templateUrl: './radio-type.component.html',
  styleUrls: ['./radio-type.component.css'],
})
export class RadioTypeComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;

  get radioTypeField(): RadioField {
    return this.field.fieldConfig as RadioField;
  }
}
