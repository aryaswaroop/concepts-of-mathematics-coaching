import { motion } from "framer-motion";
import {
    BookOpen,
    CalendarDays,
    CheckCircle2,
    Clock3,
    UsersRound,
} from "lucide-react";

const BatchCard = ({
    name,
    course,
    timing,
    schedule,
    capacity,
    status = "Available",
    description,
}) => {
    return (
        <motion.article
            whileHover={{
                y: -5,
            }}
            className="group rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-7"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {status}
                    </span>

                    <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-950">
                        {name}
                    </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <UsersRound className="h-5 w-5" />
                </div>
            </div>

            {description && (
                <p className="mt-4 text-sm leading-6 text-slate-600">
                    {description}
                </p>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <BookOpen className="h-4 w-4 text-blue-600" />

                    <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Course
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                        {course}
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <Clock3 className="h-4 w-4 text-blue-600" />

                    <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Timing
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                        {timing}
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <CalendarDays className="h-4 w-4 text-blue-600" />

                    <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Schedule
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                        {schedule}
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <UsersRound className="h-4 w-4 text-blue-600" />

                    <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Capacity
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                        {capacity}
                    </p>
                </div>
            </div>
        </motion.article>
    );
};

export default BatchCard;