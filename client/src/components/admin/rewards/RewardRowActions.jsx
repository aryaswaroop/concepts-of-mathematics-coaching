import { MoreHorizontal, Pencil, Eye } from "lucide-react";
import { useState } from "react";

const RewardRowActions = ({ reward, onView, onEdit }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex justify-end">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Reward actions"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>

            {open && (
                <div className="absolute right-0 top-9 z-30 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            onView(reward);
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                        <Eye className="h-3.5 w-3.5" />
                        View
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            onEdit(reward);
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};

export default RewardRowActions;