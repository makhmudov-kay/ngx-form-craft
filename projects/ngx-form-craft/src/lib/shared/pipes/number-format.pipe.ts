import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxNumberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    console.log(value);
    
    if (!value) return '';
    const plainValue = value.toString().replace(/\s+/g, '');
    return plainValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
