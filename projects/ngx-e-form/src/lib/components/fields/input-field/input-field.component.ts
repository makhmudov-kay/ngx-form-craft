import { Component, OnInit } from '@angular/core';
import { AbstractFieldComponent } from '../../../abstract/abstract-field.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent extends AbstractFieldComponent {
  // Здесь можно добавить логику, специфичную для input
}
