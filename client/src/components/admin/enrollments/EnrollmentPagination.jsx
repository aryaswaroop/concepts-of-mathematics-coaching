import { ChevronLeft, ChevronRight } from "lucide-react";

const EnrollmentPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
            <p className="text-[11px] font-medium text-slate-400">
                Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-1.5">
                <button
                    type="button"
                    disabled={!canGoPrevious}
                    onClick={() => onPageChange?.(currentPage - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                    title="Previous page"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="flex h-8 min-w-8 items-center justify-center rounded-lg bg-slate-900 px-2 text-[11px] font-bold text-white">
                    {currentPage}
                </span>

                <button
                    type="button"
                    disabled={!canGoNext}
                    onClick={() => onPageChange?.(currentPage + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                    title="Next page"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default EnrollmentPagination;