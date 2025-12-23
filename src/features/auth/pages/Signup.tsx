import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { Input } from "../../shared";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";

type SignupFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  employees: string;
  phone: string;
};

export function Signup() {
  const [step, setStep] = useState<1 | 2>(1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      employees: "",
      phone: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (data: SignupFormValues) => {
    console.log("Signup data:", data);
    // signup API
  };

  const goNext = () => setStep(2);
  const goBack = () => setStep(1);

  return (
      <div className="w-full max-w-md bg-white rounded-none sm:rounded-xl">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Sign Up
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Get unlimited access and don’t pay a cent until you run payroll.
        </p>

        <div className="border border-[#E2E8F0] sm:rounded-lg shadow-sm sm:shadow-md p-4 sm:p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* STEP 1 (Mobile) / ALWAYS VISIBLE (Desktop) */}
            <div className={step === 1 ? "flex flex-col gap-3" : "hidden sm:block"}>

              {/* Name */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  label="First Name"
                  placeholder="e.g John"
                  {...register("firstName", { required: "Required" })}
                  error={errors.firstName?.message}
                />
                <Input
                  label="Last Name"
                  placeholder="e.g Doe"
                  {...register("lastName", { required: "Required" })}
                  error={errors.lastName?.message}
                />
              </div>

              <Input
                label="Work Email"
                placeholder="e.g johndoe@bostonpayroll.com"
                {...register("email", { required: "Email is required" })}
                error={errors.email?.message}
              />

              {/* Password */}
              <Input
                type={passwordVisible ? "text" : "password"}
                label="Create Password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Min 8 characters" },
                })}
                error={errors.password?.message}
                rightElement={
                  <button type="button" onClick={() => setPasswordVisible(v => !v)}>
                    {passwordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
                  </button>
                }
              />

              <Input
                type={confirmPasswordVisible ? "text" : "password"}
                label="Confirm Password"
                placeholder="Re-enter password"
                {...register("confirmPassword", {
                  validate: v => v === password || "Passwords do not match",
                })}
                error={errors.confirmPassword?.message}
                rightElement={
                  <button type="button" onClick={() => setConfirmPasswordVisible(v => !v)}>
                    {confirmPasswordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
                  </button>
                }
              />

              {/* Mobile Next Button */}
              <button
                type="button"
                onClick={goNext}
                className="block sm:hidden w-full bg-orange-500 text-white py-3 rounded-lg font-medium mt-4"
              >
                Next
              </button>
            </div>

            {/* STEP 2 (Mobile) / ALWAYS VISIBLE (Desktop) */}
            <div className={step === 2 ? "flex flex-col gap-3" : "hidden sm:block"}>

              {/* Back (mobile) */}
              <button
                type="button"
                onClick={goBack}
                className="block sm:hidden text-sm text-gray-600 mb-3"
              >
                <FaArrowLeft className="text-gray-900 cursor-pointer" />
              </button>

              <Input
                label="Company Name"
                placeholder="Enter your company name"
                {...register("companyName", { required: "Required" })}
                error={errors.companyName?.message}
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  label="No. of Employees"
                  placeholder="e.g 10"
                  {...register("employees", { required: "Required" })}
                  error={errors.employees?.message}
                />
                <Input
                  label="Company Phone"
                  placeholder="e.g 123456789"
                  {...register("phone", { required: "Required" })}
                  error={errors.phone?.message}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium mt-4"
              >
                Sign Up
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              By creating an account, you agree to the{" "}
              <span className="font-semibold text-black">Terms & Conditions</span>.
            </p>
          </form>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-medium">
            Sign in
          </Link>
        </p>
      </div>
  );
}
