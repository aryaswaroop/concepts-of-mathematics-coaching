import { motion } from "framer-motion";

import MathPattern from "../common/MathPattern";

const stats = [
    {
        number: "01",
        value: "11 & 12",
        label: "Senior Secondary",
        description: "Focused Mathematics coaching",
    },
    {
        number: "02",
        value: "Weekly",
        label: "Assessments",
        description: "Regular practice and evaluation",
    },
    {
        number: "03",
        value: "2",
        label: "Focused Courses",
        description: "Class 11 and Class 12 Mathematics",
    },
    {
        number: "04",
        value: "1:1",
        label: "Personal Guidance",
        description: "Additional academic support",
    },
];

const StatsSection = () => {
    return (
        <section className="relative isolate overflow-hidden bg-transparent">
            {/* Same mathematical background pattern */}
            <MathPattern
                variant="grid"
                opacity="opacity-100"
                className="z-0"
            />

            {/* Soft blue atmospheric glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-1/2 z-0 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-[-100px] z-0 h-[300px] w-[300px] rounded-full bg-blue-100/25 blur-3xl"
            />

            {/* Mathematical orbit */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 top-1/2 z-0 h-64 w-64 -translate-y-1/2 rounded-full border border-blue-100/50"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 top-1/2 z-0 h-40 w-40 -translate-y-1/2 rounded-full border border-dashed border-blue-100/60"
            />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.8fr_2.2fr] lg:items-center">
                    {/* Section Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2.5">
                            <span className="h-px w-7 bg-blue-600" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
                                Our Approach
                            </span>
                        </div>

                        <h2 className="mt-2 max-w-xs font-[var(--font-heading)] text-xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-2xl">
                            Learn with
                            <span className="text-blue-600">
                                {" "}
                                purpose.
                            </span>
                        </h2>

                        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">
                            A focused academic environment built around
                            understanding, practice and progress.
                        </p>
                    </motion.div>

                    {/* Glassmorphism Statistics */}
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.article
                                key={stat.number}
                                initial={{
                                    opacity: 0,
                                    y: 14,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.07,
                                }}
                                whileHover={{
                                    y: -4,
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200/80 hover:bg-white/70 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)] sm:p-5"
                            >
                                {/* Glass highlight */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                                />

                                {/* Subtle card glow */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-100/40 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                                />

                                {/* Number + line */}
                                <div className="relative flex items-center justify-between">
                                    <span className="font-[var(--font-heading)] text-[10px] font-extrabold tracking-[0.16em] text-blue-500">
                                        {stat.number}
                                    </span>

                                    <span className="h-px w-5 bg-blue-200 transition-all duration-300 group-hover:w-8 group-hover:bg-blue-400" />
                                </div>

                                {/* Main value */}
                                <p className="relative mt-4 font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.04em] text-slate-950 transition-colors duration-300 group-hover:text-blue-600 sm:text-[1.7rem]">
                                    {stat.value}
                                </p>

                                {/* Label */}
                                <p className="relative mt-1 text-xs font-bold text-slate-700 sm:text-sm">
                                    {stat.label}
                                </p>

                                {/* Description */}
                                <p className="relative mt-1 max-w-[155px] text-[10px] leading-4 text-slate-400 sm:text-xs">
                                    {stat.description}
                                </p>

                                {/* Bottom interaction indicator */}
                                <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100 sm:left-5 sm:right-5" />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;