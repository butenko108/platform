import { Auth, Sessions } from "pages";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES } from "./routes";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.auth} index element={<Auth />} />
          <Route path={ROUTES.sessions} element={<Sessions />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
