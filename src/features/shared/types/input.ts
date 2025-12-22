import type { InputHTMLAttributes, ReactNode  } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: ReactNode;
}

export type OtpFormValues = {
  otp: string[];
};