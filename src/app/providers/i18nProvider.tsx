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
