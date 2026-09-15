import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BookOpenCheck,
    Brain,
    Target,
    Trophy,
} from "lucide-react";

import MathPattern from "../common/MathPattern";

const reasons = [
    {
        number: "01",
        icon: Brain,
        title: "Concept Clarity",
        description:
            "Understand the logic behind Mathematics instead of depending only on memorisation.",
        formula: "x² + y²",
    },
    {
        number: "02",
        icon: BookOpenCheck,
        title: "Regular Testing",
        description:
            "Weekly assessments provide regular practice and help identify areas that need improvement.",
        formula: "∑ practice",
    },
    {
        number: "03",
        icon: Target,
        title: "Personal Guidance",
        description:
            "Students who need additional support receive focused guidance, extra practice and time.",
        formula: "f(x) → progress",
    },
    {
        number: "04",
        icon: Trophy,
        title: "Board Preparation",
        description:
            "Structured preparation and pattern-oriented practice help students approach board examinations with confidence.",
        formula: "∫ confidence",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative isolate overflow-hidden bg-transparent">
            {/* Mathematical Background Pattern */}
            <MathPattern
                variant="grid"
                opacity="opacity-100"
                className="z-0"
            />

            {/* Soft mathematical atmosphere */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-1/2 z-0 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-blue-100/35 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-[-120px] z-0 h-[320px] w-[320px] rounded-full bg-blue-100/25 blur-3xl"
            />

            {/* Mathematical orbit */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-36 top-1/2 z-0 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-blue-100/60"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-1/2 z-0 h-[250px] w-[250px] -translate-y-1/2 rounded-full border border-dashed border-blue-100/70"
            />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                {/* Section Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
                >
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="h-px w-8 bg-blue-600" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                                Why Concepts
                            </span>
                        </div>

                        <h2 className="mt-3 max-w-xl font-[var(--font-heading)] text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                            A focused approach to
                            <span className="text-blue-600">
                                {" "}
                                Mathematics.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-slate-500 lg:ml-auto lg:text-[15px]">
                        Our teaching approach combines concept clarity,
                        consistent practice and individual support to help
                        students build stronger mathematical understanding.
                    </p>
                </motion.div>

                {/* Reasons */}
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <motion.article
                                key={reason.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className={`group relative px-4 py-6 sm:px-5 lg:px-6 lg:py-7 ${index % 2 !== 0
                                        ? "border-l border-slate-200/60"
                                        : ""
                                    } ${index >= 2
                                        ? "border-t border-slate-200/60 lg:border-t-0"
                                        : ""
                                    } ${index !== 0
                                        ? "lg:border-l lg:border-slate-200/60"
                                        : ""
                                    }`}
                            >
                                {/* Number + Icon */}
                                <div className="flex items-center justify-between">
                                    <span className="font-[var(--font-heading)] text-xs font-extrabold tracking-[0.12em] text-blue-400">
                                        {reason.number}
                                    </span>

                                    <motion.div
                                        whileHover={{
                                            rotate: 6,
                                            scale: 1.05,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 20,
                                        }}
                                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-blue-50/80 text-blue-600"
                                    >
                                        <Icon
                                            size={17}
                                            strokeWidth={1.9}
                                        />
                                    </motion.div>
                                </div>

                                {/* Mathematical Formula */}
                                <div className="mt-7 overflow-hidden">
                                    <motion.span
                                        initial={{
                                            x: -12,
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.3,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay:
                                                0.15 +
                                                index * 0.08,
                                        }}
                                        className="inline-block font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.04em] text-blue-100 transition-colors duration-300 group-hover:text-blue-200"
                                    >
                                        {reason.formula}
                                    </motion.span>
                                </div>

                                {/* Content */}
                                <h3 className="mt-2 font-[var(--font-heading)] text-lg font-extrabold tracking-[-0.025em] text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                                    {reason.title}
                                </h3>

                                <p className="mt-2.5 text-xs leading-6 text-slate-500 sm:text-[13px]">
                                    {reason.description}
                                </p>

                                {/* Learn More */}
                                <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 transition-colors duration-300 group-hover:text-blue-600">
                                    <span>Learn more</span>

                                    <ArrowUpRight
                                        size={13}
                                        strokeWidth={2}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>

                                {/* Hover Indicator */}
                                <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100 sm:left-5 sm:right-5 lg:left-6 lg:right-6" />
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;