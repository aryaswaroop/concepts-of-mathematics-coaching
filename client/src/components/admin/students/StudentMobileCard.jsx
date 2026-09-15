import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BookOpen,
    GraduationCap,
} from "lucide-react";

const StudentMobileCard = ({
    student,
    onView,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 md:hidden"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-600">
                        {student.name?.charAt(0)?.toUpperCase() || "S"}
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-slate-950">
                            {student.name}
                        </h3>

                        <p className="mt-0.5 truncate text-xs text-slate-400">
                            {student.email || "Email not available"}
                        </p>
                    </div>
                </div>

                <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${student.status === "active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                >
                    {student.status || "Unknown"}
                </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white p-3">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 text-blue-500" />

                        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                            Course
                        </span>
                    </div>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                        {student.course || "Not assigned"}
                    </p>
                </div>

                <div className="rounded-lg bg-white p-3">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-3.5 w-3.5 text-blue-500" />

                        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                            Batch
                        </span>
                    </div>

                    <p className="mt-1 text-xs font-semibold text-slate-700">
                        {student.batch || "Not assigned"}
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={() => onView(student)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-xs font-bold text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600"
            >
                View Student
                <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
        </motion.div>
    );
};

export default StudentMobileCard;