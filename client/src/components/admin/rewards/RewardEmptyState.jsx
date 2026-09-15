import { Gift, Plus } from "lucide-react";

const RewardEmptyState = ({ hasFilters, onAddReward }) => {
    return (
        <div className="px-5 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Gift className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-base font-extrabold text-slate-900">
                {hasFilters
                    ? "No matching rewards"
                    : "No rewards recorded yet"}
            </h3>

            <p className="mx-auto mt-1.5 max-w-md text-sm leading-6 text-slate-500">
                {hasFilters
                    ? "Try adjusting the filters to find another reward record."
                    : "Reward records will appear here once student recognition is added."}
            </p>

            {!hasFilters && (
                <button
                    type="button"
                    onClick={onAddReward}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
                >
                    <Plus className="h-4 w-4" />
                    Add reward
                </button>
            )}
        </div>
    );
};

export default RewardEmptyState;