import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../layouts/AuthLayout";
import { useNavigate } from "react-router";
import { Input } from "../../shared";
import { FaArrowLeft } from "react-icons/fa6";
import type { LoginFormValues } from "../types";


export function ForgotPassword() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();

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
        navigate("/otp-page");
    };

    return (
        <AuthLayout>
            <div className="w-full max-w-md bg-white">
                <button onClick={()=>navigate(-1)}>
                    <FaArrowLeft className="text-gray-900 cursor-pointer"/>
                </button>
                
                <h2 className="text-3xl font-semibold mb-2">Forgot Password</h2>
                <p className="text-sm mb-4 text-gray-500 mt-1">
                    Enter the below details to reset your password.
                </p>

                <div className="border-[#E2E8F0] rounded-lg shadow-md p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <Input
                                label="Email Address"
                                placeholder="you@company.com"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                error={errors.email?.message}
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-gray-500">
                                We'll send a reset link to this email if it matches an existing account.
                            </p>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white py-3 rounded-lg font-medium transition cursor-pointer"
                        >
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
}
