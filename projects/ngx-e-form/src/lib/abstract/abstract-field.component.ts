// projects/ngx-dynamic-forms/src/lib/abstract/abstract-field-component.ts

import { Input, OnInit, Directive } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  FieldConfig,
  FormArrayConfig,
} from '../models/form-builder-config.interface';

@Directive()
export abstract class AbstractFieldComponent implements OnInit {
  @Input() config!: FieldConfig | FormArrayConfig;
  @Input() form!: FormGroup;
  @Input() fieldName!: string;

  // Можно добавить общую логику для всех полей: получение контроля, валидация, ошибки
  get control() {
    return this.form.get(this.fieldName) as FormControl<any>;
  }

  ngOnInit(): void {
    // Здесь можно выполнить логику инициализации общую для всех полей
    if (!this.control) {
      console.warn(`FormControl с именем ${this.fieldName} не найден`);
    }
  }

  get errors() {
    return this.control?.errors || {};
  }
}
