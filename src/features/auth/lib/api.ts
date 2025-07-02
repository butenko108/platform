import { logger } from "shared/lib/logger";
import type { LoginFormData, LoginResponse } from "../types/auth";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface PasswordRecoveryResponse {
  success: boolean;
  message?: string;
}

export const authAPI = {
  login: async (credentials: LoginFormData): Promise<LoginResponse> => {
    try {
      // Имитация сетевого запроса
      await delay(1500);

      // Простая проверка для демонстрации
      if (
        credentials.email === "admin@example.com" &&
        credentials.password === "Pas_sword123"
      ) {
        return {
          success: true,
          token: "mock-jwt-token",
        };
      }

      return {
        success: false,
        message: "auth.error.invalidCredentials",
      };
    } catch (error) {
      logger.apiError("login", error);
      return {
        success: false,
        message: "auth.error.network",
      };
    }
  },

  sendPasswordRecoveryEmail: async (
    email: string,
  ): Promise<PasswordRecoveryResponse> => {
    try {
      // Имитация сетевого запроса
      await delay(1000);

      if (email !== "admin@example.com") {
        return {
          success: false,
          message: "Email not found",
        };
      }

      return {
        success: true,
      };
    } catch (error) {
      logger.apiError("sendPasswordRecoveryEmail", error);
      return {
        success: false,
        message: "Network error occurred",
      };
    }
  },

  resetPassword: async (data: {
    newPassword: string;
    confirmPassword: string;
  }): Promise<PasswordRecoveryResponse> => {
    try {
      // Имитация сетевого запроса
      await delay(1500);
      console.log(data);

      // Простая проверка для демонстрации (можно настроить по желанию)
      return {
        success: true,
      };
    } catch (error) {
      logger.apiError("resetPassword", error);
      return {
        success: false,
        message: "auth.resetPassword.error.generic",
      };
    }
  },
};
