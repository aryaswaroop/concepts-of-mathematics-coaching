import { CalendarDays, Plus, Search } from "lucide-react";
import { motion } from "framer-motion";

const BatchEmptyState = ({ hasFilters, onAddBatch }) => {
    return (
        <div className="px-5 py-14 text-center sm:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
            >
                {hasFilters ? (
                    <Search className="h-6 w-6" />
                ) : (
                    <CalendarDays className="h-6 w-6" />
                )}
            </motion.div>

            <h3 className="mt-5 text-base font-extrabold text-slate-950">
                {hasFilters
                    ? "No batches found"
                    : "No batches added yet"}
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                {hasFilters
                    ? "Try changing your search or filters to find the batch you are looking for."
                    : "Create the first batch to start organizing morning and evening learning schedules."}
            </p>

            {hasFilters ? (
                <div className="mt-5 text-xs font-semibold text-slate-400">
                    Adjust the filters above and try again.
                </div>
            ) : (
                <motion.button
                    type="button"
                    onClick={onAddBatch}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.16)] transition hover:bg-blue-700"
                >
                    <Plus className="h-4 w-4" />
                    Add Batch
                </motion.button>
            )}
        </div>
    );
};

export default BatchEmptyState;