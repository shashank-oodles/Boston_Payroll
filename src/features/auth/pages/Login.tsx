import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../layouts/AuthLayout";
import { Input } from "../../shared";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import type { LoginFormValues } from "../types";

export function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login data:", data);
    // call login API here
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-none sm:rounded-xl bg-white">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Sign in to securely access your payroll dashboard.
        </p>

        {/* Card */}
        <div className="border border-[#E2E8F0] sm:rounded-lg shadow-sm sm:shadow-md p-4 sm:p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 sm:mt-6 space-y-3 sm:space-y-4"
          >
            {/* Email */}
            <Input
              label="Email Address"
              placeholder="e.g johndoe@bostonpayroll.com"
              {...register("email", {
                required: "Email is required",
              })}
              error={errors.email?.message}
            />

            {/* Password */}
            <Input
              type={passwordVisible ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              error={errors.password?.message}
              rightElement={
                <button
                  type="button"
                  onClick={() => setPasswordVisible(v => !v)}
                  className="hover:text-gray-700"
                >
                  {passwordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
                </button>
              }
            />

            {/* Remember Me + Forgot */}
            <div className="flex gap-2 sm:items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-orange-500 font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full mt-4
                bg-orange-500 hover:bg-orange-600
                disabled:opacity-60
                text-white
                py-3.5 sm:py-3
                rounded-lg
                font-medium
                transition
              "
            >
              Sign in
            </button>

            {/* Footer Info */}
            <div className="flex gap-2 items-start mt-4">
              <CiCircleInfo className="text-xl text-red-500 mt-0.5" />
              <p className="text-xs text-gray-500">
                Trademarks and brands are the property of their respective owners.
                Using this site means you accept these{" "}
                <span className="text-black font-semibold">
                  End User Terms of Use.
                </span>
              </p>
            </div>
          </form>
        </div>
        <p className="text-xs text-gray-500 mt-10 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-500 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
