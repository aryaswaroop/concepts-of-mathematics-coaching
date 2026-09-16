import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    LoaderCircle,
    LockKeyhole,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
    Link,
    useSearchParams,
} from "react-router-dom";

import AuthShell from "../../components/auth/AuthShell";
import PasswordInput from "../../components/auth/PasswordInput";

import { resetPassword } from "../../services/api";

const ResetPassword = () => {
    const [searchParams] =
        useSearchParams();

    const token = useMemo(
        () =>
            searchParams.get("token") ||
            "",
        [searchParams]
    );

    const [password, setPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [isLoading, setIsLoading] =
        useState(false);

    const [success, setSuccess] =
        useState("");

    const [error, setError] =
        useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSuccess("");
        setError("");

        if (!token) {
            setError(
                "This password reset link is invalid or incomplete."
            );
            return;
        }

        if (password.length < 6) {
            setError(
                "Password must be at least 6 characters long."
            );
            return;
        }

        if (password !== confirmPassword) {
            setError(
                "Passwords do not match."
            );
            return;
        }

        setIsLoading(true);

        try {
            const response =
                await resetPassword({
                    token,
                    password,
                });

            setSuccess(
                response.message ||
                "Password reset successfully."
            );

            setPassword("");
            setConfirmPassword("");
        } catch (error) {
            setError(
                error?.response?.data
                    ?.message ||
                "Unable to reset your password. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthShell
            eyebrow="Secure Password Reset"
            title="Create a new password."
            description="Choose a new secure password for your Concepts of Mathematics account."
        >
            <div className="mb-7">
                <div className="mb-4 flex items-center gap-2 text-blue-600">
                    <LockKeyhole className="h-4 w-4" />

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                        Secure password reset
                    </span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                    Set new password
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your new password will replace your
                    current account password.
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
                                    Password updated
                                </p>

                                <p className="mt-1 text-xs leading-5 text-emerald-700">
                                    {success}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/auth/login"
                        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 text-sm font-bold text-white transition-all hover:bg-blue-600"
                    >
                        Continue to sign in

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <PasswordInput
                        label="New password"
                        name="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(
                                event.target.value
                            )
                        }
                    />

                    <PasswordInput
                        label="Confirm new password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) =>
                            setConfirmPassword(
                                event.target.value
                            )
                        }
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
                                Updating...
                            </>
                        ) : (
                            <>
                                Reset password

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

export default ResetPassword;