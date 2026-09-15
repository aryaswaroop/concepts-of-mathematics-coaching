import { MoreHorizontal, Pencil, Eye } from "lucide-react";
import { useState } from "react";

const TestRowActions = ({
    test,
    onView,
    onEdit,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                aria-label="Open test actions"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>

            {open && (
                <>
                    <button
                        type="button"
                        aria-label="Close actions"
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-10 cursor-default"
                    />

                    <div className="absolute right-0 top-10 z-20 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_14px_35px_rgba(15,23,42,0.12)]">
                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onView?.(test);
                            }}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                        >
                            <Eye className="h-3.5 w-3.5" />
                            View test
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onEdit?.(test);
                            }}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                        >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit test
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TestRowActions;