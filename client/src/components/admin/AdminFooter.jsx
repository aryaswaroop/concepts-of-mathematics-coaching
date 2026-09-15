import {
    ArrowUpRight,
    BarChart3,
    GraduationCap,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AdminFooter = () => {
    const year = new Date().getFullYear();

    const quickLinks = [
        {
            label: "Dashboard",
            path: "/admin/dashboard",
        },
        {
            label: "Students",
            path: "/admin/students",
        },
        {
            label: "Batches",
            path: "/admin/batches",
        },
        {
            label: "Reports",
            path: "/admin/reports",
        },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.045) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"
            />

            <div className="relative mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-7">
                <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-xs font-extrabold text-white">
                                CM
                            </div>

                            <div>
                                <p className="text-lg font-extrabold tracking-tight text-slate-950">
                                    Concepts of Mathematics
                                </p>

                                <p className="text-xs font-semibold text-slate-400">
                                    Admin Management Portal
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                            A focused management workspace for organizing
                            students, academics, assessments, payments and
                            coaching operations.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-400">
                            Quick Access
                        </p>

                        <div className="mt-4 space-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
                                >
                                    {link.label}

                                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-400">
                            Workspace
                        </p>

                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-semibold text-slate-600">
                                    Secure administration
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <GraduationCap className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-semibold text-slate-600">
                                    Academic management
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <BarChart3 className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-semibold text-slate-600">
                                    Performance insights
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8 flex items-center justify-center gap-6 overflow-hidden text-2xl font-extrabold text-blue-600/15">
                    {["∑", "π", "√x", "f(x)", "∫"].map((symbol) => (
                        <motion.span
                            key={symbol}
                            whileHover={{
                                y: -3,
                                scale: 1.1,
                                color: "rgba(37,99,235,0.35)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                            }}
                        >
                            {symbol}
                        </motion.span>
                    ))}
                </div>

                <div className="flex flex-col gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {year} Concepts of Mathematics. Admin Portal.
                    </p>

                    <p className="font-semibold">
                        Manage · Monitor · Improve
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default AdminFooter;