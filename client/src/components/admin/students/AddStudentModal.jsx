import { AnimatePresence, motion } from "framer-motion";
import {
    BookOpen,
    GraduationCap,
    Mail,
    Phone,
    UserRound,
    X,
} from "lucide-react";

const AddStudentModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.18)]"
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                                    Student management
                                </p>

                                <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                    Add Student
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Close add student form"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();

                                // Backend integration will be added later.
                                onClose();
                            }}
                            className="p-5 sm:p-6"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                {/* Full Name */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="student-name"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Full Name
                                    </label>

                                    <div className="relative">
                                        <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="student-name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter student's full name"
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="student-email"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Email
                                    </label>

                                    <div className="relative">
                                        <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="student-email"
                                            name="email"
                                            type="email"
                                            placeholder="Student email"
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="student-phone"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Phone
                                    </label>

                                    <div className="relative">
                                        <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="student-phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Student phone"
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                {/* Course */}
                                <div>
                                    <label
                                        htmlFor="student-course"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Course
                                    </label>

                                    <div className="relative">
                                        <BookOpen className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <select
                                            id="student-course"
                                            name="course"
                                            defaultValue=""
                                            className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        >
                                            <option value="" disabled>
                                                Select course
                                            </option>
                                            <option value="class-11">
                                                Class 11 Mathematics
                                            </option>
                                            <option value="class-12">
                                                Class 12 Mathematics
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Academic Level */}
                                <div>
                                    <label
                                        htmlFor="student-status"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Student Status
                                    </label>

                                    <div className="relative">
                                        <GraduationCap className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <select
                                            id="student-status"
                                            name="status"
                                            defaultValue="active"
                                            className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        >
                                            <option value="active">
                                                Active
                                            </option>
                                            <option value="inactive">
                                                Inactive
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Information */}
                            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                                <p className="text-xs font-bold text-blue-700">
                                    Backend integration pending
                                </p>

                                <p className="mt-1 text-xs leading-5 text-blue-600/80">
                                    This form is currently UI-only. Student
                                    creation and validation will be connected
                                    to the backend during the integration
                                    phase.
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-600"
                                >
                                    Create Student
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AddStudentModal;