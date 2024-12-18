import { Component, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';

@Component({
  selector: 'ngx-textarea-field',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;
}
