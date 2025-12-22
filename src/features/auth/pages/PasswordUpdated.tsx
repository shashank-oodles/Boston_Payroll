import AuthLayout from "../layouts/AuthLayout";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

export function PasswordUpdated() {

    return (
        <AuthLayout>
            <div className="w-full max-w-md bg-white">
                <div className="flex flex-col items-center border-[#E2E8F0] rounded-lg shadow-md p-6">
                    <FaCheckCircle className="text-green-500 text-4xl mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Password Updated</h2>
                    <p className="text-sm mb-4 text-gray-500 mt-1 text-center">
                        Your password has been successfully reset. You can now log in with your new credentials.
                    </p>
                    <Link to="/login"className="w-full">
                        <button
                            type="submit"
                            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white py-3 rounded-lg font-medium transition cursor-pointer"
                        >
                            Go to Login
                        </button>
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
