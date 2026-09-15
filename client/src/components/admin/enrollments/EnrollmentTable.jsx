import { ClipboardList } from "lucide-react";

import EnrollmentEmptyState from "./EnrollmentEmptyState";
import EnrollmentMobileCard from "./EnrollmentMobileCard";
import EnrollmentPagination from "./EnrollmentPagination";
import EnrollmentTableRow from "./EnrollmentTableRow";

const EnrollmentTable = ({
    enrollments = [],
    hasFilters,
    onAddEnrollment,
    onViewEnrollment,
    onEditEnrollment,
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                        <div>
                            <h2 className="text-sm font-extrabold text-slate-950">
                                Enrollment records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Student admission and payment overview
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <ClipboardList className="h-4 w-4" />
                        </div>
                    </div>

                    {enrollments.length > 0 ? (
                        <>
                            {/* Desktop headings */}
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.5fr_1fr_1fr_0.85fr_0.9fr_0.55fr] md:gap-4">
                                {[
                                    "Student",
                                    "Course",
                                    "Batch",
                                    "Admission",
                                    "Payment",
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
                            {enrollments.map((enrollment) => (
                                <EnrollmentTableRow
                                    key={
                                        enrollment.id ||
                                        enrollment._id ||
                                        enrollment.studentId
                                    }
                                    enrollment={enrollment}
                                    onView={onViewEnrollment}
                                    onEdit={onEditEnrollment}
                                />
                            ))}

                            {/* Mobile cards */}
                            <div className="space-y-3 border-b border-slate-100 p-4 md:hidden">
                                {enrollments.map((enrollment) => (
                                    <EnrollmentMobileCard
                                        key={
                                            enrollment.id ||
                                            enrollment._id ||
                                            enrollment.studentId
                                        }
                                        enrollment={enrollment}
                                        onView={onViewEnrollment}
                                    />
                                ))}
                            </div>

                            <EnrollmentPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <EnrollmentEmptyState
                                hasFilters={hasFilters}
                                onAddEnrollment={onAddEnrollment}
                            />

                            <EnrollmentPagination
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

export default EnrollmentTable;