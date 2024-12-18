import { Component, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';

@Component({
  selector: 'ngx-select-field',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;
}
