import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { postReq } from "../../api/axios";
import { useState } from "react";



const ResendOtp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        setLoading(true)
        const response = await postReq('/user/resend-otp', data)
        if (response) {
            navigate(`/email-verification/${response.token}`)
        }
        reset()
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-secandory p-2">
            <div className="w-[400px] max-w-sm p-6 bg-secandory rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 pb-3">
                    RESEND OTP
                </h2>
                <p className="mt-2 text-sm text-center text-gray-600">
                    Enter your email address to resend otp.
                </p>

                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text font-medium text-gray-700">
                                Email Address
                            </span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@domain.com"
                            className={`input input-bordered w-full ${errors.email ? "border-red-500" : ""
                                }`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn bg-primary w-full mt-4"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Send New Otp"}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link
                        to="/auth/sign-in"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResendOtp;
