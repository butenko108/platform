import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import { LanguageSelector } from "features/auth/components/LanguageSelector";
import { LoginForm } from "features/auth/components/LoginForm";
import type React from "react";
import { COLORS } from "shared/constants/colors";

export const AuthPage: React.FC = () => {
  return (
    <Box className="min-h-screen flex">
      {/* Левая часть */}
      <Box className="flex-1 lg:max-w-[900px] flex flex-col p-10">
        {/* Header */}
        <Box className="h-14 flex items-center justify-between mb-8">
          {/* Логотип */}
          <Box className="flex items-center">
            <Box className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <Typography variant="h6" className="text-white font-bold text-sm">
                N
              </Typography>
            </Box>
            <Typography
              variant="h6"
              className="ml-2 font-semibold text-gray-800"
            >
              NETRONIC
            </Typography>
          </Box>

          {/* Языковой селектор */}
          <LanguageSelector />
        </Box>

        {/* Основной контент - центрирование формы */}
        <Box className="flex-1 flex items-center justify-center">
          <LoginForm />
        </Box>
      </Box>

      {/* Правая часть - только на desktop */}
      <Box
        className={clsx(
          "hidden lg:block lg:max-w-[540px] flex-1",
          "relative overflow-hidden",
        )}
        style={{ backgroundColor: COLORS.primary.background }}
      >
        Example
      </Box>
    </Box>
  );
};
