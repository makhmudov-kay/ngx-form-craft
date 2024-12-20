import { Component, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';

@Component({
  selector: 'base-component',
  template: '<ng-content></ng-content>',
})
export abstract class BaseFieldComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;
}
