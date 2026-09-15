import {
    ArrowRight,
    BarChart3,
    CalendarDays,
    CheckCircle2,
    ClipboardCheck,
    Clock3,
    FileText,
    Target,
    Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const assessmentTypes = [
    {
        icon: ClipboardCheck,
        title: "Weekly Tests",
        description:
            "Regular assessments help you check your understanding and maintain consistency.",
    },
    {
        icon: Target,
        title: "Topic Coverage",
        description:
            "Test scope may include current or previously covered mathematics topics.",
    },
    {
        icon: BarChart3,
        title: "Performance Tracking",
        description:
            "Your test activity and results can be reviewed to identify areas for improvement.",
    },
];

const StudentTests = () => {
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
                            Assessment centre
                        </div>

                        <h1 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Tests & Results
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                            Stay updated with your assessments, results and
                            mathematics performance journey.
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

            {/* Assessment Overview */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {[
                        {
                            icon: ClipboardCheck,
                            label: "Upcoming Tests",
                            value: "Data pending",
                        },
                        {
                            icon: CheckCircle2,
                            label: "Completed Tests",
                            value: "Data pending",
                        },
                        {
                            icon: FileText,
                            label: "Results Available",
                            value: "Data pending",
                        },
                        {
                            icon: Trophy,
                            label: "Performance",
                            value: "Being tracked",
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

            {/* Upcoming Test */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative overflow-hidden rounded-2xl bg-slate-950 p-5 text-white shadow-[0_20px_55px_rgba(15,23,42,0.14)] sm:p-7"
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
                        className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"
                    />

                    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                                    <CalendarDays size={18} />
                                </span>

                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                                    Next assessment
                                </span>
                            </div>

                            <h2 className="font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">
                                Your upcoming test will appear here
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                                Once your test schedule is available, you will
                                be able to see the test title, date, timing and
                                relevant topic information here.
                            </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm">
                            <Clock3
                                size={18}
                                className="text-blue-300"
                            />

                            <div>
                                <p className="text-xs text-slate-500">
                                    Schedule
                                </p>
                                <p className="text-sm font-bold text-white">
                                    Awaiting test data
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Assessment Philosophy */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 md:grid-cols-3">
                    {assessmentTypes.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.15 + index * 0.05,
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

            {/* Empty Recent Tests */}
            <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-8 text-center shadow-sm"
                >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <ClipboardCheck size={21} />
                    </div>

                    <h2 className="mt-4 text-lg font-extrabold text-slate-900">
                        Test history will appear here
                    </h2>

                    <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                        Your completed tests and assessment history will be
                        displayed here when test data becomes available.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default StudentTests;