import { motion } from "framer-motion";
import {
    Clock3,
    MessageCircle,
    Target,
    UserRoundCheck,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const supportItems = [
    {
        icon: Target,
        title: "Identify Weak Areas",
        text: "Test performance can highlight topics that need additional attention.",
    },
    {
        icon: Clock3,
        title: "Additional Time",
        text: "Students who need more support may receive additional guidance time.",
    },
    {
        icon: MessageCircle,
        title: "Personal Guidance",
        text: "The teacher can provide focused explanation and support where required.",
    },
    {
        icon: UserRoundCheck,
        title: "Keep Improving",
        text: "The goal is to turn feedback into practical improvement in future tests.",
    },
];

const ImprovementSupport = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-7">
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-blue-400/20" />
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-blue-400/20" />

                    <div className="relative z-10">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                            Improvement Support
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                            A low score should be a starting point, not an
                            endpoint.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                            When a student struggles, the focus shifts toward
                            understanding the gap, providing guidance and
                            helping the student improve.
                        </p>

                        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                                Learning equation
                            </p>

                            <p className="mt-3 text-xl font-extrabold">
                                Feedback
                                <span className="mx-2 text-blue-400">
                                    +
                                </span>
                                Guidance
                                <span className="mx-2 text-blue-400">
                                    =
                                </span>
                                Improvement
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {supportItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={20} />
                                </div>

                                <h3 className="mt-5 font-extrabold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImprovementSupport;