import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Circle,
} from "lucide-react";

const LearningOverview = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1280px] gap-4 xl:grid-cols-[1.45fr_0.9fr]">
                {/* Learning Journey */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                                Academic journey
                            </p>

                            <h3 className="mt-1.5 font-[var(--font-heading)] text-[19px] font-extrabold tracking-[-0.035em] text-slate-950">
                                Your learning overview
                            </h3>

                            <p className="mt-1 text-[12px] text-slate-400">
                                Your course activity will appear here.
                            </p>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:flex">
                            <BookOpen size={17} />
                        </div>
                    </div>

                    {/* Journey */}
                    <div className="mt-7">
                        <div className="relative">
                            <div className="absolute left-[15px] top-3 h-[calc(100%-24px)] w-px bg-slate-200" />

                            <div className="space-y-6">
                                <JourneyItem
                                    icon={<CheckCircle2 size={15} />}
                                    title="Course enrolled"
                                    description="Your active course will appear here."
                                    active
                                />

                                <JourneyItem
                                    icon={<Circle size={15} />}
                                    title="Learning progress"
                                    description="Topics and chapters will be tracked here."
                                />

                                <JourneyItem
                                    icon={<Circle size={15} />}
                                    title="Assessment progress"
                                    description="Test activity will connect here."
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Learning Card */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                    className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-5 sm:p-6"
                >
                    <div
                        aria-hidden="true"
                        className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-100/70 blur-2xl"
                    />

                    <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                            <BookOpen size={17} />
                        </div>

                        <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                            Keep learning
                        </p>

                        <h3 className="mt-2 font-[var(--font-heading)] text-[21px] font-extrabold tracking-[-0.035em] text-slate-950">
                            Strong concepts create stronger results.
                        </h3>

                        <p className="mt-2 text-[12px] leading-5 text-slate-500">
                            Your lessons, course resources and learning
                            activity will be organized in one place.
                        </p>

                        <button
                            type="button"
                            className="group mt-6 inline-flex items-center gap-2 text-[12px] font-bold text-blue-600"
                        >
                            Explore learning
                            <ArrowRight
                                size={15}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const JourneyItem = ({
    icon,
    title,
    description,
    active = false,
}) => {
    return (
        <div className="relative flex gap-4">
            <div
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${active
                        ? "border-blue-200 bg-blue-50 text-blue-600"
                        : "border-slate-200 bg-white text-slate-300"
                    }`}
            >
                {icon}
            </div>

            <div className="pt-0.5">
                <p className="text-[12px] font-bold text-slate-800">
                    {title}
                </p>

                <p className="mt-0.5 text-[11px] leading-5 text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default LearningOverview;