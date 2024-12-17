import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputFormsComponent } from './components/input-forms/input-forms.component';
import { RadioAndCheckboxFormComponent } from './components/radio-and-checkbox-form/radio-and-checkbox-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputFormsComponent, RadioAndCheckboxFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
