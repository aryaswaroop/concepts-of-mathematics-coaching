import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import MathPattern from "../common/MathPattern";

const benefits = [
    "Concept-focused learning",
    "Regular assessments",
    "Personal guidance",
    "Board-oriented preparation",
];

const HeroSection = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white"> {/*border-b border-slate-200*/}
            {/* =========================================
                Background Mathematical Patterns
            ========================================== */}
            <MathPattern variant="grid" opacity="opacity-100" />
            <MathPattern variant="equations" opacity="opacity-100" />

            {/* Soft ambient shapes */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-indigo-100/60 blur-3xl" />

            {/* =========================================
                Main Hero Content
            ========================================== */}
            <div className="relative mx-auto grid min-h-[680px] max-w-[1280px] items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">

                {/* =====================================
                    LEFT CONTENT
                ====================================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -25,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="relative z-10"
                >
                    {/* Announcement Badge */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                        className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 shadow-sm"
                    >
                        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Sparkles size={11} strokeWidth={2.5} />

                            <motion.span
                                animate={{
                                    scale: [1, 1.45, 1],
                                    opacity: [0.45, 0, 0.45],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="absolute inset-0 rounded-full bg-blue-500"
                            />
                        </span>

                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700 sm:text-xs">
                            Admissions open for Classes 11 & 12
                        </span>
                    </motion.div>

                    {/* Eyebrow */}
                    <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                        Concepts of Mathematics
                    </p>

                    {/* Main Heading */}
                    <h1 className="mt-4 max-w-3xl font-['Manrope'] text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                        Understand
                        <span className="block text-blue-600">
                            Mathematics.
                        </span>

                        <span className="block text-slate-800">
                            Build confidence.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                        Focused Mathematics coaching for Class 11 and
                        Class 12 students—built around clear concepts,
                        consistent practice and focused board preparation.
                    </p>

                    {/* Benefits */}
                    <div className="mt-7 grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{
                                    opacity: 0,
                                    x: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.25 + index * 0.08,
                                }}
                                className="flex items-center gap-2.5"
                            >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                    <CheckCircle2
                                        size={13}
                                        strokeWidth={2.5}
                                    />
                                </span>

                                <span className="text-sm font-medium text-slate-700">
                                    {benefit}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/courses"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
                        >
                            Explore Courses

                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                                <ArrowRight
                                    size={14}
                                    strokeWidth={2.5}
                                />
                            </span>
                        </Link>

                        <Link
                            to="/admission-fees"
                            className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                            <BookOpen
                                size={16}
                                className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
                            />

                            Admission & Fees
                        </Link>
                    </div>

                    {/* Trust Line */}
                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                        <span>Focused on Classes 11 & 12</span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span>Regular academic assessment</span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span>Personal guidance</span>
                    </div>
                </motion.div>

                {/* =====================================
                    RIGHT CREATIVE VISUAL
                ====================================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.94,
                        x: 25,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: "easeOut",
                    }}
                    className="relative mx-auto w-full max-w-[540px]"
                >
                    {/* Main visual area */}
                    <div className="relative aspect-square">

                        {/* Decorative orbit */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 24,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/70"
                        />

                        <motion.div
                            animate={{
                                rotate: -360,
                            }}
                            transition={{
                                duration: 32,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-200"
                        />

                        {/* Center learning card */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-1/2 top-1/2 z-20 w-[72%] -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-6">

                                {/* Card header */}
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                            Learning Progress
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-slate-900">
                                            Mathematics
                                        </p>
                                    </div>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <Sparkles size={16} />
                                    </span>
                                </div>

                                {/* Progress section */}
                                <div className="mt-5">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-3xl font-extrabold tracking-tight text-slate-950">
                                                01
                                            </p>

                                            <p className="mt-1 text-[10px] font-medium text-slate-500">
                                                Understand the concept
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
                                            Step 1
                                        </span>
                                    </div>

                                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                                        <motion.div
                                            initial={{
                                                width: "0%",
                                            }}
                                            animate={{
                                                width: "72%",
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                delay: 0.6,
                                                ease: "easeOut",
                                            }}
                                            className="h-full rounded-full bg-blue-600"
                                        />
                                    </div>

                                    <div className="mt-3 flex justify-between text-[9px] font-medium text-slate-400">
                                        <span>Concept</span>
                                        <span>Practice</span>
                                        <span>Confidence</span>
                                    </div>
                                </div>

                                {/* Mini cards */}
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                            Practice
                                        </p>

                                        <p className="mt-2 text-lg font-extrabold text-slate-900">
                                            Weekly
                                        </p>

                                        <p className="mt-0.5 text-[9px] text-slate-500">
                                            Regular assessments
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-blue-50 p-3">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-blue-400">
                                            Focus
                                        </p>

                                        <p className="mt-2 text-lg font-extrabold text-blue-700">
                                            11 & 12
                                        </p>

                                        <p className="mt-0.5 text-[9px] text-blue-500">
                                            Senior Mathematics
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating formula card */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 2, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-0 top-[18%] z-30 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-200/60"
                        >
                            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                Think
                            </p>

                            <p className="mt-1 font-['Manrope'] text-lg font-extrabold text-blue-600">
                                f(x)
                            </p>
                        </motion.div>

                        {/* Floating concept card */}
                        <motion.div
                            animate={{
                                y: [0, 9, 0],
                                rotate: [0, -2, 0],
                            }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            className="absolute bottom-[18%] right-0 z-30 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-200/60"
                        >
                            <div className="flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                    <CheckCircle2 size={14} />
                                </span>

                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                        Progress
                                    </p>

                                    <p className="text-xs font-bold text-slate-800">
                                        Concept clear
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating math symbols */}
                        <motion.span
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 8, 0],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute right-[12%] top-[7%] font-['Manrope'] text-3xl font-extrabold text-blue-200"
                        >
                            π
                        </motion.span>

                        <motion.span
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -7, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.4,
                            }}
                            className="absolute bottom-[9%] left-[13%] font-['Manrope'] text-2xl font-extrabold text-indigo-200"
                        >
                            √x
                        </motion.span>

                        {/* Small decorative dots */}
                        <motion.span
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="absolute left-[20%] top-[7%] h-2.5 w-2.5 rounded-full bg-yellow-400"
                        />

                        <motion.span
                            animate={{
                                scale: [1, 1.25, 1],
                                opacity: [0.4, 0.9, 0.4],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: 0.5,
                            }}
                            className="absolute bottom-[13%] right-[18%] h-2 w-2 rounded-full bg-blue-400"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Bottom edge */}
            {/* <div className="relative h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" /> */}
        </section>
    );
};

export default HeroSection;