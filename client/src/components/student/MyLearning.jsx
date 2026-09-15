import {
    ArrowRight,
    BookOpen,
    Brain,
    CheckCircle2,
    Library,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const MyLearning = () => {
    return (
        <div className="pb-10">
            {/* Header */}
            <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
                <div className="mx-auto max-w-[1280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                            <BookOpen
                                size={13}
                                className="text-blue-600"
                            />

                            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-700">
                                Academic journey
                            </span>
                        </div>

                        <h2 className="mt-3 font-[var(--font-heading)] text-[28px] font-extrabold tracking-[-0.045em] text-slate-950 sm:text-[34px]">
                            My Learning
                        </h2>

                        <p className="mt-2 max-w-2xl text-[13px] leading-6 text-slate-500">
                            Everything related to your mathematics learning
                            journey, course resources and academic progress
                            in one place.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="space-y-4">
                {/* Current Course */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative mx-auto max-w-[1280px] overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:p-7"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        />

                        <span className="absolute -right-2 -top-7 select-none font-serif text-[120px] font-bold leading-none text-white/[0.04]">
                            π
                        </span>

                        <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                                    Current course
                                </p>

                                <h3 className="mt-2 font-[var(--font-heading)] text-[25px] font-extrabold tracking-[-0.04em] sm:text-[30px]">
                                    Mathematics
                                </h3>

                                <p className="mt-2 max-w-xl text-[12px] leading-5 text-slate-400">
                                    Your enrolled Class 11 or Class 12
                                    Mathematics course will appear here.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                    <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-500">
                                        Status
                                    </p>

                                    <p className="mt-1 text-[12px] font-bold text-white">
                                        Active learning
                                    </p>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                                    <Brain size={21} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Learning Journey */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-[1280px] gap-4 xl:grid-cols-[1.35fr_0.75fr]">
                        <LearningJourney />
                        <StudyResources />
                    </div>
                </section>

                {/* Activity */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <LearningActivity />
                </section>
            </div>
        </div>
    );
};

const LearningJourney = () => {
    const stages = [
        {
            number: "01",
            title: "Concept Clarity",
            description:
                "Build understanding before moving toward practice.",
            active: true,
        },
        {
            number: "02",
            title: "Practice",
            description:
                "Strengthen concepts through consistent problem solving.",
        },
        {
            number: "03",
            title: "Assessment",
            description:
                "Evaluate understanding through regular tests.",
        },
        {
            number: "04",
            title: "Improvement",
            description:
                "Use performance insights to identify areas needing attention.",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
        >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                Learning framework
            </p>

            <h3 className="mt-1.5 font-[var(--font-heading)] text-[19px] font-extrabold tracking-[-0.035em] text-slate-950">
                Your academic journey
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stages.map((stage) => (
                    <div
                        key={stage.number}
                        className={`rounded-xl border p-4 transition ${stage.active
                                ? "border-blue-100 bg-blue-50/60"
                                : "border-slate-200 bg-slate-50/40"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <span
                                className={`text-[10px] font-extrabold ${stage.active
                                        ? "text-blue-600"
                                        : "text-slate-400"
                                    }`}
                            >
                                {stage.number}
                            </span>

                            {stage.active ? (
                                <CheckCircle2
                                    size={15}
                                    className="text-blue-600"
                                />
                            ) : (
                                <span className="h-2 w-2 rounded-full bg-slate-300" />
                            )}
                        </div>

                        <h4 className="mt-5 text-[13px] font-extrabold text-slate-800">
                            {stage.title}
                        </h4>

                        <p className="mt-1 text-[10px] leading-5 text-slate-400">
                            {stage.description}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const StudyResources = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Library size={17} />
            </div>

            <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                Study resources
            </p>

            <h3 className="mt-1.5 font-[var(--font-heading)] text-[19px] font-extrabold tracking-[-0.035em] text-slate-950">
                Your study material
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-slate-400">
                Available learning resources will be organized here.
            </p>

            <div className="mt-5 space-y-2">
                {["NCERT", "R.D. Sharma", "Other study resources"].map(
                    (resource) => (
                        <div
                            key={resource}
                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-3"
                        >
                            <span className="text-[11px] font-bold text-slate-700">
                                {resource}
                            </span>

                            <ArrowRight
                                size={14}
                                className="text-slate-300"
                            />
                        </div>
                    )
                )}
            </div>
        </motion.div>
    );
};

const LearningActivity = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-[1280px] rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
        >
            <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Sparkles size={17} />
                </div>

                <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                        Learning activity
                    </p>

                    <h3 className="mt-1 font-[var(--font-heading)] text-[17px] font-extrabold tracking-[-0.03em] text-slate-950">
                        Your recent learning activity
                    </h3>

                    <p className="mt-1 text-[11px] text-slate-400">
                        Lessons, practice activity and academic actions
                        will appear here as you use the portal.
                    </p>
                </div>
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 py-8 text-center">
                <p className="text-[11px] font-bold text-slate-600">
                    Learning activity will appear here
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                    Your activity timeline will be connected during API
                    integration.
                </p>
            </div>
        </motion.div>
    );
};

export default MyLearning;