import { AuthPage, SessionsPage } from "pages";
import type React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ROUTES } from "./routes";

const router = createBrowserRouter([
  {
    path: ROUTES.AUTH,
    element: <AuthPage />,
  },
  {
    path: ROUTES.SESSIONS,
    element: <SessionsPage />,
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
