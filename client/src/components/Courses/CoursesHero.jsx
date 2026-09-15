import { motion } from "framer-motion";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const CoursesHero = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
            <MathPattern variant="grid" />

            {/* Decorative mathematics */}
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
                className="pointer-events-none absolute right-[7%] top-[14%] text-6xl font-bold text-blue-600/[0.07] sm:text-8xl"
            >
                π
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 12, 0],
                    rotate: [0, -4, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute bottom-[12%] left-[5%] text-6xl font-bold text-blue-600/[0.06] sm:text-8xl"
            >
                ∫
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            <BookOpen className="h-4 w-4" />
                            Class 11 & Class 12 Mathematics
                        </div>

                        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                            Learn Mathematics with
                            <span className="block text-blue-600">
                                clarity and purpose.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            Focused Mathematics coaching for Class 11 and
                            Class 12 students, built around concept clarity,
                            regular practice, testing and personal guidance.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="#class-11"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                            >
                                Explore Courses
                                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                            >
                                Enquire Now
                            </Link>
                        </div>

                        {/* Equation */}
                        <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 font-mono text-sm font-semibold text-slate-500 shadow-sm">
                            <span>Concept</span>
                            <span className="text-blue-600">+</span>
                            <span>Practice</span>
                            <span className="text-blue-600">+</span>
                            <span>Evaluation</span>
                            <span className="text-blue-600">=</span>
                            <span className="text-slate-900">Progress</span>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-[520px]">

                            {/* Outer mathematical ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 35,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-[-25px] rounded-full border border-dashed border-blue-200"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8">

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                            Our Courses
                                        </p>
                                        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                                            Mathematics
                                        </h2>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <Sigma className="h-6 w-6" />
                                    </div>
                                </div>

                                <div className="mt-7 space-y-4">

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-extrabold text-white">
                                                XI
                                            </div>

                                            <div>
                                                <p className="font-bold text-slate-950">
                                                    Class 11 Mathematics
                                                </p>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Build a strong mathematical
                                                    foundation.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white">
                                                XII
                                            </div>

                                            <div>
                                                <p className="font-bold text-slate-950">
                                                    Class 12 Mathematics
                                                </p>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Prepare with focused board
                                                    preparation.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                                    <GraduationCap className="h-5 w-5 text-blue-600" />
                                    <p className="text-sm font-medium text-slate-600">
                                        Focused learning for every stage of
                                        your Mathematics journey.
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

export default CoursesHero;