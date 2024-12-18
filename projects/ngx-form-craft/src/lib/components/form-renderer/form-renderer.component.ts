import { CustomTemplateDirective } from './../../shared/directives/custom-template.directive';
import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxFormCraftSettings } from '../../models/ngx-form-craft.model';
import { PasswordFieldWithConfirm } from '../../models/password-type.model';
import { Field } from '../../models/common.model';

@Component({
  selector: 'ngx-form-craft-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css'],
})
export class FormRendererComponent {
  @Input()
  configs!: NgxFormCraftSettings;

  @Input()
  form: FormGroup = new FormGroup({});

  confirmPasswordType(field: Field) {
    return field as PasswordFieldWithConfirm;
  }

  @ContentChildren(CustomTemplateDirective)
  customTemplates!: QueryList<CustomTemplateDirective>;

  getCustomTemplate(fieldKey: string) {
    const directive = this.customTemplates.find(
      (templateDirective) => templateDirective.customTemplate === fieldKey
    );

    return directive ? directive.template : null;
  }
}
