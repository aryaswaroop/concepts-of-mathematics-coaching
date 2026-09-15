import { motion } from "framer-motion";
import {
    Brain,
    CheckCircle2,
    LineChart,
    PenTool,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const outcomes = [
    {
        number: "01",
        icon: Brain,
        title: "Understand Concepts",
        description:
            "Develop clearer understanding of mathematical concepts before moving toward complex problems.",
        formula: "Concept → Clarity",
    },
    {
        number: "02",
        icon: PenTool,
        title: "Practise Problems",
        description:
            "Build accuracy and confidence through regular problem solving and practice.",
        formula: "Practice → Accuracy",
    },
    {
        number: "03",
        icon: LineChart,
        title: "Track Progress",
        description:
            "Use regular tests and evaluation to identify strengths and areas that need improvement.",
        formula: "Test → Insight",
    },
    {
        number: "04",
        icon: CheckCircle2,
        title: "Improve Consistently",
        description:
            "Use guidance and repeated practice to strengthen weaker areas over time.",
        formula: "Guidance → Progress",
    },
];

const LearningOutcomes = () => {
    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">

                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                        Learning Outcomes
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                        More than completing the syllabus.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        The goal is to help students understand Mathematics,
                        practise effectively and steadily improve their
                        performance.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {outcomes.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.number}
                                initial={{
                                    opacity: 0,
                                    y: 20,
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
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className="group rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <span className="font-mono text-xs font-bold text-slate-300">
                                        {item.number}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-lg font-extrabold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {item.description}
                                </p>

                                <div className="mt-5 border-t border-slate-100 pt-4 font-mono text-xs font-semibold text-blue-600">
                                    {item.formula}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LearningOutcomes;