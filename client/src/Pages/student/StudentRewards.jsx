import {
    ArrowRight,
    Award,
    Gift,
    Medal,
    Sparkles,
    Star,
    Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rewardAreas = [
    {
        icon: Trophy,
        title: "Performance Recognition",
        description:
            "Strong performance in weekly or monthly assessments can be recognised through the coaching centre's reward system.",
    },
    {
        icon: Medal,
        title: "Consistent Progress",
        description:
            "Rewards can also recognise meaningful improvement and consistent academic effort.",
    },
    {
        icon: Gift,
        title: "Achievement Rewards",
        description:
            "Eligible students may receive gifts or other recognition based on teacher-decided criteria.",
    },
];

const StudentRewards = () => {
    return (
        <div className="relative">
            {/* Header */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-7 sm:px-6 lg:px-7 lg:pt-9">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
                >
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 shadow-sm backdrop-blur">
                            <Sparkles size={13} />
                            Achievements
                        </div>

                        <h1 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Rewards
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                            Recognition for strong performance, consistent
                            effort and meaningful academic improvement.
                        </p>
                    </div>

                    <Link
                        to="/student/results"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                    >
                        View Results
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>

            {/* Recognition Hero */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-[0_20px_55px_rgba(15,23,42,0.14)] sm:p-8"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />

                    <div
                        aria-hidden="true"
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
                    />

                    <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-blue-300">
                                <Award size={21} />
                            </div>

                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                                Your achievements
                            </p>

                            <h2 className="mt-2 max-w-2xl font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">
                                Every improvement is part of the journey.
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                                The coaching system can record achievements
                                and rewards earned through academic performance
                                and consistent effort.
                            </p>
                        </div>

                        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300">
                                <Trophy size={38} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Reward Overview */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 sm:grid-cols-3">
                    {[
                        {
                            icon: Trophy,
                            label: "Achievements",
                            value: "Data pending",
                        },
                        {
                            icon: Gift,
                            label: "Rewards",
                            value: "Data pending",
                        },
                        {
                            icon: Star,
                            label: "Recognition",
                            value: "Teacher managed",
                        },
                    ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.1 + index * 0.05,
                                }}
                                whileHover={{ y: -3 }}
                                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                                    <Icon size={19} />
                                </div>

                                <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                                    {item.label}
                                </p>

                                <h3 className="mt-1 text-base font-extrabold text-slate-900">
                                    {item.value}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Reward Philosophy */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 md:grid-cols-3">
                    {rewardAreas.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.2 + index * 0.05,
                                }}
                                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={19} />
                                </div>

                                <h3 className="mt-5 text-base font-extrabold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Empty Rewards */}
            <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-8 text-center shadow-sm"
                >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Gift size={21} />
                    </div>

                    <h2 className="mt-4 text-lg font-extrabold text-slate-900">
                        Your rewards will appear here
                    </h2>

                    <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                        Once an achievement or reward is recorded for your
                        account, its details will be displayed in this
                        workspace.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default StudentRewards;