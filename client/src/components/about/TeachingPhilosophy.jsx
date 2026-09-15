import { motion } from "framer-motion";
import {
    Lightbulb,
    Repeat2,
    Target,
    UserCheck,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const principles = [
    {
        icon: Lightbulb,
        symbol: "01",
        title: "Clarity before complexity",
        description:
            "A strong understanding of the basic idea makes difficult problems easier to approach.",
    },
    {
        icon: Repeat2,
        symbol: "02",
        title: "Practice creates confidence",
        description:
            "Regular problem solving helps students turn concepts into reliable mathematical skills.",
    },
    {
        icon: Target,
        symbol: "03",
        title: "Focus on improvement",
        description:
            "Tests and mistakes are used to understand where additional effort is required.",
    },
    {
        icon: UserCheck,
        symbol: "04",
        title: "Guidance when needed",
        description:
            "Students who need additional support can receive focused time and explanation.",
    },
];

const TeachingPhilosophy = () => {
    return (
        <section
            id="teaching-philosophy"
            className="relative overflow-hidden bg-slate-50/70"
        >
            <MathPattern variant="grid" />

            <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                            Teaching Philosophy
                        </span>

                        <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.045em] text-slate-950">
                            Strong concepts create{" "}
                            <span className="text-blue-600">
                                stronger problem solvers.
                            </span>
                        </h2>

                        <p className="mt-6 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
                            The focus is on helping students understand why a
                            mathematical method works, how to apply it and
                            how to recognise the right approach when solving
                            unfamiliar problems.
                        </p>

                        {/* Equation */}
                        <div className="mt-8 rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-blue-500">
                                Teaching equation
                            </span>

                            <div className="mt-4 flex flex-wrap items-center gap-2 text-[20px] font-extrabold tracking-tight text-slate-900 sm:text-[24px]">
                                <span>Understand</span>
                                <span className="text-blue-500">+</span>
                                <span>Practice</span>
                                <span className="text-blue-500">+</span>
                                <span>Evaluate</span>
                                <span className="text-blue-500">=</span>
                                <span className="text-blue-600">
                                    Improve
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {principles.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.symbol}
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
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.09)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                                            <Icon size={20} />
                                        </div>

                                        <span className="text-[12px] font-extrabold text-blue-600/50">
                                            {item.symbol}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-[19px] font-extrabold tracking-[-0.025em] text-slate-950">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-[14px] leading-6 text-slate-600">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeachingPhilosophy;