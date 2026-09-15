import {
    ArrowRight,
    BookOpenCheck,
    CalendarClock,
    CheckCircle2,
    Headphones,
    MessageCircle,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const supportTypes = [
    {
        icon: BookOpenCheck,
        title: "Academic Guidance",
        description:
            "Get additional guidance when you need help understanding a mathematics concept or topic.",
    },
    {
        icon: CalendarClock,
        title: "Extra Support",
        description:
            "Additional support sessions may be arranged by the teacher when required.",
    },
    {
        icon: MessageCircle,
        title: "Ask for Help",
        description:
            "Raise a support request so your concern can be reviewed by the coaching centre.",
    },
];

const StudentSupport = () => {
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
                            <Headphones size={13} />
                            Personal guidance
                        </div>

                        <h1 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Support
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                            Get academic guidance and additional support when
                            you need help with your mathematics journey.
                        </p>
                    </div>

                    <Link
                        to="/student/learning"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                    >
                        Back to Learning
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>

            {/* Support Hero */}
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
                                <Sparkles size={21} />
                            </div>

                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                                Student support
                            </p>

                            <h2 className="mt-2 max-w-2xl font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">
                                You don't have to struggle with a concept alone.
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                                If you need extra academic guidance, support
                                can be arranged according to your learning
                                needs and teacher availability.
                            </p>
                        </div>

                        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300">
                                <Headphones size={36} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Support Types */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 md:grid-cols-3">
                    {supportTypes.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.1 + index * 0.05,
                                }}
                                whileHover={{ y: -3 }}
                                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm"
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

            {/* Support Request */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-6"
                >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                Support requests
                            </p>

                            <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                Need additional guidance?
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                Your support requests and teacher-assigned
                                support sessions will appear here once the
                                student support system is connected.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg"
                        >
                            Request Support
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Support Sessions */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                            Support sessions
                        </p>

                        <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                            Your additional guidance
                        </h2>

                        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-8 text-center">
                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                                <CalendarClock size={20} />
                            </div>

                            <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                                No support sessions recorded yet
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-500">
                                Scheduled or completed support sessions will
                                appear here once they are recorded.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                            <CheckCircle2 size={19} />
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                            Learning support
                        </p>

                        <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                            Focus on understanding
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Use support sessions to clarify concepts, work
                            through difficult problems and strengthen areas
                            where you need more practice.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bottom */}
            <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-6 text-center">
                    <p className="text-sm font-semibold text-slate-600">
                        Consistent practice + timely guidance = stronger
                        mathematical confidence.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default StudentSupport;