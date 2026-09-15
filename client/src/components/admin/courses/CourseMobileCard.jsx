import { BookOpen, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const CourseMobileCard = ({ course, onView }) => {
    const isActive = course.status === "active";

    return (
        <motion.button
            type="button"
            whileTap={{ scale: 0.99 }}
            onClick={() => onView(course)}
            className="w-full rounded-xl border border-slate-200/80 bg-white p-4 text-left transition hover:border-blue-200 hover:shadow-sm"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <BookOpen className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-900">
                            {course.name}
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-400">
                            Class {course.grade}
                        </p>
                    </div>
                </div>

                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-300" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {course.fee !== undefined && course.fee !== null
                        ? `₹${Number(course.fee).toLocaleString("en-IN")}`
                        : "Fee pending"}
                </span>

                <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${isActive
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${isActive
                                ? "bg-emerald-500"
                                : "bg-slate-400"
                            }`}
                    />

                    {isActive ? "Active" : "Inactive"}
                </span>
            </div>
        </motion.button>
    );
};

export default CourseMobileCard;