import { Edit3, MoreHorizontal, Eye } from "lucide-react";
import { useState } from "react";

const EnquiryRowActions = ({ enquiry, onView, onEdit }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex justify-end">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>

            {open && (
                <>
                    <button
                        type="button"
                        aria-label="Close actions"
                        className="fixed inset-0 z-10 cursor-default"
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute right-0 top-9 z-20 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-xl">
                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onView(enquiry);
                            }}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                        >
                            <Eye className="h-3.5 w-3.5" />
                            View
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onEdit(enquiry);
                            }}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                        >
                            <Edit3 className="h-3.5 w-3.5" />
                            Edit
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default EnquiryRowActions;