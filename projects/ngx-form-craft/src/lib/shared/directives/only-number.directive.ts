import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxOnlyNumber]',
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = input.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*?)\./g, '$1'); // Убираем вторую точку; // Убираем все символы, кроме цифр
    if (input.value !== sanitizedValue) {
      this.renderer.setProperty(input, 'value', sanitizedValue); // Устанавливаем очищенное значение
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Разрешаем: цифры, backspace, delete, стрелки, tab
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ];
    const isNumberKey = /^[0-9.]$/.test(event.key); // Проверяем, является ли символ числом

    if (!isNumberKey && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text');
    if (pastedData && !/^\d+$/.test(pastedData)) {
      event.preventDefault(); // Запрещаем вставку нечисловых данных
    }
  }
}
