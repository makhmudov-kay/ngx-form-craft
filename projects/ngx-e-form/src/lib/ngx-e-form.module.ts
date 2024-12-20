import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { CheckboxFieldComponent } from './components/fields/checkbox-field/checkbox-field.component';
import { FileFieldComponent } from './components/fields/file-field/file-field.component';
import { InputFieldComponent } from './components/fields/input-field/input-field.component';
import { PasswordFieldComponent } from './components/fields/password-field/password-field.component';
import { RadioFieldComponent } from './components/fields/radio-field/radio-field.component';
import { SelectFieldComponent } from './components/fields/select-field/select-field.component';
import { TextareaFieldComponent } from './components/fields/textarea-field/textarea-field.component';
import { FormArrayComponent } from './components/form-array/form-array.component';

// Импортируем все наши компоненты

// Импортируем директивы и пайпы (если они есть)

// Сервисы автоматически будут доступны через инжектор, если они имеют providedIn: 'root',
// в противном случае вы можете добавить их в providers.

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // при необходимости можно импортировать другие модули, например, UI-kit модуль
  ],
  declarations: [
    FormContainerComponent,
    InputFieldComponent,
    SelectFieldComponent,
    RadioFieldComponent,
    CheckboxFieldComponent,
    TextareaFieldComponent,
    FileFieldComponent,
    PasswordFieldComponent,
    FormArrayComponent,
    // VisibilityDirective,
    // EnableConditionDirective,
    // ErrorMessagePipe,
  ],
  exports: [
    // Экспортируем те компоненты, которые пользователь библиотеки будет использовать
    // Обычно это главный контейнер и компоненты полей, или вообще все, чтобы не ограничивать пользователя
    FormContainerComponent,
    InputFieldComponent,
    SelectFieldComponent,
    RadioFieldComponent,
    CheckboxFieldComponent,
    TextareaFieldComponent,
    FileFieldComponent,
    PasswordFieldComponent,
    FormArrayComponent,
    // VisibilityDirective,
    // EnableConditionDirective,
    // ErrorMessagePipe,
  ],
})
export class NgxEFormModule {}
