import { CreditCard, Plus, Search } from "lucide-react";

const PaymentEmptyState = ({
    hasFilters,
    onAddPayment,
}) => {
    return (
        <div className="flex min-h-[280px] flex-col items-center justify-center px-5 py-12 text-center">
            <div className="relative mb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                    {hasFilters ? (
                        <Search className="h-6 w-6" />
                    ) : (
                        <CreditCard className="h-6 w-6" />
                    )}
                </div>

                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-white">
                    <Plus className="h-3 w-3" />
                </div>
            </div>

            <h3 className="text-sm font-extrabold text-slate-900">
                {hasFilters
                    ? "No matching payments"
                    : "No payment records yet"}
            </h3>

            <p className="mt-1.5 max-w-md text-xs leading-5 text-slate-400">
                {hasFilters
                    ? "Try adjusting your search or filters to find a payment record."
                    : "Payment records will appear here once student payments are added."}
            </p>

            {!hasFilters && (
                <button
                    type="button"
                    onClick={onAddPayment}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
                >
                    <Plus className="h-4 w-4" />
                    Add payment
                </button>
            )}
        </div>
    );
};

export default PaymentEmptyState;