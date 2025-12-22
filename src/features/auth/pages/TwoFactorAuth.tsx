import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import { Input } from "../../shared";
import { OtpForm } from "../../shared/components/OtpForm";
import { FaArrowLeft } from "react-icons/fa6";

type ForgotPasswordFormValues = {
  email: string;
};

export function TwoFactorAuth() {
  const navigate = useNavigate();

  // step control
  const [step, setStep] = useState<1 | 2>(1);

  // form for step 1
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: { email: "" },
  });

  // STEP 1: submit email
  const handleEmailSubmit = async (data: ForgotPasswordFormValues) => {
    console.log("Email submitted:", data.email);
    // call send OTP API here

    setStep(2);
  };

  // STEP 2: submit OTP
  const handleOtpSubmit = (otp: string) => {
    console.log("OTP submitted:", otp);
    // call verify OTP API here

    navigate("/reset-password");
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white">
        <button onClick={() => (step === 1 ? navigate(-1) : setStep(1))}>
          <FaArrowLeft className="text-gray-900 cursor-pointer" />
        </button>

        {step === 1 && (
          <>
            <h2 className="text-3xl font-semibold mb-2">
              Enter your email
            </h2>
            <p className="text-sm mb-4 text-gray-500 mt-1">
              An OTP will be sent to this email for 2-factor authentication.
            </p>

            <div className="border-[#E2E8F0] rounded-lg shadow-md p-6">
              <form
                onSubmit={handleSubmit(handleEmailSubmit)}
                className="mt-6 space-y-4"
              >
                <Input
                  label="Email Address"
                  placeholder="you@company.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  error={errors.email?.message}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white py-3 rounded-lg font-medium transition"
                >
                  Send Reset Code
                </button>
              </form>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-3xl font-semibold mb-2">
              Verify your email
            </h2>
            <p className="text-sm mb-4 text-gray-500 mt-1">
              Enter the OTP.
            </p>

            <OtpForm onSubmit={handleOtpSubmit} />
          </>
        )}
      </div>
    </AuthLayout>
  );
}
