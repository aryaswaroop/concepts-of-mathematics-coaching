import { motion } from "framer-motion";
import {
    BookMarked,
    ClipboardCheck,
    MessageCircle,
    Target,
    UsersRound,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const benefits = [
    {
        icon: Target,
        title: "Concept Clarity",
        description:
            "Focus on understanding mathematical ideas instead of relying only on memorisation.",
    },
    {
        icon: ClipboardCheck,
        title: "Regular Testing",
        description:
            "Weekly tests help students practise under assessment conditions and understand their progress.",
    },
    {
        icon: MessageCircle,
        title: "Personal Guidance",
        description:
            "Students can receive additional attention and guidance when they need support.",
    },
    {
        icon: BookMarked,
        title: "Trusted Study Resources",
        description:
            "Learning is supported through NCERT, R.D. Sharma and additional study material.",
    },
    {
        icon: UsersRound,
        title: "Focused Learning Environment",
        description:
            "A dedicated Mathematics-focused environment keeps learning centred around the subject.",
    },
];

const CourseBenefits = () => {
    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">

                <div className="grid items-end gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Why This Approach
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            A learning system designed around
                            <span className="text-blue-600">
                                {" "}progress.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
                        Mathematics improves through the combination of
                        understanding, practice, evaluation and timely
                        guidance. The course structure brings these elements
                        together in one focused learning journey.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;

                        return (
                            <motion.div
                                key={benefit.title}
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
                                    delay: index * 0.07,
                                }}
                                whileHover={{
                                    y: -4,
                                }}
                                className={`group rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur-xl ${index === 0
                                        ? "lg:col-span-2"
                                        : ""
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <span className="font-mono text-xs text-slate-300">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-lg font-extrabold text-slate-950">
                                    {benefit.title}
                                </h3>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CourseBenefits;