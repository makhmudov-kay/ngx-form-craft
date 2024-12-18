import { Component, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';
import { NumberField } from '../../../models/number-type.modle';

@Component({
  selector: 'number-type',
  templateUrl: './number-type.component.html',
  styleUrls: ['./number-type.component.css'],
})
export class NumberTypeComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;

  get numberTypeField(): NumberField {
    return this.field.fieldConfig as NumberField;
  }
}
