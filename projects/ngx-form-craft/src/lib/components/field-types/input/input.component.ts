import { Component, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';

@Component({
  selector: 'ngx-input-field',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;

  passwordVisible = false;
}
