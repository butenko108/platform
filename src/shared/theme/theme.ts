import { createTheme } from "@mui/material/styles";
import { COLORS } from "shared/constants/colors";

// Расширяем типы MUI для новых вариантов типографии
declare module "@mui/material/styles" {
  interface TypographyVariants {
    "headline/large": React.CSSProperties;
    "body/medium": React.CSSProperties;
    "body/small": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    "headline/large"?: React.CSSProperties;
    "body/medium"?: React.CSSProperties;
    "body/small"?: React.CSSProperties;
  }
}

// Расширяем Typography компонент
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "headline/large": true;
    "body/medium": true;
    "body/small": true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Manrope, Unbounded, sans-serif",

    // Кастомные варианты типографии
    "headline/large": {
      fontFamily: "Unbounded",
      fontSize: "28px",
      fontWeight: 400,
      lineHeight: "40px",
      letterSpacing: "1.12px",
    },
    "body/medium": {
      fontFamily: "Manrope",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    "body/small": {
      fontFamily: "Manrope",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
    },
  },

  components: {
    // Стили для Select
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderRadius: "12px",
          },
        },
      },
    },

    // Стили для TextField
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            "& fieldset": {
              borderColor: COLORS.border.default,
              borderRadius: "12px",
            },
            "&:hover fieldset": {
              borderColor: COLORS.border.hover,
            },
            "&.Mui-focused fieldset": {
              borderColor: COLORS.border.focused,
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "Manrope",
            fontSize: "16px",
            fontWeight: 500,
            color: COLORS.text.secondary,
            "&.Mui-focused": {
              color: COLORS.text.blue,
            },
          },
        },
      },
    },

    // Стили для Button
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontFamily: "Manrope",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16px",
        },
      },
    },

    // Стили для FormControl
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: COLORS.primary.main,
    },
    text: {
      primary: COLORS.text.primary,
      secondary: COLORS.text.secondary,
    },
    background: {
      default: COLORS.background.default,
      paper: COLORS.background.paper,
    },
    error: {
      main: COLORS.status.error,
    },
  },
});
