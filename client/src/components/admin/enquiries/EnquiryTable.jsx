import EnquiryEmptyState from "./EnquiryEmptyState";
import EnquiryMobileCard from "./EnquiryMobileCard";
import EnquiryPagination from "./EnquiryPagination";
import EnquiryTableRow from "./EnquiryTableRow";

const EnquiryTable = ({
    enquiries = [],
    hasFilters,
    onAddEnquiry,
    onViewEnquiry,
    onEditEnquiry,
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
                                Enquiry records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Prospective student and admission enquiries
                            </p>
                        </div>
                    </div>

                    {enquiries.length > 0 ? (
                        <>
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.35fr_1.3fr_0.7fr_0.75fr_0.85fr_0.45fr] md:gap-4">
                                {[
                                    "Enquirer",
                                    "Enquiry",
                                    "Class",
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

                            <div className="hidden md:block">
                                {enquiries.map((enquiry) => (
                                    <EnquiryTableRow
                                        key={enquiry.id || enquiry._id}
                                        enquiry={enquiry}
                                        onView={onViewEnquiry}
                                        onEdit={onEditEnquiry}
                                    />
                                ))}
                            </div>

                            <div className="space-y-3 p-4 md:hidden">
                                {enquiries.map((enquiry) => (
                                    <EnquiryMobileCard
                                        key={enquiry.id || enquiry._id}
                                        enquiry={enquiry}
                                        onView={onViewEnquiry}
                                        onEdit={onEditEnquiry}
                                    />
                                ))}
                            </div>

                            <EnquiryPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <EnquiryEmptyState
                                hasFilters={hasFilters}
                                onAddEnquiry={onAddEnquiry}
                            />

                            <EnquiryPagination
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

export default EnquiryTable;