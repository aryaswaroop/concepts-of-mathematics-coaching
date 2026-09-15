import { Users } from "lucide-react";

import StudentEmptyState from "./StudentEmptyState";
import StudentMobileCard from "./StudentMobileCard";
import StudentPagination from "./StudentPagination";
import StudentTableRow from "./StudentTableRow";

const StudentTable = ({
    students = [],
    hasFilters,
    onAddStudent,
    onViewStudent,
    onEditStudent,
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
                                Student records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Central student management
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <Users className="h-4 w-4" />
                        </div>
                    </div>

                    {/* Desktop Table */}
                    {students.length > 0 ? (
                        <>
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.5fr_1fr_1fr_0.8fr_0.5fr] md:gap-4">
                                {[
                                    "Student",
                                    "Course",
                                    "Batch",
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

                            {/* Student Records */}
                            {students.map((student) => (
                                <div key={student.id}>
                                    {/* Desktop Row */}
                                    <StudentTableRow
                                        student={student}
                                        onView={onViewStudent}
                                        onEdit={onEditStudent}
                                    />

                                    {/* Mobile Card */}
                                    <div className="px-4 py-2 md:hidden">
                                        <StudentMobileCard
                                            student={student}
                                            onView={onViewStudent}
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Pagination */}
                            <StudentPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            {/* Empty State */}
                            <StudentEmptyState
                                hasFilters={hasFilters}
                                onAddStudent={onAddStudent}
                            />

                            {/* Pagination */}
                            <StudentPagination
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

export default StudentTable;