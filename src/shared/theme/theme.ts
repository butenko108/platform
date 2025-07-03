import type { CSSObject } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { COLORS } from "shared/constants/colors";

// Расширяем типы MUI для новых вариантов типографии
declare module "@mui/material/styles" {
  interface TypographyVariants {
    "headline/large": React.CSSProperties;
    "headline/small": React.CSSProperties;
    "body/large": React.CSSProperties;
    "body/medium": React.CSSProperties;
    "body/small": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    "headline/large"?: React.CSSProperties;
    "headline/small"?: React.CSSProperties;
    "body/large"?: React.CSSProperties;
    "body/medium"?: React.CSSProperties;
    "body/small"?: React.CSSProperties;
  }

  // Добавляем кастомные миксины к теме
  interface Theme {
    customMixins: {
      flexCenter: CSSObject;
      flexColumn: CSSObject;
      flexBetween: CSSObject;
      fullHeight: CSSObject;
      hideOnMobile: CSSObject;
      showOnDesktop: CSSObject;
    };
  }

  interface ThemeOptions {
    customMixins?: {
      flexCenter?: CSSObject;
      flexColumn?: CSSObject;
      flexBetween?: CSSObject;
      fullHeight?: CSSObject;
      hideOnMobile?: CSSObject;
      showOnDesktop?: CSSObject;
    };
  }
}

// Расширяем Typography компонент
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "headline/large": true;
    "headline/small": true;
    "body/large": true;
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
    "headline/small": {
      fontFamily: "Unbounded",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.8px",
    },
    "body/large": {
      fontFamily: "Manrope",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "24px",
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

// Добавляем кастомные миксины после создания темы
theme.customMixins = {
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fullHeight: {
    minHeight: "100vh",
  },
  hideOnMobile: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  showOnDesktop: {
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
};
