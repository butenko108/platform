import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import type React from "react";
import { useTranslation } from "react-i18next";
import { COLORS } from "shared/constants/colors";
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
        sx={{
          height: "56px",
          minWidth: "200px",
          borderRadius: "12px",
          border: `1px solid ${COLORS.border.default}`,
          "&:hover": {
            borderColor: COLORS.border.hover,
          },
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <span>{currentLanguage.flag}</span>
            <Typography
              variant="body/medium"
              sx={{
                color: COLORS.text.secondary,
              }}
            >
              {currentLanguage.label}
            </Typography>
          </Box>
        )}
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span style={{ fontSize: "20px" }}>{option.flag}</span>
              <Typography
                variant="body/medium"
                sx={{
                  color: COLORS.text.secondary,
                }}
              >
                {option.label}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};