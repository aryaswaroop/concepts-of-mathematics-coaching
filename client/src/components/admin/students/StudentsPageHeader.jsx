import { motion } from "framer-motion";
import { Plus, UserRoundPlus } from "lucide-react";

const StudentsPageHeader = ({ onAddStudent }) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-7 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                            <UserRoundPlus className="h-3.5 w-3.5" />
                            Academic management
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Students
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                            Manage student profiles, academic information and
                            course or batch assignments from one workspace.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onAddStudent}
                        className="group inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
                    >
                        <Plus className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
                        Add Student
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default StudentsPageHeader;