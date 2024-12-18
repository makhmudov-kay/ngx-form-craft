import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[customTemplate]',
  standalone: true,
})
export class CustomTemplateDirective {
  @Input() customTemplate!: string;

  constructor(public template: TemplateRef<any>) {}
}
