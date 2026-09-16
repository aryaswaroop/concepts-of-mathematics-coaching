import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Check,
    ClipboardCheck,
    GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const topics = [
    "Board-oriented preparation",
    "Regular weekly tests",
    "Current and previous topic practice",
    "NCERT + R.D. Sharma support",
    "Pre-board preparation",
    "Performance improvement",
];

const Class12Course = ({ course }) => {
    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            <GraduationCap className="h-4 w-4" />
                            Course 02
                        </div>

                        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Prepare with focus for your
                            <span className="text-blue-600">
                                {" "}Class 12 journey.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                            Class 12 preparation combines concept revision,
                            problem solving, regular assessment and
                            board-oriented practice to help students prepare
                            with greater confidence.
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {topics.map((topic) => (
                                <div
                                    key={topic}
                                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-4 py-3"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50">
                                        <Check className="h-3.5 w-3.5 text-blue-600" />
                                    </span>

                                    <span className="text-sm font-medium text-slate-700">
                                        {topic}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                        >
                            Enquire about Class 12
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative mx-auto max-w-[500px]">

                            <div className="rounded-[2rem] border border-blue-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">

                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white">
                                        XII
                                    </div>

                                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                                        Board Preparation
                                    </span>
                                </div>

                                <div className="mt-8 mb-4">
                                    <p className="font-mono text-sm text-blue-600">
                                        Progress = Practice + Evaluation
                                    </p>

                                    <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                                        {course?.name || "Class 12"}
                                        <span className="block text-blue-600">
                                            {course?.subject || "Mathematics"}
                                        </span>
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-slate-600">
                                        {course?.description ||
                                            "Structured preparation focused on understanding, practice, testing and board-oriented revision."}
                                    </p>
                                </div>
                                {course?.originalFee && (
                                    <div className="mb-4 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
                                        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                            Annual Fee
                                        </span>

                                        <span className="text-base font-extrabold text-blue-700">
                                            ₹{course.originalFee}
                                        </span>
                                    </div>
                                )}
                                <div className="mt-7 space-y-3">
                                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <ClipboardCheck className="h-5 w-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">
                                                Regular Assessment
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Weekly testing and evaluation
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <Award className="h-5 w-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">
                                                Focused Preparation
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Revision and board-oriented
                                                practice
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Class12Course;