import { ClipboardCheck, Plus, SearchX } from "lucide-react";

const TestEmptyState = ({
    hasFilters,
    onAddTest,
}) => {
    return (
        <div className="px-5 py-14 text-center sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                {hasFilters ? (
                    <SearchX className="h-6 w-6" />
                ) : (
                    <ClipboardCheck className="h-6 w-6" />
                )}
            </div>

            <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                {hasFilters
                    ? "No matching tests found"
                    : "No tests recorded yet"}
            </h3>

            <p className="mx-auto mt-1.5 max-w-md text-xs leading-5 text-slate-400">
                {hasFilters
                    ? "Try adjusting the search or filters to find the assessment record you need."
                    : "Create the first test to start managing weekly assessments and student evaluation."}
            </p>

            {!hasFilters && (
                <button
                    type="button"
                    onClick={onAddTest}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
                >
                    <Plus className="h-4 w-4" />
                    Add test
                </button>
            )}
        </div>
    );
};

export default TestEmptyState;