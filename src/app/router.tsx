import { createBrowserRouter } from "react-router";
import { LandingPage } from "../features/landing";
import { Signup, Login, ForgotPassword, OtpPage, ResetPassword, PasswordUpdated, TwoFactorAuth } from "../features/auth";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login />},
  { path: "/forgot-password", element: <ForgotPassword />},
  { path: "/otp-page", element: <OtpPage />},
  { path: "/reset-password", element: <ResetPassword />},
  { path: "/password-updated", element: <PasswordUpdated />},
  { path: "/two-actor-auth", element: <TwoFactorAuth />},
])