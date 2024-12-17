import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessagesService {
  errorKeys(errors: any): string[] {
    return Object.keys(errors);
  }

  getErrorMessage(
    errorMessagesList: { [key: string]: string },
    errorKey: string,
  ): string {
    const messages: { [key: string]: string } = errorMessagesList;
    // Возвращаем кастомное сообщение или ключ ошибки
    return messages[errorKey] || `Ошибка: ${errorKey}`;
  }
}
