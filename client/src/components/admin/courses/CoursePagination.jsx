import { ChevronLeft, ChevronRight } from "lucide-react";

const CoursePagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
            <p className="text-xs font-medium text-slate-400">
                Page{" "}
                <span className="font-bold text-slate-600">
                    {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-600">
                    {totalPages}
                </span>
            </p>

            <div className="flex items-center gap-1.5">
                <button
                    type="button"
                    disabled={!canGoPrevious}
                    onClick={() =>
                        canGoPrevious &&
                        onPageChange(currentPage - 1)
                    }
                    aria-label="Previous page"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent disabled:hover:text-slate-400"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                    type="button"
                    disabled={!canGoNext}
                    onClick={() =>
                        canGoNext &&
                        onPageChange(currentPage + 1)
                    }
                    aria-label="Next page"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent disabled:hover:text-slate-400"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default CoursePagination;