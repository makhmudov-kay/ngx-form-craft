import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/field-types/input/input.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { InputTypePasswordComponent } from './components/field-types/input-type-password/input-type-password.component';
import { CheckboxTypeComponent } from './components/field-types/checkbox-type/checkbox-type.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzCheckboxModule,
  ],
  exports: [FormRendererComponent],

  declarations: [
    FormRendererComponent,
    InputComponent,
    InputTypePasswordComponent,
    CheckboxTypeComponent,
  ],
})
export class NgxFormCraftModule {}
