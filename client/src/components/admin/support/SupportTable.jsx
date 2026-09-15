import { Headphones } from "lucide-react";

import SupportEmptyState from "./SupportEmptyState";
import SupportMobileCard from "./SupportMobileCard";
import SupportPagination from "./SupportPagination";
import SupportTableRow from "./SupportTableRow";

const SupportTable = ({
    sessions = [],
    hasFilters,
    onAddSession,
    onViewSession,
    onEditSession,
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
                                Support session records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Student guidance and academic follow-up
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <Headphones className="h-4 w-4" />
                        </div>
                    </div>

                    {sessions.length > 0 ? (
                        <>
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.4fr_1.2fr_1fr_0.9fr_0.8fr_0.5fr] md:gap-4">
                                {[
                                    "Student",
                                    "Support type",
                                    "Date",
                                    "Priority",
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

                            {sessions.map((session) => (
                                <div
                                    key={
                                        session.id ||
                                        session._id
                                    }
                                >
                                    <SupportTableRow
                                        session={session}
                                        onView={onViewSession}
                                        onEdit={onEditSession}
                                    />

                                    <div className="px-4 py-2 md:hidden">
                                        <SupportMobileCard
                                            session={session}
                                            onView={onViewSession}
                                            onEdit={onEditSession}
                                        />
                                    </div>
                                </div>
                            ))}

                            <SupportPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <SupportEmptyState
                                hasFilters={hasFilters}
                                onAddSession={onAddSession}
                            />

                            <SupportPagination
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

export default SupportTable;