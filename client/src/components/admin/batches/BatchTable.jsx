import { CalendarDays } from "lucide-react";

import BatchEmptyState from "./BatchEmptyState";
import BatchMobileCard from "./BatchMobileCard";
import BatchPagination from "./BatchPagination";
import BatchTableRow from "./BatchTableRow";

const BatchTable = ({
    batches = [],
    hasFilters,
    onAddBatch,
    onViewBatch,
    onEditBatch,
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
                                Batch records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Schedule and capacity management
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <CalendarDays className="h-4 w-4" />
                        </div>
                    </div>

                    {batches.length > 0 ? (
                        <>
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.4fr_0.8fr_1fr_1fr_0.8fr_0.5fr] md:gap-4">
                                {[
                                    "Batch",
                                    "Class",
                                    "Session",
                                    "Timing",
                                    "Capacity",
                                    "Status / Action",
                                ].map((heading) => (
                                    <span
                                        key={heading}
                                        className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400"
                                    >
                                        {heading}
                                    </span>
                                ))}
                            </div>

                            {batches.map((batch) => (
                                <div key={batch.id}>
                                    <BatchTableRow
                                        batch={batch}
                                        onView={() =>
                                            onViewBatch?.(batch)
                                        }
                                        onEdit={() =>
                                            onEditBatch?.(batch)
                                        }
                                    />

                                    <div className="space-y-2 px-4 py-2 md:hidden">
                                        <BatchMobileCard
                                            batch={batch}
                                            onView={() =>
                                                onViewBatch?.(batch)
                                            }
                                        />
                                    </div>
                                </div>
                            ))}

                            <BatchPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <BatchEmptyState
                                hasFilters={hasFilters}
                                onAddBatch={onAddBatch}
                            />

                            <BatchPagination
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

export default BatchTable;