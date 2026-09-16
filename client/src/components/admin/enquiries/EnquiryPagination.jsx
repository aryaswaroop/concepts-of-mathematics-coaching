import { ChevronLeft, ChevronRight } from "lucide-react";

const EnquiryPagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
                <ChevronLeft className="h-3.5 w-3.5" />
                Previous
            </button>

            <span className="text-xs font-semibold text-slate-400">
                Page {currentPage} of {totalPages}
            </span>

            <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Next
                <ChevronRight className="h-3.5 w-3.5" />
            </button>
        </div>
    );
};

export default EnquiryPagination;