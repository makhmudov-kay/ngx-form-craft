import { Component } from '@angular/core';
import { BaseFieldComponent } from '../../../shared/components/abstract/base-field.component';

@Component({
  selector: 'ngx-textarea-field',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent extends BaseFieldComponent {}
