// features/auth/pages/OtpPage.tsx
import { OtpForm } from "../../shared/components/OtpForm";
import AuthLayout from "../layouts/AuthLayout";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

export function OtpPage() {
    const navigate = useNavigate();

    const handleOtpSubmit = (otp: string) => {
        console.log("OTP:", otp);
        // call verify OTP API
        navigate("/reset-password");
    };

    return (
        <AuthLayout>
            <div className="w-full max-w-md bg-white">
                <button onClick={() => navigate(-1)}>
                    <FaArrowLeft className="text-gray-900 cursor-pointer" />
                </button>

                <h2 className="text-3xl font-semibold mb-2">We’ve sent a password reset link to your email.</h2>
                <p className="text-sm mb-4 text-gray-500 mt-1">
                    Enter the below details to reset your password.
                </p>
                <OtpForm onSubmit={handleOtpSubmit} />
            </div>
        </AuthLayout >);
}
