import { motion } from "framer-motion";
import {
    ArrowRight,
    LoaderCircle,
    ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import AuthInput from "../../components/auth/AuthInput";
import AuthShell from "../../components/auth/AuthShell";
import PasswordInput from "../../components/auth/PasswordInput";

import { useAppContext } from "../../context/AppContext";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        login,
        isAuthenticated,
        isAuthLoading,
        user,
    } = useAppContext();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] =
        useState(false);

    const [message, setMessage] =
        useState("");

    const [messageType, setMessageType] =
        useState("error");

    useEffect(() => {
        if (
            isAuthLoading ||
            !isAuthenticated ||
            !user
        ) {
            return;
        }

        if (user.role === "ADMIN") {
            navigate("/admin", {
                replace: true,
            });
            return;
        }

        navigate("/student", {
            replace: true,
        });
    }, [
        isAuthenticated,
        isAuthLoading,
        user,
        navigate,
    ]);

    const handleChange = (event) => {
        const {
            name,
            value,
        } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));

        setMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!form.email || !form.password) {
            setMessageType("error");
            setMessage(
                "Please enter your email and password."
            );
            return;
        }

        setIsLoading(true);
        setMessage("");

        try {
            const loggedInUser =
                await login(form);

            const requestedPath =
                location.state?.from;

            if (
                requestedPath &&
                requestedPath.startsWith(
                    loggedInUser.role ===
                        "ADMIN"
                        ? "/admin"
                        : "/student"
                )
            ) {
                navigate(
                    requestedPath,
                    {
                        replace: true,
                    }
                );
                return;
            }

            if (
                loggedInUser.role ===
                "ADMIN"
            ) {
                navigate(
                    "/admin",
                    {
                        replace: true,
                    }
                );
                return;
            }

            navigate(
                "/student",
                {
                    replace: true,
                }
            );
        } catch (error) {
            setMessageType("error");

            setMessage(
                error?.response?.data
                    ?.message ||
                "Unable to sign in. Please check your credentials and try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthShell
            eyebrow="Student & Admin Access"
            title="Welcome back."
            description="Enter your account details to continue to your Concepts of Mathematics learning workspace."
        >
            <div className="mb-7">
                <div className="mb-4 flex items-center gap-2 text-blue-600">
                    <ShieldCheck className="h-4 w-4" />

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                        Secure workspace
                    </span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                    Sign in to continue
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Access your learning, tests,
                    results and academic support.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                <AuthInput
                    label="Email or account ID"
                    name="email"
                    type="text"
                    placeholder="Enter your email or account ID"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="username"
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                <div className="flex items-center justify-end">
                    <Link
                        to="/auth/forgot-password"
                        className="text-xs font-bold text-blue-600 transition-colors hover:text-blue-700"
                    >
                        Forgot password?
                    </Link>
                </div>

                {message && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -6,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        className={`rounded-xl border px-4 py-3 text-xs font-medium leading-5 ${
                            messageType ===
                            "error"
                                ? "border-red-100 bg-red-50 text-red-700"
                                : "border-blue-100 bg-blue-50 text-blue-700"
                        }`}
                    >
                        {message}
                    </motion.div>
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
                            ? { scale: 0.985 }
                            : {}
                    }
                    className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#0f172a] px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0_16px_35px_rgba(37,99,235,0.24)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    {isLoading ? (
                        <>
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        <>
                            Sign in

                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                    )}
                </motion.button>
            </form>

            <div className="mt-7 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-center">
                <span className="text-[11px] text-slate-400">
                    New student accounts are created
                    through the institute.
                </span>
            </div>
        </AuthShell>
    );
};

export default Login;