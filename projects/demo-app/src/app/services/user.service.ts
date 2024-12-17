import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  checkUsernameAvailability(username: string): Observable<boolean> {
    // Пример запроса на сервер для проверки доступности имени
    // return this.http.get<boolean>(
    //   `https://api.example.com/users/check?username=${username}`
    // );
    // Для демонстрации можно использовать задержку
    return of(username !== 'Adam').pipe(delay(1000));
  }
}
