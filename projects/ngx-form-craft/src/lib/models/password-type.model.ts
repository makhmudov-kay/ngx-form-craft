import { InputFieldBase } from './input-type.model';

export interface PasswordFieldBase extends InputFieldBase {
  inputType: 'password';
}

// Если confirmPassword === true
export interface PasswordFieldWithConfirm extends PasswordFieldBase {
  confirmPassword: boolean;
  confirmFieldKey: string; // Обязательное поле
  confirmFieldLabel: string;
}

// Если confirmPassword === false или не указано
export interface PasswordFieldWithoutConfirm extends PasswordFieldBase {
  confirmPassword: boolean;
  confirmFieldKey?: never; // Поле запрещено
}

export type PasswordField =
  | PasswordFieldWithConfirm
  | PasswordFieldWithoutConfirm;
