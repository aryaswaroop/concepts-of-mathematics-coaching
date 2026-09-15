import { ClipboardList, Plus } from "lucide-react";
import { motion } from "framer-motion";

const EnrollmentsPageHeader = ({ onAddEnrollment }) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 pt-6 sm:px-6 lg:px-7">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.035)] sm:px-6">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-8 -top-10 select-none text-[9rem] font-extrabold leading-none text-blue-600/[0.035]"
                    >
                        ∫
                    </div>

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <ClipboardList className="h-5 w-5" />
                            </div>

                            <div>
                                <div className="mb-1 flex items-center gap-2">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                        Academic Management
                                    </span>

                                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                                    <span className="text-[10px] font-semibold text-slate-400">
                                        Enrollments
                                    </span>
                                </div>

                                <h1 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                                    Enrollment management
                                </h1>

                                <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                                    Manage student admissions, course assignment,
                                    batch allocation and enrollment status.
                                </p>
                            </div>
                        </div>

                        <motion.button
                            type="button"
                            onClick={onAddEnrollment}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition hover:bg-blue-700"
                        >
                            <Plus className="h-4 w-4" />
                            Add Enrollment
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnrollmentsPageHeader;