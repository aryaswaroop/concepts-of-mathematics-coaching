import { CreditCard, Plus } from "lucide-react";

const PaymentsPageHeader = ({ onAddPayment }) => {
    return (
        <section className="border-b border-slate-200/70 bg-white/70">
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-blue-600" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                Finance / Payments
                            </span>
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Payment management
                        </h1>

                        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                            Track student payments, installments and payment
                            status from one place.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onAddPayment}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                        <Plus className="h-4 w-4" />
                        Add payment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PaymentsPageHeader;