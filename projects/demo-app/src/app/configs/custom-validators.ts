import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { catchError, debounceTime, map, Observable, of, switchMap } from 'rxjs';

export function usernameAsyncValidator(
  userService: UserService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null); // Пропускаем проверку, если поле пустое
    }

    return of(control.value).pipe(
      debounceTime(300), // Задержка перед проверкой
      switchMap((username) =>
        userService.checkUsernameAvailability(username).pipe(
          map(
            (isAvailable: boolean) =>
              isAvailable ? null : { usernameTaken: true } // Если занято, вернуть ошибку
          ),
          catchError(() => of({ usernameError: true })) // В случае ошибки
        )
      )
    );
  };
}
