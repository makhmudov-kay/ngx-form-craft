import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputFormsComponent } from './components/input-forms/input-forms.component';
import { RadioAndCheckboxFormComponent } from './components/radio-and-checkbox-form/radio-and-checkbox-form.component';
import { NumberFormComponent } from './components/number-form/number-form.component';
import { SelectFormsComponent } from './components/select-forms/select-forms.component';
import { TextareaFormsComponent } from './components/textarea-forms/textarea-forms.component';
import { CustomFormTemplatesComponent } from './components/custom-form-templates/custom-form-templates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputFormsComponent,
    RadioAndCheckboxFormComponent,
    NumberFormComponent,
    SelectFormsComponent,
    TextareaFormsComponent,
    CustomFormTemplatesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
