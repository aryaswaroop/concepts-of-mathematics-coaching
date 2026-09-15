import { BookOpen } from "lucide-react";

import CourseEmptyState from "./CourseEmptyState";
import CourseMobileCard from "./CourseMobileCard";
import CoursePagination from "./CoursePagination";
import CourseTableRow from "./CourseTableRow";

const CourseTable = ({
    courses = [],
    hasFilters,
    onAddCourse,
    onViewCourse,
    onEditCourse,
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
                                Course records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Academic course management
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <BookOpen className="h-4 w-4" />
                        </div>
                    </div>

                    {courses.length > 0 ? (
                        <>
                            {/* Desktop Column Headings */}
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.5fr_0.8fr_0.9fr_0.8fr_0.5fr] md:gap-4">
                                {[
                                    "Course",
                                    "Class",
                                    "Annual Fee",
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

                            {/* Course Records */}
                            {courses.map((course) => (
                                <div key={course.id}>
                                    {/* Desktop */}
                                    <CourseTableRow
                                        course={course}
                                        onView={onViewCourse}
                                        onEdit={onEditCourse}
                                    />

                                    {/* Mobile */}
                                    <div className="px-4 py-2 md:hidden">
                                        <CourseMobileCard
                                            course={course}
                                            onView={onViewCourse}
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Pagination */}
                            <CoursePagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <CourseEmptyState
                                hasFilters={hasFilters}
                                onAddCourse={onAddCourse}
                            />

                            <CoursePagination
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

export default CourseTable;