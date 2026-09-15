import { motion } from "framer-motion";
import {
    BarChart3,
    ClipboardCheck,
    Lightbulb,
    Target,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const steps = [
    {
        number: "01",
        title: "Weekly Test",
        description:
            "Students regularly attempt tests based on the topics decided by the teacher.",
        icon: ClipboardCheck,
    },
    {
        number: "02",
        title: "Evaluation",
        description:
            "Test responses are evaluated so that actual understanding and performance can be observed.",
        icon: BarChart3,
    },
    {
        number: "03",
        title: "Performance",
        description:
            "Marks and performance information help identify strengths and areas that need more attention.",
        icon: Target,
    },
    {
        number: "04",
        title: "Improvement",
        description:
            "Students receive focused guidance and additional support where improvement is needed.",
        icon: Lightbulb,
    },
];

const TestCycle = () => {
    return (
        <section
            id="test-cycle"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                        Assessment System
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                        A simple cycle that turns testing into progress.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Tests are not treated only as examinations. They form
                        a continuous feedback loop between practice,
                        evaluation and improvement.
                    </p>
                </div>

                <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    <div className="pointer-events-none absolute left-[12%] right-[12%] top-16 hidden h-px bg-blue-100 lg:block" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -5 }}
                                className="relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur"
                            >
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <Icon size={20} />
                                    </div>

                                    <span className="text-xs font-extrabold text-slate-300">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-lg font-extrabold text-slate-950">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TestCycle;