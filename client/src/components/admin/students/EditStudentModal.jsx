import { AnimatePresence, motion } from "framer-motion";
import {
    BookOpen,
    Mail,
    Phone,
    UserRound,
    X,
} from "lucide-react";

const EditStudentModal = ({
    student,
    onClose,
}) => {
    return (
        <AnimatePresence>
            {student && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 15,
                            scale: 0.98,
                        }}
                        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.18)]"
                    >
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                                    Student management
                                </p>

                                <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                    Edit Student
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Close edit student form"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form
                            onSubmit={(event) => {
                                event.preventDefault();

                                // Backend update will be added later.
                                onClose();
                            }}
                            className="p-5 sm:p-6"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="edit-student-name"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Full Name
                                    </label>

                                    <div className="relative">
                                        <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="edit-student-name"
                                            defaultValue={student.name}
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-student-email"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Email
                                    </label>

                                    <div className="relative">
                                        <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="edit-student-email"
                                            type="email"
                                            defaultValue={student.email || ""}
                                            placeholder="Student email"
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-student-phone"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Phone
                                    </label>

                                    <div className="relative">
                                        <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="edit-student-phone"
                                            type="tel"
                                            defaultValue={student.phone || ""}
                                            placeholder="Student phone"
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-student-course"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Course
                                    </label>

                                    <div className="relative">
                                        <BookOpen className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <select
                                            id="edit-student-course"
                                            defaultValue={student.courseValue || ""}
                                            className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        >
                                            <option value="">
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

                                <div>
                                    <label
                                        htmlFor="edit-student-status"
                                        className="mb-2 block text-xs font-bold text-slate-700"
                                    >
                                        Status
                                    </label>

                                    <select
                                        id="edit-student-status"
                                        defaultValue={
                                            student.status || "active"
                                        }
                                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
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

                            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                                <p className="text-xs font-bold text-blue-700">
                                    Backend update pending
                                </p>

                                <p className="mt-1 text-xs leading-5 text-blue-600/80">
                                    Changes will be persisted once this
                                    interface is connected to the student API.
                                </p>
                            </div>

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
                                    className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EditStudentModal;