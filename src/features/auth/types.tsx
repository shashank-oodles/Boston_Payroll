export type LoginFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type SignupFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  employees: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type ResetFormValues = {
  password: string,
  confirm_password: string
}