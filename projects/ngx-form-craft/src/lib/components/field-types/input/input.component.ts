import { Component, Input } from '@angular/core';
import { BaseFieldComponent } from '../../../shared/components/abstract/base-field.component';

@Component({
  selector: 'ngx-input-field',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent extends BaseFieldComponent {
  @Input()
  confirmPasswordControl!: any;
}
