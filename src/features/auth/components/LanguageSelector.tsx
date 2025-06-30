import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import clsx from "clsx";
import type React from "react";
import { useTranslation } from "react-i18next";
import type { Language, LanguageOption } from "../types/auth";

const languageOptions: LanguageOption[] = [
  {
    value: "en",
    label: "English",
    flag: "🇺🇸",
  },
  {
    value: "uk",
    label: "Українська",
    flag: "🇺🇦",
  },
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: Language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  const currentLanguage =
    languageOptions.find((option) => option.value === i18n.language) ||
    languageOptions[0];

  return (
    <FormControl variant="outlined" size="small">
      <Select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value as Language)}
        displayEmpty
        IconComponent={KeyboardArrowDown}
        className={clsx(
          "h-14 min-w-[140px]",
          "border border-[#E4E1E6] rounded-xl",
          "hover:border-gray-400",
        )}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-select": {
            padding: "18px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          },
        }}
        renderValue={() => (
          <Box className="flex items-center gap-2">
            <span className="text-xl">{currentLanguage.flag}</span>
            <Typography variant="body2" className="text-gray-700">
              {currentLanguage.label}
            </Typography>
          </Box>
        )}
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Box className="flex items-center gap-2">
              <span className="text-xl">{option.flag}</span>
              <Typography variant="body2">{option.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
