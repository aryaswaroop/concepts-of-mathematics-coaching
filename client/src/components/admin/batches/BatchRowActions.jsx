import { Eye, MoreHorizontal, Pencil } from "lucide-react";
import { motion } from "framer-motion";

const BatchRowActions = ({ onView, onEdit }) => {
    return (
        <div className="flex items-center justify-end gap-1">
            <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={onView}
                title="View batch"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
            >
                <Eye className="h-4 w-4" />
            </motion.button>

            <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={onEdit}
                title="Edit batch"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <Pencil className="h-4 w-4" />
            </motion.button>

            <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition hover:bg-slate-50 hover:text-slate-500"
                title="More actions"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>
        </div>
    );
};

export default BatchRowActions;