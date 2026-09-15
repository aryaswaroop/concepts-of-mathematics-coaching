import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    FileText,
    Lightbulb,
    Target,
    Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const resultAreas = [
    {
        icon: Target,
        title: "Score Analysis",
        description:
            "Your marks and subject performance will be shown here after results are published.",
    },
    {
        icon: Trophy,
        title: "Ranking",
        description:
            "Test ranking information will become available when the corresponding result data is recorded.",
    },
    {
        icon: BarChart3,
        title: "Progress",
        description:
            "Your performance trend can be tracked across completed assessments.",
    },
];

const StudentResults = () => {
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
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            Performance insights
                        </div>

                        <h1 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Results
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                            Review your assessment outcomes and understand
                            where you can improve.
                        </p>
                    </div>

                    <Link
                        to="/student/tests"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                    >
                        Tests Centre
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>

            {/* Result Overview */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {[
                        {
                            icon: FileText,
                            label: "Published Results",
                            value: "Data pending",
                        },
                        {
                            icon: Target,
                            label: "Latest Score",
                            value: "Not available",
                        },
                        {
                            icon: Trophy,
                            label: "Latest Rank",
                            value: "Not available",
                        },
                        {
                            icon: BarChart3,
                            label: "Progress Trend",
                            value: "Building data",
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
                                    delay: index * 0.05,
                                }}
                                whileHover={{ y: -3 }}
                                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                                        <Icon size={19} />
                                    </div>

                                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
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

            {/* Performance Workspace */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
                    {/* Chart shell */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-6"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                    Performance
                                </p>

                                <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                    Performance trend
                                </h2>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                                <BarChart3 size={19} />
                            </div>
                        </div>

                        <div className="relative mt-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-200 bg-slate-50/70">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 opacity-50"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)",
                                    backgroundSize: "28px 28px",
                                }}
                            />

                            <div className="relative text-center">
                                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                                    <BarChart3 size={20} />
                                </div>

                                <p className="mt-4 text-sm font-extrabold text-slate-900">
                                    Performance data will appear here
                                </p>

                                <p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">
                                    A visual progress trend will be generated
                                    from your completed test results.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Improvement */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                            <Lightbulb size={19} />
                        </div>

                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                            Improvement
                        </p>

                        <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                            Keep improving
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Results are not only about marks. Use assessment
                            feedback to understand concepts, practise weak
                            areas and build stronger mathematical confidence.
                        </p>

                        <Link
                            to="/student/support"
                            className="group mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-600"
                        >
                            Get guidance
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Result Areas */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 md:grid-cols-3">
                    {resultAreas.map((item, index) => {
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

            {/* Empty Results */}
            <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-8 text-center shadow-sm"
                >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <CheckCircle2 size={21} />
                    </div>

                    <h2 className="mt-4 text-lg font-extrabold text-slate-900">
                        Results will appear here
                    </h2>

                    <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                        Once your teacher publishes test results, your scores,
                        ranking and performance information will be available
                        in this workspace.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default StudentResults;