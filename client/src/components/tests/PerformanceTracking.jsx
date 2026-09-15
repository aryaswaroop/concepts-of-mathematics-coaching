import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BarChart3,
    Target,
    TrendingUp,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const PerformanceTracking = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-7">
                <div className="max-w-xl">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                        Performance Tracking
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                        Results should explain what to improve.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        The result system is designed to move beyond a single
                        score. Performance information can help students and
                        the teacher understand learning progress.
                    </p>

                    <div className="mt-7 space-y-3">
                        {[
                            "Understand test performance",
                            "Identify areas requiring attention",
                            "Track improvement over time",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                    <Target size={15} />
                                </span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <BarChart3 size={19} />
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="text-slate-300"
                                />
                            </div>

                            <p className="mt-6 text-sm font-bold text-slate-500">
                                Test Performance
                            </p>

                            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "68%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="h-full rounded-full bg-blue-600"
                                />
                            </div>

                            <p className="mt-3 text-xs text-slate-500">
                                Illustrative interface — actual performance
                                will come from student results.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-2xl border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_15px_40px_rgba(15,23,42,0.10)]"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                                    <TrendingUp size={19} />
                                </div>

                                <span className="text-xs font-bold text-slate-400">
                                    PROGRESS
                                </span>
                            </div>

                            <p className="mt-6 text-lg font-extrabold">
                                Improvement Tracking
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Compare performance across assessments and
                                focus on meaningful improvement.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceTracking;