import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFromCraftConfig } from '../../models/ngx-form-craft.model';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css'],
})
export class FormRendererComponent {
  @Input() fields: NgxFromCraftConfig[] = [];
  @Input() form: FormGroup = new FormGroup({});
}
