import { Eye, MoreHorizontal, Pencil } from "lucide-react";
import { useState } from "react";

const PaymentRowActions = ({
    payment,
    onView,
    onEdit,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex items-center justify-end gap-1">
            <button
                type="button"
                onClick={() => onView?.(payment)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                aria-label="View payment"
                title="View payment"
            >
                <Eye className="h-4 w-4" />
            </button>

            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Payment actions"
                title="More actions"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>

            {open && (
                <>
                    <button
                        type="button"
                        aria-label="Close payment actions"
                        className="fixed inset-0 z-10 cursor-default"
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute right-0 top-9 z-20 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_15px_40px_rgba(15,23,42,0.12)]">
                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onView?.(payment);
                            }}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                        >
                            <Eye className="h-3.5 w-3.5" />
                            View details
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onEdit?.(payment);
                            }}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                        >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit payment
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PaymentRowActions;