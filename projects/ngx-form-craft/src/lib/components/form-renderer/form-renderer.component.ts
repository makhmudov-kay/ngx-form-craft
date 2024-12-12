import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  NgxFormCraftSettings,
} from '../../models/ngx-form-craft.model';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css'],
})
export class FormRendererComponent {
  @Input()
  configs: NgxFormCraftSettings = {
    nzLayout: 'vertical',
    formFields: [],
  };
  
  @Input() 
  form: FormGroup = new FormGroup({});
}
