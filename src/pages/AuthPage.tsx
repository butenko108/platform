import { Box } from "@mui/material";
import { icons } from "assets";
import clsx from "clsx";
import { LanguageSelector } from "features/auth/components/LanguageSelector";
import { LoginForm } from "features/auth/components/LoginForm";
import type React from "react";
import { COLORS } from "shared/constants/colors";

export const AuthPage: React.FC = () => {
  return (
    <Box className="min-h-screen flex">
      <Box className="w-full lg:w-2/3 flex flex-col p-10">
        <Box className="flex items-center justify-between">
          <img src={icons.logo} alt="netronic logo" />
          <LanguageSelector />
        </Box>

        <Box className="flex-1 flex items-center justify-center">
          <LoginForm />
        </Box>
      </Box>

      <Box
        className={clsx("hidden lg:block lg:w-1/3", "relative overflow-hidden")}
        style={{ backgroundColor: COLORS.primary.background }}
      >
        <img
          src={icons.logo_big}
          alt="netronic big logo"
          className="absolute bottom-0 right-0 size-[90%]"
        />
      </Box>
    </Box>
  );
};
