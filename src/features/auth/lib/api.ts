import { logger } from "shared/lib/logger";
import type { LoginFormData, LoginResponse } from "../types/auth";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
        message: "Invalid email or password",
      };
    } catch (error) {
      logger.apiError("login", error);
      return {
        success: false,
        message: "Network error occurred",
      };
    }
  },
};
