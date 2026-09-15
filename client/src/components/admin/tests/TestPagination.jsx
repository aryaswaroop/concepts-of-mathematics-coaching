import { ChevronLeft, ChevronRight } from "lucide-react";

const TestPagination = ({
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

    return (
        <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-slate-400">
                Page{" "}
                <span className="font-bold text-slate-600">
                    {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-600">
                    {safeTotalPages}
                </span>
            </p>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentPage <= 1}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous page"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex h-8 min-w-8 items-center justify-center rounded-lg bg-slate-900 px-2 text-xs font-bold text-white">
                    {currentPage}
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentPage >= safeTotalPages}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next page"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default TestPagination;