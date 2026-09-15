import { CreditCard } from "lucide-react";

import PaymentEmptyState from "./PaymentEmptyState";
import PaymentMobileCard from "./PaymentMobileCard";
import PaymentPagination from "./PaymentPagination";
import PaymentTableRow from "./PaymentTableRow";

const PaymentTable = ({
    payments = [],
    hasFilters,
    onAddPayment,
    onViewPayment,
    onEditPayment,
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
                    {/* Table header */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                        <div>
                            <h2 className="text-sm font-extrabold text-slate-950">
                                Payment records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Student payment and installment overview
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <CreditCard className="h-4 w-4" />
                        </div>
                    </div>

                    {payments.length > 0 ? (
                        <>
                            {/* Desktop column headings */}
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.5fr_1fr_0.8fr_0.9fr_0.9fr_0.9fr_0.55fr] md:gap-4">
                                {[
                                    "Student",
                                    "Course",
                                    "Amount",
                                    "Date",
                                    "Method",
                                    "Status",
                                    "Action",
                                ].map((heading) => (
                                    <span
                                        key={heading}
                                        className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400"
                                    >
                                        {heading}
                                    </span>
                                ))}
                            </div>

                            {/* Desktop rows */}
                            <div>
                                {payments.map((payment, index) => (
                                    <PaymentTableRow
                                        key={
                                            payment.id ||
                                            payment._id ||
                                            `payment-${index}`
                                        }
                                        payment={payment}
                                        onView={onViewPayment}
                                        onEdit={onEditPayment}
                                    />
                                ))}
                            </div>

                            {/* Mobile cards */}
                            <div className="space-y-3 p-4 md:hidden">
                                {payments.map((payment, index) => (
                                    <PaymentMobileCard
                                        key={
                                            payment.id ||
                                            payment._id ||
                                            `mobile-payment-${index}`
                                        }
                                        payment={payment}
                                        onView={onViewPayment}
                                        onEdit={onEditPayment}
                                    />
                                ))}
                            </div>

                            {/* Pagination */}
                            <PaymentPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <PaymentEmptyState
                                hasFilters={hasFilters}
                                onAddPayment={onAddPayment}
                            />

                            <PaymentPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PaymentTable;