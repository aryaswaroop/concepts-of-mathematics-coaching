import { AnimatePresence, motion } from "framer-motion";
import {
    Edit3,
    Eye,
    MoreHorizontal,
    UserX,
} from "lucide-react";
import { useState } from "react";

const StudentRowActions = ({
    student,
    onView,
    onEdit,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label={`Actions for ${student.name}`}
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                                y: -4,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                                y: -4,
                            }}
                            className="absolute right-0 top-9 z-20 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_14px_35px_rgba(15,23,42,0.12)]"
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    onView(student);
                                    setOpen(false);
                                }}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                                <Eye className="h-4 w-4" />
                                View Student
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    onEdit(student);
                                    setOpen(false);
                                }}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                                <Edit3 className="h-4 w-4" />
                                Edit Student
                            </button>

                            <div className="my-1 border-t border-slate-100" />

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-semibold text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
                            >
                                <UserX className="h-4 w-4" />
                                Deactivate
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StudentRowActions;