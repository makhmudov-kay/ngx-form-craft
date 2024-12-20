import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  FormBuilderConfig,
  FieldConfig,
  FormArrayConfig,
} from '../models/form-builder-config.interface';

@Injectable({ providedIn: 'root' })
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}

  // Метод для создания FormGroup из конфигурации
  createForm(config: FormBuilderConfig): FormGroup {
    const group: { [key: string]: any } = {};

    Object.keys(config.fields).forEach((fieldName) => {
      const field = config.fields[fieldName];
      // Определяем, является ли поле FormControl или FormArray
      if (this.isFormArrayConfig(field)) {
        // Если это FormArray, то создаем массив FormGroup или FormControl
        group[fieldName] = this.createFormArray(field);
      } else {
        // Иначе создаем FormControl
        group[fieldName] = this.createFormControl(field);
      }
    });

    return this.fb.group(group);
  }

  private createFormControl(field: FieldConfig): FormControl {
    const validators = field.validators || [];
    const asyncValidators = field.asyncValidators || [];
    return this.fb.control('', { validators, asyncValidators });
  }

  private createFormArray(arrayConfig: FormArrayConfig) {
    // Для упрощения представим, что FormArray будет содержать FormGroup,
    // сформированный из переданных полей. В реальности можно сделать гибче.
    const controls = Object.keys(arrayConfig).map((key) => {
      return this.createFormControl(arrayConfig[key]);
    });
    return this.fb.array(controls);
  }

  private isFormArrayConfig(
    field: FieldConfig | FormArrayConfig
  ): field is FormArrayConfig {
    // Простейшая проверка: FormArrayConfig в нашем случае - объект со списком полей
    // Можно доработать проверку
    return (
      (field as FormArrayConfig) &&
      Object.values(field).some(
        (v) => typeof v === 'object' && v !== null && 'type' in v
      )
    );
  }
}
