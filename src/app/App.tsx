import { StrictMode } from "react";
import { I18nProvider, ThemeProvider } from "./providers";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <StrictMode>
      <I18nProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </I18nProvider>
    </StrictMode>
  );
}

export default App;
