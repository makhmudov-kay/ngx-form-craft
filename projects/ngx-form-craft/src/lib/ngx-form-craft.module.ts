import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule || [],
    NzInputModule || [],
  ],
  exports: [FormRendererComponent],
  declarations: [FormRendererComponent],
})
export class NgxFormCraftModule {
  constructor() {
    if (!NzFormModule || !NzInputModule) {
      throw new Error(
        'ng-zorro-antd не установлен. Убедитесь, что ng-zorro-antd добавлен в зависимости вашего проекта.'
      );
    }
  }
}
