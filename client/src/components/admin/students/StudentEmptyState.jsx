import { motion } from "framer-motion";
import { GraduationCap, UserPlus } from "lucide-react";

const StudentEmptyState = ({ hasFilters, onAddStudent }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[300px] flex-col items-center justify-center px-5 py-12 text-center"
        >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <GraduationCap className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-lg font-extrabold tracking-[-0.02em] text-slate-950">
                {hasFilters
                    ? "No students match these filters"
                    : "Student records are ready for integration"}
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {hasFilters
                    ? "Try changing your search or filters to see other student records."
                    : "Student information will appear here once the frontend is connected to the coaching management API."}
            </p>

            {!hasFilters && (
                <button
                    type="button"
                    onClick={onAddStudent}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-600"
                >
                    <UserPlus className="h-4 w-4" />
                    Add Student
                </button>
            )}
        </motion.div>
    );
};

export default StudentEmptyState;