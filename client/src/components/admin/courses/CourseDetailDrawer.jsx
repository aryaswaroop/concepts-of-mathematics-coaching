import { AnimatePresence, motion } from "framer-motion";
import {
    BookOpen,
    CalendarDays,
    IndianRupee,
    Pencil,
    X,
} from "lucide-react";

const CourseDetailDrawer = ({ course, onClose, onEdit }) => {
    const isActive = course?.status === "active";

    return (
        <AnimatePresence>
            {course && (
                <div className="fixed inset-0 z-[100]">
                    {/* Overlay */}
                    <motion.button
                        type="button"
                        aria-label="Close course details"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 cursor-default bg-slate-950/30 backdrop-blur-[2px]"
                    />

                    {/* Drawer */}
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                        className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white shadow-[-20px_0_60px_rgba(15,23,42,0.12)]"
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                    Course Details
                                </p>

                                <h2 className="mt-1 text-base font-extrabold text-slate-950">
                                    Academic profile
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="px-5 py-6 sm:px-6">
                            {/* Course Identity */}
                            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_8px_18px_rgba(37,99,235,0.16)]">
                                        <BookOpen className="h-5 w-5" />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-base font-extrabold text-slate-950">
                                            {course.name}
                                        </h3>

                                        <p className="mt-1 text-xs font-medium text-slate-500">
                                            Class {course.grade}
                                        </p>

                                        <span
                                            className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${isActive
                                                    ? "bg-emerald-50 text-emerald-600"
                                                    : "bg-slate-200 text-slate-500"
                                                }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${isActive
                                                        ? "bg-emerald-500"
                                                        : "bg-slate-400"
                                                    }`}
                                            />

                                            {isActive
                                                ? "Active"
                                                : "Inactive"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Information */}
                            <div className="mt-5">
                                <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                                    Course Information
                                </h3>

                                <div className="mt-3 divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-white">
                                    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
                                        <div className="flex items-center gap-2.5">
                                            <CalendarDays className="h-4 w-4 text-slate-400" />

                                            <span className="text-xs font-semibold text-slate-500">
                                                Class
                                            </span>
                                        </div>

                                        <span className="text-sm font-bold text-slate-800">
                                            {course.grade
                                                ? `Class ${course.grade}`
                                                : "—"}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
                                        <div className="flex items-center gap-2.5">
                                            <IndianRupee className="h-4 w-4 text-slate-400" />

                                            <span className="text-xs font-semibold text-slate-500">
                                                Annual Fee
                                            </span>
                                        </div>

                                        <span className="text-sm font-bold text-slate-800">
                                            {course.fee !== undefined &&
                                                course.fee !== null
                                                ? `₹${Number(
                                                    course.fee
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}`
                                                : "—"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-5">
                                <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                                    Description
                                </h3>

                                <div className="mt-3 rounded-2xl border border-slate-200/80 bg-white p-4">
                                    <p className="text-sm leading-6 text-slate-600">
                                        {course.description ||
                                            "No course description has been added yet."}
                                    </p>
                                </div>
                            </div>

                            {/* Backend Notice */}
                            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                                <p className="text-xs leading-5 text-blue-700">
                                    Course activity, batches, enrollments
                                    and student relationships will appear
                                    here once backend integration is
                                    enabled.
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 border-t border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
                            <button
                                type="button"
                                onClick={() => onEdit(course)}
                                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700"
                            >
                                <Pencil className="h-4 w-4" />
                                Edit Course
                            </button>
                        </div>
                    </motion.aside>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CourseDetailDrawer;