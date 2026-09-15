import { AnimatePresence, motion } from "framer-motion";
import {
    BookOpen,
    CalendarDays,
    CreditCard,
    GraduationCap,
    Mail,
    Phone,
    UserRound,
    X,
} from "lucide-react";

const StudentDetailDrawer = ({ student, onClose }) => {
    return (
        <AnimatePresence>
            {student && (
                <div className="fixed inset-0 z-[90]">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm"
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
                        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-[-20px_0_60px_rgba(15,23,42,0.15)]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                                    Student profile
                                </p>

                                <h2 className="mt-1 text-lg font-extrabold text-slate-950">
                                    Student details
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Close student details"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Profile hero */}
                            <div className="bg-slate-950 px-5 py-7 text-white">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl font-extrabold">
                                        {student.name
                                            ?.charAt(0)
                                            ?.toUpperCase() || "S"}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="truncate text-lg font-extrabold">
                                            {student.name}
                                        </h3>

                                        <p className="mt-1 truncate text-xs text-slate-400">
                                            {student.email ||
                                                "Email not available"}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="text-xs font-semibold text-slate-400">
                                        Account status
                                    </span>

                                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                                        {student.status || "Unknown"}
                                    </span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-5 p-5">
                                <div>
                                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                                        Personal information
                                    </p>

                                    <div className="space-y-2">
                                        <DetailItem
                                            icon={UserRound}
                                            label="Name"
                                            value={student.name}
                                        />

                                        <DetailItem
                                            icon={Mail}
                                            label="Email"
                                            value={
                                                student.email ||
                                                "Not available"
                                            }
                                        />

                                        <DetailItem
                                            icon={Phone}
                                            label="Phone"
                                            value={
                                                student.phone ||
                                                "Not available"
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                                        Academic information
                                    </p>

                                    <div className="space-y-2">
                                        <DetailItem
                                            icon={BookOpen}
                                            label="Course"
                                            value={
                                                student.course ||
                                                "Not assigned"
                                            }
                                        />

                                        <DetailItem
                                            icon={GraduationCap}
                                            label="Batch"
                                            value={
                                                student.batch ||
                                                "Not assigned"
                                            }
                                        />

                                        <DetailItem
                                            icon={CalendarDays}
                                            label="Admission"
                                            value={
                                                student.admissionDate ||
                                                "Not available"
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                                        Account overview
                                    </p>

                                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                                                <CreditCard className="h-4 w-4" />
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold text-slate-700">
                                                    Payment information
                                                </p>

                                                <p className="mt-0.5 text-[11px] text-slate-400">
                                                    Available after API
                                                    integration
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-slate-100 bg-white p-4">
                            <button
                                type="button"
                                className="w-full rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-600"
                            >
                                Edit Student
                            </button>
                        </div>
                    </motion.aside>
                </div>
            )}
        </AnimatePresence>
    );
};

const DetailItem = ({ icon: Icon, label, value }) => {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                <Icon className="h-4 w-4" />
            </div>

            <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    {label}
                </p>

                <p className="mt-0.5 truncate text-sm font-semibold text-slate-700">
                    {value || "Not available"}
                </p>
            </div>
        </div>
    );
};

export default StudentDetailDrawer;