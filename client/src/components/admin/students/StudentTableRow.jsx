import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import StudentRowActions from "./StudentRowActions";

const StudentTableRow = ({
    student,
    onView,
    onEdit,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group hidden grid-cols-[1.5fr_1fr_1fr_0.8fr_0.5fr] items-center gap-4 border-b border-slate-100 px-5 py-4 last:border-b-0 md:grid"
        >
            <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-600">
                    {student.name?.charAt(0)?.toUpperCase() || "S"}
                </div>

                <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-950">
                        {student.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-slate-400">
                        {student.email || "Email not available"}
                    </p>
                </div>
            </div>

            <div>
                <p className="text-sm font-semibold text-slate-700">
                    {student.course || "Not assigned"}
                </p>
            </div>

            <div>
                <p className="text-sm font-semibold text-slate-700">
                    {student.batch || "Not assigned"}
                </p>
            </div>

            <div>
                <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${student.status === "active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                >
                    {student.status || "Unknown"}
                </span>
            </div>

            <div className="flex items-center justify-end gap-1">
                <button
                    type="button"
                    onClick={() => onView(student)}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    aria-label={`View ${student.name}`}
                >
                    <ArrowUpRight className="h-4 w-4" />
                </button>

                <StudentRowActions
                    student={student}
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>
        </motion.div>
    );
};

export default StudentTableRow;