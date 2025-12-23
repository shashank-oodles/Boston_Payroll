import { createBrowserRouter, Navigate } from "react-router-dom";
import { LandingPage } from "../features/landing";
import {
  Login,
  Signup,
  ForgotPassword,
  OtpPage,
  ResetPassword,
  PasswordUpdated,
  TwoFactorAuth,
  AuthLayout,
} from "../features/auth";
import { Dashboard, SuperAdminLayout } from "../features/super_admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "otp-page", element: <OtpPage /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "password-updated", element: <PasswordUpdated /> },
      { path: "two-factor-auth", element: <TwoFactorAuth /> },
    ],
  },
  {
    path: "/super-admin",
    element: <SuperAdminLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "client-management", element: <Dashboard /> },
      { path: "process-payroll", element: <Dashboard /> },
      { path: "reports-analytics", element: <Dashboard /> },
      { path: "invoice", element: <Dashboard /> },
      { path: "subscription", element: <Dashboard /> },
      { path: "document-management", element: <Dashboard /> },
      { path: "user-management", element: <Dashboard /> },
      { path: "taxes", element: <Dashboard /> },
      { path: "settings", element: <Dashboard /> },
    ],
  }
]);
