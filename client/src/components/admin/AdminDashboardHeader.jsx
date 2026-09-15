import { motion } from "framer-motion";
import {
    ArrowUpRight,
    CalendarDays,
    Plus,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboardHeader = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-[1280px] px-4 py-7 sm:px-6 lg:px-7 lg:py-8">
                <div className="grid gap-5 lg:grid-cols-[1fr_320px] lg:items-stretch">
                    {/* Main Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur sm:p-7"
                    >
                        {/* Decorative mathematics */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-8 -top-12 select-none text-[120px] font-extrabold leading-none text-blue-600/[0.035]"
                        >
                            ∑
                        </div>

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-3 right-20 select-none text-5xl font-bold text-slate-900/[0.025]"
                        >
                            f(x)
                        </div>

                        <div className="relative">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                                <Sparkles className="h-3.5 w-3.5" />
                                Management workspace
                            </div>

                            <h1 className="max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                                Manage the coaching centre
                                <span className="text-blue-600"> with clarity.</span>
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                                Keep students, academics, assessments, payments
                                and communication organised from one central
                                workspace.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <Link
                                    to="/admin/students"
                                    className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
                                >
                                    Manage Students
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>

                                <Link
                                    to="/admin/tests"
                                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                                >
                                    <Plus className="h-4 w-4" />
                                    Create Test
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Academic Context Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-[0_18px_45px_rgba(15,23,42,0.14)]"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "28px 28px",
                            }}
                        />

                        <div className="relative flex h-full flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-300">
                                        <CalendarDays className="h-4 w-4" />
                                        Academic workspace
                                    </span>

                                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                                        Live data later
                                    </span>
                                </div>

                                <div className="mt-7">
                                    <p className="text-sm font-medium text-slate-400">
                                        Current focus
                                    </p>

                                    <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.03em]">
                                        Class 11 & 12
                                    </h2>

                                    <p className="mt-2 text-sm leading-5 text-slate-400">
                                        Mathematics academic management
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 border-t border-white/10 pt-4">
                                <p className="text-xs leading-5 text-slate-400">
                                    Student, batch and assessment information
                                    will appear here once the dashboard is
                                    connected to the backend.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboardHeader;