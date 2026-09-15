import { motion } from "framer-motion";
import {
    ArrowDown,
    CalendarDays,
    Clock3,
    UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const BatchesHero = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
            <MathPattern variant="grid" />

            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 4, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-[8%] top-[12%] text-7xl font-bold text-blue-600/[0.07]"
            >
                ∑
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute bottom-[10%] left-[6%] text-7xl font-bold text-blue-600/[0.06]"
            >
                f(x)
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            <CalendarDays className="h-4 w-4" />
                            Flexible Batch System
                        </div>

                        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                            Find the right
                            <span className="block text-blue-600">
                                learning schedule.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            Concepts of Mathematics runs focused morning and
                            evening batches for Class 11 and Class 12,
                            with schedules managed according to student
                            requirements and available capacity.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="#batch-schedule"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                            >
                                Explore Batches
                                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                            >
                                Ask About Admission
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm">
                                <Clock3 className="h-4 w-4 text-blue-600" />
                                Morning & Evening
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm">
                                <UsersRound className="h-4 w-4 text-blue-600" />
                                Capacity Managed
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-[520px]">

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 35,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-[-22px] rounded-full border border-dashed border-blue-200"
                            />

                            <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8">

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                            Batch Board
                                        </p>

                                        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                                            Weekly Schedule
                                        </h2>
                                    </div>

                                    <CalendarDays className="h-7 w-7 text-blue-600" />
                                </div>

                                <div className="mt-7 space-y-3">
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                                Morning
                                            </span>

                                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                                                Batch
                                            </span>
                                        </div>

                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="font-bold text-slate-900">
                                                Class 11 / 12
                                            </span>

                                            <Clock3 className="h-4 w-4 text-blue-600" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
                                                Evening
                                            </span>

                                            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">
                                                Batch
                                            </span>
                                        </div>

                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="font-bold text-slate-900">
                                                Class 11 / 12
                                            </span>

                                            <Clock3 className="h-4 w-4 text-blue-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 border-t border-slate-200 pt-5">
                                    <p className="font-mono text-sm text-slate-500">
                                        Schedule + Capacity = Better Planning
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BatchesHero;