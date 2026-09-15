import { FileCheck2, Plus } from "lucide-react";

const ResultEmptyState = ({
    hasFilters,
    onAddResult,
}) => {
    return (
        <div className="px-5 py-14 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FileCheck2 className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                {hasFilters
                    ? "No matching results"
                    : "No results recorded yet"}
            </h3>

            <p className="mx-auto mt-1.5 max-w-md text-xs leading-5 text-slate-400">
                {hasFilters
                    ? "Try changing your filters or search criteria."
                    : "Result records will appear here once student test performance is recorded."}
            </p>

            {!hasFilters && (
                <button
                    type="button"
                    onClick={onAddResult}
                    className="mt-5 inline-flex h-9 items-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-bold text-white transition hover:bg-blue-600"
                >
                    <Plus className="h-3.5 w-3.5" />
                    Add result
                </button>
            )}
        </div>
    );
};

export default ResultEmptyState;