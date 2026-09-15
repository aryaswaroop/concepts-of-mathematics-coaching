import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";

const DashboardHeader = () => {
    return (
        <section className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
            {/* Decorative Mathematics */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-3 hidden select-none font-serif text-[90px] font-bold leading-none text-blue-600/[0.035] md:block"
            >
                ∫
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-[18%] select-none font-serif text-5xl font-bold text-blue-600/[0.035]"
            >
                x²
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="relative mx-auto max-w-[1280px]"
            >
                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                    {/* Welcome */}
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                            <Sparkles
                                size={13}
                                className="text-blue-600"
                            />

                            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-700">
                                Learning workspace
                            </span>
                        </div>

                        <h2 className="max-w-2xl font-[var(--font-heading)] text-[28px] font-extrabold tracking-[-0.045em] text-slate-950 sm:text-[34px]">
                            Welcome back,{" "}
                            <span className="text-blue-600">
                                Student
                            </span>
                        </h2>

                        <p className="mt-2 max-w-xl text-[13px] leading-6 text-slate-500 sm:text-[14px]">
                            Keep building your mathematical foundation.
                            Your learning activity, tests and progress
                            will appear here.
                        </p>
                    </div>

                    {/* Quick Context */}
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="flex w-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:w-fit"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                            <BookOpen size={17} />
                        </div>

                        <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Current focus
                            </p>

                            <p className="mt-0.5 text-[12px] font-bold text-slate-800">
                                Mathematics Learning
                            </p>
                        </div>

                        <button
                            type="button"
                            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                            aria-label="View learning"
                        >
                            <ArrowUpRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default DashboardHeader;