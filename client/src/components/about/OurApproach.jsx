import { motion } from "framer-motion";
import {
    Brain,
    BookOpen,
    ClipboardCheck,
    TrendingUp,
    UserRound,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const steps = [
    {
        number: "01",
        title: "Understand",
        description:
            "Build a strong foundation by understanding the concept instead of only memorising formulas.",
        icon: Brain,
        formula: "Concept → Clarity",
    },
    {
        number: "02",
        title: "Practice",
        description:
            "Apply concepts through regular questions and structured mathematical practice.",
        icon: BookOpen,
        formula: "Practice → Accuracy",
    },
    {
        number: "03",
        title: "Evaluate",
        description:
            "Weekly tests help identify understanding, mistakes and topics that need more attention.",
        icon: ClipboardCheck,
        formula: "Test → Insight",
    },
    {
        number: "04",
        title: "Guide",
        description:
            "Students receive focused guidance when a topic or concept needs additional attention.",
        icon: UserRound,
        formula: "Guidance → Improvement",
    },
    {
        number: "05",
        title: "Progress",
        description:
            "Consistent learning and evaluation help students move forward with greater confidence.",
        icon: TrendingUp,
        formula: "Consistency → Progress",
    },
];

const OurApproach = () => {
    return (
        <section
            id="our-approach"
            className="relative overflow-hidden bg-white"
        >
            <MathPattern variant="grid" />

            <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                        Our Approach
                    </span>

                    <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.045em] text-slate-950">
                        A simple system for{" "}
                        <span className="text-blue-600">
                            meaningful progress.
                        </span>
                    </h2>

                    <p className="mt-5 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
                        Learning Mathematics is not just about solving more
                        questions. It is about understanding, applying,
                        evaluating and improving continuously.
                    </p>
                </motion.div>

                {/* Journey */}
                <div className="relative mt-14">
                    {/* Desktop connecting line */}
                    <div className="absolute left-[10%] right-[10%] top-16 hidden h-px bg-blue-100 lg:block" />

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
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
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -7,
                                    }}
                                    className="group relative"
                                >
                                    <div className="relative rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]">
                                        {/* Number */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-[12px] font-extrabold tracking-[0.12em] text-blue-600">
                                                {step.number}
                                            </span>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                                                <Icon size={19} />
                                            </div>
                                        </div>

                                        <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.025em] text-slate-950">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-[14px] leading-6 text-slate-600">
                                            {step.description}
                                        </p>

                                        <div className="mt-5 border-t border-slate-100 pt-4">
                                            <span className="text-[12px] font-bold text-blue-600">
                                                {step.formula}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;