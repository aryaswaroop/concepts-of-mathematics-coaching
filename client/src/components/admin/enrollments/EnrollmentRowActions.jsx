import { MoreHorizontal, Pencil, Eye } from "lucide-react";

const EnrollmentRowActions = ({
    onView,
    onEdit,
}) => {
    return (
        <div className="flex items-center justify-end gap-1">
            <button
                type="button"
                onClick={onView}
                title="View enrollment"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
            >
                <Eye className="h-4 w-4" />
            </button>

            <button
                type="button"
                onClick={onEdit}
                title="Edit enrollment"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
            >
                <Pencil className="h-4 w-4" />
            </button>

            <button
                type="button"
                title="More actions"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>
        </div>
    );
};

export default EnrollmentRowActions;