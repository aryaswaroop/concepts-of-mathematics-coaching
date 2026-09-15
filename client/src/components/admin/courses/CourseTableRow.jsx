import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

import CourseRowActions from "./CourseRowActions";

const CourseTableRow = ({ course, onView, onEdit }) => {
    const isActive = course.status === "active";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="group hidden grid-cols-[1.5fr_0.8fr_0.9fr_0.8fr_0.5fr] items-center gap-4 border-b border-slate-100 px-5 py-4 last:border-b-0 md:grid"
        >
            {/* Course */}
            <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                    <BookOpen className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">
                        {course.name}
                    </p>

                    {course.description && (
                        <p className="mt-0.5 truncate text-xs text-slate-400">
                            {course.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Class */}
            <div>
                <span className="text-sm font-semibold text-slate-600">
                    Class {course.grade}
                </span>
            </div>

            {/* Fee */}
            <div>
                <span className="text-sm font-semibold text-slate-700">
                    {course.fee !== undefined && course.fee !== null
                        ? `₹${Number(course.fee).toLocaleString("en-IN")}`
                        : "—"}
                </span>

                <span className="ml-1 text-[10px] text-slate-400">
                    annual
                </span>
            </div>

            {/* Status */}
            <div>
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

            {/* Actions */}
            <div className="flex items-center justify-end gap-1">
                <button
                    type="button"
                    onClick={() => onView(course)}
                    aria-label={`View ${course.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                >
                    <ArrowUpRight className="h-4 w-4" />
                </button>

                <CourseRowActions
                    course={course}
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>
        </motion.div>
    );
};

export default CourseTableRow;