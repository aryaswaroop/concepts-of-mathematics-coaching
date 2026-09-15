import { FileText } from "lucide-react";

import TestEmptyState from "./TestEmptyState";
import TestMobileCard from "./TestMobileCard";
import TestPagination from "./TestPagination";
import TestTableRow from "./TestTableRow";

const TestTable = ({
    tests = [],
    hasFilters,
    onAddTest,
    onViewTest,
    onEditTest,
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
                    {/* Table Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                        <div>
                            <h2 className="text-sm font-extrabold text-slate-950">
                                Test records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Assessment schedule and test overview
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <FileText className="h-4 w-4" />
                        </div>
                    </div>

                    {tests.length > 0 ? (
                        <>
                            {/* Desktop headings */}
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.5fr_0.7fr_1fr_0.9fr_1fr_0.5fr] md:gap-4">
                                {[
                                    "Test",
                                    "Class",
                                    "Type",
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

                            {/* Desktop rows */}
                            {tests.map((test) => (
                                <TestTableRow
                                    key={
                                        test.id ||
                                        test._id ||
                                        test.testId ||
                                        `${test.testName}-${test.date}`
                                    }
                                    test={test}
                                    onView={onViewTest}
                                    onEdit={onEditTest}
                                />
                            ))}

                            {/* Mobile cards */}
                            <div className="space-y-3 p-4 md:hidden">
                                {tests.map((test) => (
                                    <TestMobileCard
                                        key={
                                            test.id ||
                                            test._id ||
                                            test.testId ||
                                            `${test.testName}-${test.date}`
                                        }
                                        test={test}
                                        onView={onViewTest}
                                        onEdit={onEditTest}
                                    />
                                ))}
                            </div>

                            <TestPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <TestEmptyState
                                hasFilters={hasFilters}
                                onAddTest={onAddTest}
                            />

                            <TestPagination
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

export default TestTable;