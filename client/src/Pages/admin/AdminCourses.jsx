import { useMemo, useState } from "react";

import AddCourseModal from "../../components/admin/courses/AddCourseModal";
import CourseDetailDrawer from "../../components/admin/courses/CourseDetailDrawer";
import CourseFilters from "../../components/admin/courses/CourseFilters";
import CourseTable from "../../components/admin/courses/CourseTable";
import CoursesPageHeader from "../../components/admin/courses/CoursesPageHeader";
import EditCourseModal from "../../components/admin/courses/EditCourseModal";

const AdminCourses = () => {
    const [search, setSearch] = useState("");
    const [grade, setGrade] = useState("all");
    const [status, setStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [editingCourse, setEditingCourse] = useState(null);

    /*
     * UI-only stage.
     *
     * Real course records will be loaded from the backend
     * during the integration phase.
     */
    const courses = [];

    const totalPages = 1;

    const hasFilters = useMemo(() => {
        return Boolean(
            search.trim() ||
            grade !== "all" ||
            status !== "all"
        );
    }, [search, grade, status]);

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleGradeChange = (value) => {
        setGrade(value);
        setCurrentPage(1);
    };

    const handleStatusChange = (value) => {
        setStatus(value);
        setCurrentPage(1);
    };

    const handleAddCourse = () => {
        setIsAddModalOpen(true);
    };

    const handleViewCourse = (course) => {
        setSelectedCourse(course);
    };

    const handleEditCourse = (course) => {
        setSelectedCourse(null);
        setEditingCourse(course);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <CoursesPageHeader
                onAddCourse={handleAddCourse}
            />

            <CourseFilters
                search={search}
                setSearch={handleSearchChange}
                grade={grade}
                setGrade={handleGradeChange}
                status={status}
                setStatus={handleStatusChange}
            />

            <CourseTable
                courses={courses}
                hasFilters={hasFilters}
                onAddCourse={handleAddCourse}
                onViewCourse={handleViewCourse}
                onEditCourse={handleEditCourse}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {/* Add Course */}
            <AddCourseModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            {/* Edit Course */}
            <EditCourseModal
                course={editingCourse}
                onClose={() => setEditingCourse(null)}
            />

            {/* Course Details */}
            <CourseDetailDrawer
                course={selectedCourse}
                onClose={() => setSelectedCourse(null)}
                onEdit={handleEditCourse}
            />

            <div className="h-6" />
        </div>
    );
};

export default AdminCourses;