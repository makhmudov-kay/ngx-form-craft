/* ANGULAR */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* COMPONENTS */
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { InputComponent } from './components/field-types/input/input.component';
import { InputTypePasswordComponent } from './components/field-types/input-type-password/input-type-password.component';
import { CheckboxTypeComponent } from './components/field-types/checkbox-type/checkbox-type.component';
import { TextareaComponent } from './components/field-types/textarea/textarea.component';
import { SelectComponent } from './components/field-types/select/select.component';
import { RadioTypeComponent } from './components/field-types/radio-type/radio-type.component';
import { NumberTypeComponent } from './components/field-types/number-type/number-type.component';
/* ANTD */
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CustomTemplateDirective } from './shared/directives/custom-template.directive';
import { NgxFormCraftErrorMessagesComponent } from './shared/components/ngx-form-craft-error-messages/ngx-form-craft-error-messages.component';
import { NumberFormatPipe } from './shared/pipes/number-format.pipe';
import { OnlyNumberDirective } from './shared/directives/only-number.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSelectModule,
    CustomTemplateDirective,
  ],
  exports: [FormRendererComponent, NgxFormCraftErrorMessagesComponent],

  declarations: [
    FormRendererComponent,
    NgxFormCraftErrorMessagesComponent,
    InputComponent,
    InputTypePasswordComponent,
    CheckboxTypeComponent,
    RadioTypeComponent,
    NumberTypeComponent,
    SelectComponent,
    TextareaComponent,
    NumberFormatPipe,
    OnlyNumberDirective,
  ],
})
export class NgxFormCraftModule {}
