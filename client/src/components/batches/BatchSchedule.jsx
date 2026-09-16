import { useMemo } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Clock3,
    Sunrise,
    Sunset,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const BatchSchedule = ({ batches = [] }) => {
    const schedules = useMemo(() => {
        const morningBatches = batches.filter(
            (batch) => batch.shift === "MORNING"
        );

        const eveningBatches = batches.filter(
            (batch) => batch.shift === "EVENING"
        );

        return [
            {
                type: "Morning",
                icon: Sunrise,
                description:
                    "Morning batches provide a focused learning window for students who prefer earlier study hours.",
                batches: morningBatches,
            },
            {
                type: "Evening",
                icon: Sunset,
                description:
                    "Evening batches provide another learning option for students whose daytime schedule is occupied.",
                batches: eveningBatches,
            },
        ];
    }, [batches]);

    return (
        <section
            id="batch-schedule"
            className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
        >
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">

                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                        Batch Schedule
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                        Morning and evening learning options.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Batch schedules are managed according to the
                        academic requirements, available capacity and
                        teacher-managed timetable.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    {schedules.map((schedule, index) => {
                        const Icon = schedule.icon;

                        const timingText =
                            schedule.batches.length > 0
                                ? schedule.batches
                                    .map(
                                        (batch) =>
                                            `${batch.startTime} - ${batch.endTime}`
                                    )
                                    .join(" / ")
                                : "No active batch currently available";

                        const courseText =
                            schedule.batches.length > 0
                                ? [
                                    ...new Set(
                                        schedule.batches
                                            .map(
                                                (batch) =>
                                                    batch.courseId?.name
                                            )
                                            .filter(Boolean)
                                    ),
                                ].join(" / ")
                                : "Class 11 or Class 12";

                        return (
                            <motion.div
                                key={schedule.type}
                                initial={{
                                    opacity: 0,
                                    y: 20,
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
                                    duration: 0.55,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className="group rounded-[1.75rem] border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-8"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <span className="font-mono text-xs font-bold text-slate-300">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                                    {schedule.type} Batches
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {schedule.description}
                                </p>

                                <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <Clock3 className="h-5 w-5 text-blue-600" />

                                    <div>
                                        <p className="text-sm font-bold text-slate-800">
                                            Timing
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            {timingText}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <BookOpen className="h-5 w-5 text-blue-600" />

                                    <div>
                                        <p className="text-sm font-bold text-slate-800">
                                            Course
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            {courseText}
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                                >
                                    Ask about this schedule
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BatchSchedule;