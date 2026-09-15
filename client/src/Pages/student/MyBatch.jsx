import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Clock3,
    GraduationCap,
    Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const batchHighlights = [
    {
        icon: GraduationCap,
        label: "Course",
        value: "Mathematics",
        description: "Your assigned mathematics course",
    },
    {
        icon: Clock3,
        label: "Schedule",
        value: "Teacher Managed",
        description: "Class timings are managed by the teacher",
    },
    {
        icon: CalendarDays,
        label: "Weekly Plan",
        value: "Regular Classes",
        description: "Follow your assigned batch schedule",
    },
    {
        icon: Users,
        label: "Batch Structure",
        value: "Capacity Controlled",
        description: "Batch size is managed for effective learning",
    },
];

const learningNotes = [
    "Attend your scheduled classes regularly.",
    "Follow the batch timing communicated by the teacher.",
    "Weekly tests and assessments are conducted as part of the learning process.",
    "Additional guidance may be provided when extra support is needed.",
];

const MyBatch = () => {
    return (
        <div className="relative">
            {/* Page Header */}
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
                            Learning workspace
                        </div>

                        <h1 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            My Batch
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                            View your current class, schedule and batch
                            structure in one place.
                        </p>
                    </div>

                    <Link
                        to="/student/learning"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                    >
                        My Learning
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>

            {/* Current Batch */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="relative overflow-hidden rounded-2xl bg-slate-950 p-5 text-white shadow-[0_20px_55px_rgba(15,23,42,0.14)] sm:p-7"
                >
                    {/* Mathematical accents */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />

                    <div
                        aria-hidden="true"
                        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"
                    />

                    <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                                    <CheckCircle2 size={13} />
                                    Assigned Batch
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                                    Mathematics
                                </span>
                            </div>

                            <p className="text-sm font-semibold text-blue-300">
                                Current Batch
                            </p>

                            <h2 className="mt-1 font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">
                                Your assigned learning batch
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                                Your exact batch name, class timing and weekly
                                schedule will appear here once your student
                                account is connected with the coaching
                                system.
                            </p>
                        </div>

                        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm lg:min-w-[260px]">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                Teacher
                            </p>

                            <p className="mt-2 text-lg font-bold text-white">
                                Assigned by Coaching Centre
                            </p>

                            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="h-2 w-2 rounded-full bg-blue-400" />
                                Teacher-managed batch
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Batch Highlights */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {batchHighlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.08 + index * 0.05,
                                }}
                                whileHover={{ y: -3 }}
                                className="group rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-shadow duration-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                                        <Icon size={19} />
                                    </div>

                                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                                    {item.label}
                                </p>

                                <h3 className="mt-1 text-base font-extrabold text-slate-900">
                                    {item.value}
                                </h3>

                                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Schedule + Structure */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
                    {/* Schedule */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-6"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                    Weekly schedule
                                </p>

                                <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                    Your class routine
                                </h2>
                            </div>

                            <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 sm:flex">
                                <CalendarDays size={19} />
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-center">
                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                                <Clock3 size={20} />
                            </div>

                            <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                                Schedule information will appear here
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-500">
                                Your assigned timing and weekly class schedule
                                will be loaded from the coaching system once
                                the student account is connected.
                            </p>
                        </div>
                    </motion.div>

                    {/* Structure */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-6"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                            Batch structure
                        </p>

                        <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                            How your batch works
                        </h2>

                        <div className="mt-5 space-y-3">
                            {[
                                "Teacher-managed timing",
                                "Capacity-controlled batches",
                                "Regular mathematics classes",
                                "Flexible batch management",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[11px] font-extrabold text-blue-600">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-semibold text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Learning Guidance */}
            <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6"
                >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                Batch guidance
                            </p>

                            <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                Make the most of your batch
                            </h2>

                            <div className="mt-4 grid gap-2 sm:grid-cols-2">
                                {learningNotes.map((note) => (
                                    <div
                                        key={note}
                                        className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
                                    >
                                        <CheckCircle2
                                            size={16}
                                            className="mt-0.5 shrink-0 text-blue-600"
                                        />
                                        <span>{note}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link
                            to="/student/support"
                            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg"
                        >
                            Need guidance?
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default MyBatch;