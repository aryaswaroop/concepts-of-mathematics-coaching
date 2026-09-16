import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    LoaderCircle,
    Mail,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import AuthInput from "../../components/auth/AuthInput";
import AuthShell from "../../components/auth/AuthShell";

import { forgotPassword } from "../../services/api";

const ForgotPassword = () => {
    const [email, setEmail] =
        useState("");

    const [isLoading, setIsLoading] =
        useState(false);

    const [success, setSuccess] =
        useState("");

    const [error, setError] =
        useState("");

    const [resetUrl, setResetUrl] =
        useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSuccess("");
        setError("");
        setResetUrl("");

        if (!email.trim()) {
            setError(
                "Please enter your email address."
            );
            return;
        }

        setIsLoading(true);

        try {
            const response =
                await forgotPassword(
                    email.trim()
                );

            setSuccess(
                response.message ||
                "If an account exists with this email, password reset instructions have been generated."
            );

            /*
            |--------------------------------------------------------------------------
            | Development only
            |--------------------------------------------------------------------------
            */

            if (
                import.meta.env.DEV &&
                response.data?.resetUrl
            ) {
                setResetUrl(
                    response.data.resetUrl
                );
            }
        } catch (error) {
            setError(
                error?.response?.data
                    ?.message ||
                "Unable to process your request. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthShell
            eyebrow="Account Recovery"
            title="Reset your password."
            description="Enter the email associated with your Concepts of Mathematics account to continue."
        >
            <div className="mb-7">
                <div className="mb-4 flex items-center gap-2 text-blue-600">
                    <Mail className="h-4 w-4" />

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                        Password recovery
                    </span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                    Forgot password?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Enter your registered email address
                    and we will help you reset your
                    password.
                </p>
            </div>

            {success ? (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="space-y-5"
                >
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                            <div>
                                <p className="text-sm font-bold text-emerald-800">
                                    Request processed
                                </p>

                                <p className="mt-1 text-xs leading-5 text-emerald-700">
                                    {success}
                                </p>
                            </div>
                        </div>
                    </div>

                    {resetUrl && (
                        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                                Development reset link
                            </p>

                            <a
                                href={resetUrl}
                                className="break-all text-xs font-semibold leading-5 text-blue-700 underline"
                            >
                                {resetUrl}
                            </a>
                        </div>
                    )}

                    <Link
                        to="/auth/login"
                        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 text-sm font-bold text-white transition-all hover:bg-blue-600"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                        Back to sign in
                    </Link>
                </motion.div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <AuthInput
                        label="Registered email"
                        name="email"
                        type="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(event) =>
                            setEmail(
                                event.target.value
                            )
                        }
                        autoComplete="email"
                    />

                    {error && (
                        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-medium leading-5 text-red-700">
                            {error}
                        </div>
                    )}

                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={
                            !isLoading
                                ? { y: -2 }
                                : {}
                        }
                        whileTap={
                            !isLoading
                                ? {
                                    scale: 0.985,
                                }
                                : {}
                        }
                        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 text-sm font-bold text-white transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isLoading ? (
                            <>
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                Continue

                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </motion.button>

                    <div className="flex justify-center border-t border-slate-100 pt-5">
                        <Link
                            to="/auth/login"
                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition-colors hover:text-blue-600"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />

                            Back to sign in
                        </Link>
                    </div>
                </form>
            )}
        </AuthShell>
    );
};

export default ForgotPassword;