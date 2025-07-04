import i18n from "i18next";
import type React from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

// Переводы
const resources = {
  en: {
    translation: {
      auth: {
        welcome: "Welcome back!",
        subtitle: "Log in to get started",
        email: "Email",
        emailPlaceholder: "Enter your email",
        password: "Password",
        passwordPlaceholder: "Enter your password",
        rememberMe: "Remember me",
        signIn: "Log in",
        signingIn: "Signing in...",
        forgotPassword: "Forgot your password?",
        error: {
          generic: "An error occurred. Please try again.",
          network: "Network error. Please check your connection.",
          invalidCredentials: "Invalid email or password",
        },
        validation: {
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email address",
          passwordMin: "Password must be at least 8 characters",
          passwordMax: "Password must be at most 100 characters",
          passwordUppercase:
            "Password must contain at least one uppercase letter",
          passwordLowercase:
            "Password must contain at least one lowercase letter",
          passwordNumber: "Password must contain at least one number",
          passwordSpecial:
            "Password must contain at least one special character",
          passwordNoSpaces: "Password must not contain spaces",
          passwordConfirmRequired: "Password confirmation is required",
          passwordsDoNotMatch: "Passwords do not match",
        },
        recovery: {
          title: "Password recovery",
          instructions:
            "Enter the email to which your account is linked. We will send an email with a link to change your password.",
          success: "Password recovery email has been sent successfully!",
          error: {
            generic:
              "Failed to send password recovery email. Please try again.",
          },
          cancel: "Cancel",
          confirm: "Confirm",
          sending: "Sending...",
        },
        resetPassword: {
          title: "Set a password",
          subtitle: "for your account",
          newPassword: "New password",
          newPasswordPlaceholder: "Enter your new password",
          confirmPassword: "Confirm new password",
          confirmPasswordPlaceholder: "Confirm your new password",
          updatePassword: "Update password",
          updating: "Updating...",
          success: "Password has been successfully updated!",
          error: {
            generic: "Failed to update password. Please try again.",
            invalidToken: "Invalid or expired reset link",
          },
        },
      },
    },
  },
  uk: {
    translation: {
      auth: {
        welcome: "З поверненням!",
        subtitle: "Увійдіть, щоб почати",
        email: "Email",
        emailPlaceholder: "Введіть ваш email",
        password: "Пароль",
        passwordPlaceholder: "Введіть ваш пароль",
        rememberMe: "Запам'ятати мене",
        signIn: "Увійти",
        signingIn: "Вхід...",
        forgotPassword: "Забули пароль?",
        error: {
          generic: "Виникла помилка. Спробуйте ще раз.",
          network: "Помилка мережі. Перевірте підключення.",
          invalidCredentials: "Невірний email або пароль",
        },
        validation: {
          emailRequired: "Email є обов'язковим",
          emailInvalid: "Введіть дійсну email адресу",
          passwordMin: "Пароль має містити щонайменше 8 символів",
          passwordMax: "Пароль має містити не більше 100 символів",
          passwordUppercase: "Пароль має містити хоча б одну велику літеру",
          passwordLowercase: "Пароль має містити хоча б одну малу літеру",
          passwordNumber: "Пароль має містити хоча б одну цифру",
          passwordSpecial: "Пароль має містити хоча б один спеціальний символ",
          passwordNoSpaces: "Пароль не повинен містити пробілів",
          passwordConfirmRequired: "Підтвердження пароля є обов'язковим",
          passwordsDoNotMatch: "Паролі не співпадають",
        },
        recovery: {
          title: "Відновлення пароля",
          instructions:
            "Введіть email, до якого прив'язаний ваш аккаунт. Ми надішлемо лист з посиланням для зміни пароля.",
          success: "Лист для відновлення пароля успішно надіслано!",
          error: {
            generic:
              "Не вдалося надіслати лист для відновлення пароля. Спробуйте ще раз.",
          },
          cancel: "Скасувати",
          confirm: "Підтвердити",
          sending: "Надсилання...",
        },
        resetPassword: {
          title: "Встановіть пароль",
          subtitle: "для вашого акаунта",
          newPassword: "Новий пароль",
          newPasswordPlaceholder: "Введіть ваш новий пароль",
          confirmPassword: "Підтвердіть новий пароль",
          confirmPasswordPlaceholder: "Підтвердіть ваш новий пароль",
          updatePassword: "Оновити пароль",
          updating: "Оновлення...",
          success: "Пароль успішно оновлено!",
          error: {
            generic: "Не вдалося оновити пароль. Спробуйте ще раз.",
            invalidToken: "Недійсне або прострочене посилання для скидання",
          },
        },
      },
    },
  },
};

// Инициализация i18n
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("selectedLanguage") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
