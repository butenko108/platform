export const logger = {
  error: (message: string, error?: unknown) => {
    console.error(`[ERROR] ${message}`, error);
  },

  apiError: (endpoint: string, error: unknown) => {
    console.error(`[API_ERROR] ${endpoint}:`, error);
  },
};
