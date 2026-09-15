import { Gift } from "lucide-react";

import RewardEmptyState from "./RewardEmptyState";
import RewardMobileCard from "./RewardMobileCard";
import RewardPagination from "./RewardPagination";
import RewardTableRow from "./RewardTableRow";

const RewardTable = ({
    rewards = [],
    hasFilters,
    onAddReward,
    onViewReward,
    onEditReward,
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                        <div>
                            <h2 className="text-sm font-extrabold text-slate-950">
                                Reward records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Student recognition and reward overview
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <Gift className="h-4 w-4" />
                        </div>
                    </div>

                    {rewards.length > 0 ? (
                        <>
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.35fr_1.25fr_0.9fr_0.7fr_0.95fr_0.5fr] md:gap-4">
                                {[
                                    "Student",
                                    "Reward",
                                    "Class",
                                    "Value",
                                    "Date",
                                    "Action",
                                ].map((heading) => (
                                    <span
                                        key={heading}
                                        className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400"
                                    >
                                        {heading}
                                    </span>
                                ))}
                            </div>

                            {rewards.map((reward) => (
                                <div key={reward.id || reward._id}>
                                    <RewardTableRow
                                        reward={reward}
                                        onView={onViewReward}
                                        onEdit={onEditReward}
                                    />

                                    <div className="px-4 py-2 md:hidden">
                                        <RewardMobileCard
                                            reward={reward}
                                            onView={onViewReward}
                                            onEdit={onEditReward}
                                        />
                                    </div>
                                </div>
                            ))}

                            <RewardPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <RewardEmptyState
                                hasFilters={hasFilters}
                                onAddReward={onAddReward}
                            />

                            <RewardPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RewardTable;