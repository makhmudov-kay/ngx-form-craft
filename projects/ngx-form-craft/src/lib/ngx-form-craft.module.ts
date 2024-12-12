import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/field-types/input/input.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
  ],
  exports: [FormRendererComponent],
  declarations: [FormRendererComponent, InputComponent],
})
export class NgxFormCraftModule {}
