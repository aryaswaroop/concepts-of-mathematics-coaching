import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const StudentPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    const isPreviousDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= totalPages;

    return (
        <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
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

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    disabled={isPreviousDisabled}
                    onClick={() =>
                        onPageChange(currentPage - 1)
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    Previous
                </button>

                <button
                    type="button"
                    disabled={isNextDisabled}
                    onClick={() =>
                        onPageChange(currentPage + 1)
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Next
                    <ChevronRight className="h-3.5 w-3.5" />
                </button>
            </div>
        </div>
    );
};

export default StudentPagination;