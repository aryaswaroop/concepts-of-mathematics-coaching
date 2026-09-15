import { ChevronLeft, ChevronRight } from "lucide-react";

const BatchPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    const isFirstPage = currentPage <= 1;
    const isLastPage = currentPage >= totalPages;

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
            <p className="text-[11px] font-medium text-slate-400">
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
                    disabled={isFirstPage}
                    onClick={() =>
                        onPageChange?.(currentPage - 1)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                    type="button"
                    disabled={isLastPage}
                    onClick={() =>
                        onPageChange?.(currentPage + 1)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default BatchPagination;