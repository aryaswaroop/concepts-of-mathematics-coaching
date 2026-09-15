import { FileCheck2 } from "lucide-react";

import ResultEmptyState from "./ResultEmptyState";
import ResultMobileCard from "./ResultMobileCard";
import ResultPagination from "./ResultPagination";
import ResultTableRow from "./ResultTableRow";

const ResultTable = ({
    results = [],
    hasFilters,
    onAddResult,
    onViewResult,
    onEditResult,
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
                                Result records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Student performance and published results
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <FileCheck2 className="h-4 w-4" />
                        </div>
                    </div>

                    {results.length > 0 ? (
                        <>
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.4fr_1.3fr_0.55fr_0.8fr_0.8fr_0.8fr_0.8fr_0.5fr] md:gap-3">
                                {[
                                    "Student",
                                    "Test",
                                    "Class",
                                    "Score",
                                    "%",
                                    "Date",
                                    "Status",
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

                            {results.map((result) => (
                                <ResultTableRow
                                    key={
                                        result.id ||
                                        result._id ||
                                        result.resultId ||
                                        `${result.studentName}-${result.testName}`
                                    }
                                    result={result}
                                    onView={onViewResult}
                                    onEdit={onEditResult}
                                />
                            ))}

                            <div className="space-y-3 p-4 md:hidden">
                                {results.map((result) => (
                                    <ResultMobileCard
                                        key={
                                            result.id ||
                                            result._id ||
                                            result.resultId ||
                                            `${result.studentName}-${result.testName}`
                                        }
                                        result={result}
                                        onView={onViewResult}
                                        onEdit={onEditResult}
                                    />
                                ))}
                            </div>

                            <ResultPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <ResultEmptyState
                                hasFilters={hasFilters}
                                onAddResult={onAddResult}
                            />

                            <ResultPagination
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

export default ResultTable;