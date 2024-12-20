import { Component, Input, OnInit } from '@angular/core';
import { FieldConfig, FormArrayConfig, FormBuilderConfig } from '../../models/form-builder-config.interface';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css'],
})
export class FormContainerComponent implements OnInit {
  @Input() config!: FormBuilderConfig;
  form!: FormGroup;

  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit(): void {
    this.form = this.formBuilderService.createForm(this.config);
  }

  // Метод для получения списка полей, чтобы вывести их динамически
  get fieldNames(): string[] {
    return Object.keys(this.config.fields);
  }

  // Проверка типа поля для дальнейшего рендера
  getFieldType(fieldName: string) {
    const field = this.config.fields[fieldName];
    if (this.isFormArrayConfig(field)) {
      return 'formArray';
    }
    return (field as any).type;
  }

  isFieldConfig(field: FieldConfig | FormArrayConfig): field is FieldConfig {
    return 'type' in field; // проверяем наличие свойства 'type', уникального для FieldConfig
  }

  private isFormArrayConfig(field: any): boolean {
    // Простая проверка для определения FormArray
    return field && typeof field === 'object' && !('type' in field);
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Value:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
