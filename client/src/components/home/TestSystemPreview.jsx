import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    ClipboardCheck,
    Target,
    TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import MathPattern from "../common/MathPattern";

const assessmentSteps = [
    {
        number: "01",
        title: "Weekly Test",
        description:
            "Regular tests give students consistent opportunities to practise concepts and apply what they have learned.",
        icon: ClipboardCheck,
    },
    {
        number: "02",
        title: "Evaluation",
        description:
            "Test performance is reviewed to understand strengths and identify topics that need more attention.",
        icon: BarChart3,
    },
    {
        number: "03",
        title: "Track Progress",
        description:
            "Results and rankings help students understand their academic progress over time.",
        icon: TrendingUp,
    },
    {
        number: "04",
        title: "Improve",
        description:
            "Students receive additional guidance and focused support wherever improvement is needed.",
        icon: Target,
    },
];

const TestSystemPreview = () => {
    return (
        <section className="relative isolate overflow-hidden bg-transparent">
            {/* Consistent mathematical grid */}
            <MathPattern
                variant="grid"
                opacity="opacity-100"
                className="z-0"
            />

            {/* Background mathematical atmosphere */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-1/2 z-0 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-100/25 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-28 bottom-[-100px] z-0 h-[300px] w-[300px] rounded-full border border-blue-100/50"
            />

            {/* Main content */}
            <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
                >
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <ClipboardCheck
                                    size={13}
                                    strokeWidth={2.2}
                                />
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                                Assessment System
                            </span>
                        </div>

                        <h2 className="mt-3 max-w-xl font-[var(--font-heading)] text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                            Test.
                            <span className="text-blue-600">
                                {" "}
                                Track.
                            </span>
                            <br />
                            Improve.
                        </h2>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-slate-500 lg:ml-auto lg:text-[15px]">
                        Regular assessments are part of the learning process,
                        helping students practise consistently, understand
                        their performance and receive support where it matters.
                    </p>
                </motion.div>

                {/* Assessment visual */}
                <div className="relative mt-12">
                    {/* Desktop connecting path */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[8%] right-[8%] top-[45px] hidden h-px overflow-hidden lg:block"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 1.4,
                                ease: "easeInOut",
                            }}
                            className="h-full origin-left bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"
                        />

                        <motion.div
                            animate={{
                                x: ["0%", "100%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute -top-[2px] h-1 w-16 rounded-full bg-blue-500/50 blur-[1px]"
                        />
                    </div>

                    {/* Mobile connecting line */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-10 left-[21px] top-10 w-px bg-gradient-to-b from-blue-200 via-blue-400 to-transparent lg:hidden"
                    />

                    <div className="grid gap-4 lg:grid-cols-4 lg:gap-5">
                        {assessmentSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.article
                                    key={step.number}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.12,
                                    }}
                                    className="group relative"
                                >
                                    {/* Step indicator */}
                                    <div className="relative z-10 flex items-center gap-3 lg:block">
                                        <motion.div
                                            initial={{
                                                scale: 0.7,
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 18,
                                                delay:
                                                    0.15 +
                                                    index * 0.12,
                                            }}
                                            whileHover={{
                                                scale: 1.08,
                                            }}
                                            className="relative flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white shadow-[0_8px_25px_rgba(37,99,235,0.12)]"
                                        >
                                            <span className="absolute inset-1 rounded-full border border-dashed border-blue-200/70" />

                                            <span className="relative text-[10px] font-extrabold tracking-wider text-blue-600">
                                                {step.number}
                                            </span>

                                            <motion.span
                                                animate={{
                                                    scale: [1, 1.45, 1],
                                                    opacity: [0.35, 0, 0.35],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    delay: index * 0.35,
                                                }}
                                                className="absolute inset-0 rounded-full border border-blue-400"
                                            />
                                        </motion.div>

                                        {/* Mobile title */}
                                        <div className="lg:hidden">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-500">
                                                Step {step.number}
                                            </p>

                                            <h3 className="mt-0.5 font-[var(--font-heading)] text-base font-extrabold tracking-[-0.025em] text-slate-950">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Step card */}
                                    <motion.div
                                        whileHover={{
                                            y: -5,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 22,
                                        }}
                                        className="relative ml-[58px] mt-3 overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/60 p-5 shadow-[0_15px_45px_rgba(15,23,42,0.055)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:bg-white/80 hover:shadow-[0_20px_55px_rgba(37,99,235,0.10)] lg:ml-0 lg:mt-7 lg:p-6"
                                    >
                                        {/* Hover glow */}
                                        <div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/40 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        />

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -5, 5, 0],
                                            }}
                                            transition={{
                                                duration: 0.45,
                                            }}
                                            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                                        >
                                            <Icon
                                                size={18}
                                                strokeWidth={1.9}
                                            />
                                        </motion.div>

                                        {/* Desktop title */}
                                        <div className="hidden lg:block">
                                            <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-500">
                                                Step {step.number}
                                            </p>

                                            <h3 className="mt-1.5 font-[var(--font-heading)] text-lg font-extrabold tracking-[-0.03em] text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className="relative mt-3 text-xs leading-6 text-slate-500 sm:text-[13px]">
                                            {step.description}
                                        </p>

                                        {/* Bottom progress */}
                                        <div className="relative mt-5 flex items-center gap-2">
                                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                                                <motion.div
                                                    initial={{
                                                        width: "0%",
                                                    }}
                                                    whileInView={{
                                                        width: `${35 + index * 20}%`,
                                                    }}
                                                    viewport={{
                                                        once: true,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        delay:
                                                            0.3 +
                                                            index * 0.12,
                                                        ease: "easeOut",
                                                    }}
                                                    className="h-full rounded-full bg-blue-500"
                                                />
                                            </div>

                                            <span className="font-[var(--font-heading)] text-[9px] font-extrabold text-slate-300">
                                                {step.number}
                                            </span>
                                        </div>
                                    </motion.div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom dashboard-style summary */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 18,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.55,
                        delay: 0.2,
                    }}
                    className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-blue-100/80 bg-blue-50/55 p-5 backdrop-blur-xl sm:p-6"
                >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            {/* Animated progress ring */}
                            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                                <svg
                                    viewBox="0 0 48 48"
                                    className="absolute inset-0 h-full w-full -rotate-90"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="19"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        className="text-blue-100"
                                    />

                                    <motion.circle
                                        cx="24"
                                        cy="24"
                                        r="19"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        pathLength="1"
                                        initial={{
                                            pathLength: 0,
                                        }}
                                        whileInView={{
                                            pathLength: 0.72,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 1.3,
                                            ease: "easeOut",
                                        }}
                                        className="text-blue-600"
                                    />
                                </svg>

                                <span className="relative font-[var(--font-heading)] text-xs font-extrabold text-blue-700">
                                    4
                                </span>
                            </div>

                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                                    Assessment Cycle
                                </p>

                                <h4 className="mt-1 font-[var(--font-heading)] text-base font-extrabold tracking-[-0.02em] text-slate-900">
                                    From practice to improvement
                                </h4>
                            </div>
                        </div>

                        <Link
                            to="/tests-results"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
                        >
                            Explore Tests & Results

                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                                <ArrowRight
                                    size={13}
                                    strokeWidth={2.4}
                                />
                            </span>
                        </Link>
                    </div>

                    {/* Decorative mathematical symbols */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-28 top-1/2 hidden -translate-y-1/2 font-[var(--font-heading)] text-5xl font-extrabold text-blue-100/80 lg:block"
                    >
                        Δ
                    </span>

                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-2 right-8 font-[var(--font-heading)] text-2xl font-extrabold text-blue-100/70"
                    >
                        f(x)
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default TestSystemPreview;