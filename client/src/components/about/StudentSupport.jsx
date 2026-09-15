import { motion } from "framer-motion";
import {
    Clock3,
    MessageCircle,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const supportPoints = [
    {
        icon: MessageCircle,
        title: "Personal Guidance",
        description:
            "Students can receive focused explanation when a concept or topic requires additional attention.",
    },
    {
        icon: Clock3,
        title: "Additional Support",
        description:
            "Extra time may be provided before a batch when a student needs more help with difficult areas.",
    },
    {
        icon: ShieldCheck,
        title: "Continuous Attention",
        description:
            "Regular tests and classroom interaction help identify where students may need improvement.",
    },
    {
        icon: Sparkles,
        title: "Encouragement",
        description:
            "Consistent effort and good performance are recognised to encourage students to keep improving.",
    },
];

const StudentSupport = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50/70">
            <MathPattern variant="grid" />

            <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="sticky top-28 rounded-[2rem] border border-blue-100 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-9">

                            <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                Student Support
                            </span>

                            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.045em] text-slate-950">
                                No student should feel{" "}
                                <span className="text-blue-600">
                                    left behind.
                                </span>
                            </h2>

                            <p className="mt-6 text-[16px] leading-7 text-slate-600">
                                Students learn at different speeds. When a
                                concept needs more time, the approach can be
                                adjusted to provide additional explanation,
                                practice and guidance.
                            </p>

                            <div className="mt-8 rounded-2xl bg-blue-50/70 p-5">
                                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                    Support equation
                                </p>

                                <p className="mt-3 text-[22px] font-extrabold tracking-tight text-slate-950">
                                    Attention
                                    <span className="mx-2 text-blue-500">
                                        +
                                    </span>
                                    Guidance
                                    <span className="mx-2 text-blue-500">
                                        =
                                    </span>
                                    Confidence
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Support cards */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {supportPoints.map((point, index) => {
                            const Icon = point.icon;

                            return (
                                <motion.div
                                    key={point.title}
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
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="mt-6 text-[20px] font-extrabold tracking-[-0.025em] text-slate-950">
                                        {point.title}
                                    </h3>

                                    <p className="mt-3 text-[14px] leading-6 text-slate-600">
                                        {point.description}
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

export default StudentSupport;