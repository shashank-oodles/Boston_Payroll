import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../layouts/AuthLayout";
import { Input } from "../../shared";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import type { ResetFormValues } from "../types";


export function ResetPassword() {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<ResetFormValues>({
        defaultValues: {
            password: "",
            confirm_password: ""
        },
    });

    const password = watch("password");

    const onSubmit = async (data: ResetFormValues) => {
        console.log("Login data:", data);
        // call login API here
        navigate("/password-updated");
    };

    return (
            <div className="w-full max-w-md bg-white">
                <button onClick={() => navigate(-1)}>
                    <FaArrowLeft className="text-gray-900 cursor-pointer" />
                </button>
                <h2 className="text-3xl font-semibold mb-2">Reset Your Password</h2>
                <p className="text-sm mb-4 text-gray-500 mt-1">
                    Please check your inbox
                </p>

                <div className="border-[#E2E8F0] rounded-lg shadow-md p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                        <div className="flex flex-col gap-4">
                            {/*New Password */}
                            <Input
                                type={passwordVisible ? "text" : "password"}
                                label="New Password"
                                placeholder="Enter a new password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum 8 characters",
                                    },
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
                            {/*Confirm Password */}
                            <Input
                                type={confirmPasswordVisible ? "text" : "password"}
                                label="Confirm Password"
                                placeholder="Re-enter your new password"
                                {...register("confirm_password", {
                                    required: "Confirm password is required",
                                    validate: v => v === password || "Passwords do not match",
                                })}
                                error={errors.confirm_password?.message}
                                rightElement={
                                    <button
                                        type="button"
                                        onClick={() => setConfirmPasswordVisible(v => !v)}
                                        className="hover:text-gray-700"
                                    >
                                        {confirmPasswordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
                                    </button>
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white py-3 rounded-lg font-medium transition cursor-pointer"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
    );
}
