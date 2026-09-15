import { ChevronLeft, ChevronRight } from "lucide-react";

const RewardPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
            <p className="text-xs font-medium text-slate-400">
                Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default RewardPagination;