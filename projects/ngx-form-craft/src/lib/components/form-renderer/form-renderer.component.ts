import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxFormCraftSettings } from '../../models/ngx-form-craft.model';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css'],
})
export class FormRendererComponent {
  @Input()
  configs!: NgxFormCraftSettings;

  @Input()
  form: FormGroup = new FormGroup({});
}
