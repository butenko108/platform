export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export type Language = "en" | "uk";

export interface LanguageOption {
  value: Language;
  label: string;
  flag: string;
}
