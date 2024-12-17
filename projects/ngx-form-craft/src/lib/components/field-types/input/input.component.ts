import { Component, inject, Input } from '@angular/core';
import { NgxFromCraftConfig } from '../../../models/ngx-form-craft.model';
import { ErrorMessagesService } from '../../../services/error-messages.service';

@Component({
  selector: 'ngx-input-field',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input()
  field!: NgxFromCraftConfig;

  @Input()
  control!: any;

  @Input()
  confirmPasswordControl!: any;

  errorMessage = inject(ErrorMessagesService);
}
