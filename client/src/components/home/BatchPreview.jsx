import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarDays,
    Clock3,
    UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import MathPattern from "../common/MathPattern";

const batches = [
    {
        number: "01",
        type: "Morning",
        label: "Early Focus",
        time: "Morning Sessions",
        description:
            "A focused learning environment for students who prefer starting their academic routine early.",
        icon: "AM",
        accent: "blue",
    },
    {
        number: "02",
        type: "Evening",
        label: "After School",
        time: "Evening Sessions",
        description:
            "Convenient evening batches designed around students' regular school schedules.",
        icon: "PM",
        accent: "slate",
    },
];

const BatchPreview = () => {
    return (
        <section className="relative isolate overflow-hidden bg-transparent">
            {/* Consistent mathematical grid */}
            <MathPattern
                variant="grid"
                opacity="opacity-100"
                className="z-0"
            />

            {/* Mathematical atmosphere */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-36 top-1/2 z-0 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-blue-100/25 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-10 z-0 h-[300px] w-[300px] rounded-full border border-blue-100/50"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 top-24 z-0 h-[210px] w-[210px] rounded-full border border-dashed border-blue-100/60"
            />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end"
                >
                    <div>
                        <div className="flex items-center gap-2.5">
                            <CalendarDays
                                size={14}
                                strokeWidth={2}
                                className="text-blue-600"
                            />

                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                                Learning Schedule
                            </span>
                        </div>

                        <h2 className="mt-3 max-w-2xl font-[var(--font-heading)] text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                            Find the right
                            <span className="text-blue-600">
                                {" "}
                                batch.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-slate-500 lg:text-[15px]">
                        Morning and evening sessions provide flexible options
                        for Class 11 and Class 12 students while keeping the
                        learning environment focused and structured.
                    </p>
                </motion.div>

                {/* Batch schedule board */}
                <div className="relative mt-10">
                    {/* Central schedule line */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent lg:block"
                    />

                    <div className="grid gap-5 lg:grid-cols-2">
                        {batches.map((batch, index) => (
                            <motion.article
                                key={batch.number}
                                initial={{
                                    opacity: 0,
                                    x: index === 0 ? -25 : 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/65 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:bg-white/80 hover:shadow-[0_24px_65px_rgba(37,99,235,0.10)] sm:p-7"
                            >
                                {/* Top progress line */}
                                <div
                                    aria-hidden="true"
                                    className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100"
                                />

                                {/* Decorative circle */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-blue-100/70 transition-transform duration-700 group-hover:scale-110"
                                />

                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-7 -top-7 h-24 w-24 rounded-full border border-dashed border-blue-100 transition-transform duration-700 group-hover:rotate-12"
                                />

                                {/* Header */}
                                <div className="relative flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-[10px] font-extrabold tracking-wider text-white shadow-sm shadow-blue-200">
                                            {batch.icon}
                                        </span>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-[var(--font-heading)] text-[10px] font-extrabold tracking-[0.16em] text-blue-500">
                                                    {batch.number}
                                                </span>

                                                <span className="h-px w-5 bg-blue-200" />

                                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                                    {batch.label}
                                                </span>
                                            </div>

                                            <h3 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.035em] text-slate-950">
                                                {batch.type} Batch
                                            </h3>
                                        </div>
                                    </div>

                                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                                        Active
                                    </span>
                                </div>

                                {/* Time display */}
                                <div className="relative mt-7 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/50">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/70">
                                                <Clock3
                                                    size={16}
                                                    strokeWidth={1.9}
                                                />
                                            </span>

                                            <div>
                                                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-slate-400">
                                                    Session
                                                </p>

                                                <p className="mt-0.5 text-sm font-bold text-slate-800">
                                                    {batch.time}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.05em] text-blue-100 transition-colors duration-300 group-hover:text-blue-200">
                                            {batch.icon}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="relative mt-5 max-w-lg text-sm leading-7 text-slate-500">
                                    {batch.description}
                                </p>

                                {/* Batch information */}
                                <div className="relative mt-6 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl border border-slate-200/70 bg-white/60 px-3.5 py-3">
                                        <div className="flex items-center gap-2">
                                            <UsersRound
                                                size={14}
                                                strokeWidth={1.9}
                                                className="text-blue-500"
                                            />

                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Capacity
                                            </span>
                                        </div>

                                        <p className="mt-1.5 text-sm font-bold text-slate-800">
                                            Flexible
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200/70 bg-white/60 px-3.5 py-3">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays
                                                size={14}
                                                strokeWidth={1.9}
                                                className="text-blue-500"
                                            />

                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Schedule
                                            </span>
                                        </div>

                                        <p className="mt-1.5 text-sm font-bold text-slate-800">
                                            Teacher Guided
                                        </p>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="relative mt-6 flex items-center justify-between border-t border-slate-200/60 pt-5">
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                            Classes
                                        </p>

                                        <p className="mt-1 text-xs font-bold text-slate-700">
                                            11 & 12 Mathematics
                                        </p>
                                    </div>

                                    <Link
                                        to="/batches"
                                        className="group/link inline-flex items-center gap-2 text-xs font-bold text-blue-600"
                                    >
                                        View batches

                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover/link:bg-blue-600 group-hover/link:text-white">
                                            <ArrowRight
                                                size={13}
                                                strokeWidth={2.3}
                                            />
                                        </span>
                                    </Link>
                                </div>

                                <span className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400"
                >
                    <span className="h-px w-7 bg-blue-200" />

                    <span>
                        Batch timings may be adjusted according to academic
                        requirements
                    </span>

                    <span className="h-px w-7 bg-blue-200" />
                </motion.div>
            </div>
        </section>
    );
};

export default BatchPreview;