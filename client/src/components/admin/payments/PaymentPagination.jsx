import { ChevronLeft, ChevronRight } from "lucide-react";

const PaymentPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    const safeTotalPages = Math.max(totalPages, 1);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange?.(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < safeTotalPages) {
            onPageChange?.(currentPage + 1);
        }
    };

    const pages = Array.from(
        { length: safeTotalPages },
        (_, index) => index + 1
    );

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
            <p className="text-[11px] text-slate-400">
                Page{" "}
                <span className="font-bold text-slate-600">
                    {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-600">
                    {safeTotalPages}
                </span>
            </p>

            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentPage <= 1}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous page"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="hidden items-center gap-1 sm:flex">
                    {pages.map((page) => (
                        <button
                            key={page}
                            type="button"
                            onClick={() => onPageChange?.(page)}
                            className={`h-8 min-w-8 rounded-lg px-2 text-xs font-bold transition ${page === currentPage
                                ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentPage >= safeTotalPages}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next page"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default PaymentPagination;