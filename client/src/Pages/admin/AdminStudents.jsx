import { useMemo, useState } from "react";

import AddStudentModal from "../../components/admin/students/AddStudentModal";
import EditStudentModal from "../../components/admin/students/EditStudentModal";
import StudentDetailDrawer from "../../components/admin/students/StudentDetailDrawer";
import StudentFilters from "../../components/admin/students/StudentFilters";
import StudentTable from "../../components/admin/students/StudentTable";
import StudentsPageHeader from "../../components/admin/students/StudentsPageHeader";

const AdminStudents = () => {
    const [search, setSearch] = useState("");
    const [course, setCourse] = useState("all");
    const [status, setStatus] = useState("all");

    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] =
        useState(false);

    const [selectedStudent, setSelectedStudent] =
        useState(null);

    const [editingStudent, setEditingStudent] =
        useState(null);

    /*
     * Temporary UI dataset.
     *
     * Real records will be loaded from:
     * GET /api/students
     *
     * during frontend integration.
     */
    const students = [];

    const totalPages = 1;

    const hasFilters = useMemo(() => {
        return Boolean(
            search.trim() ||
            course !== "all" ||
            status !== "all"
        );
    }, [search, course, status]);

    const handleAddStudent = () => {
        setIsAddModalOpen(true);
    };

    const handleViewStudent = (student) => {
        setSelectedStudent(student);
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <StudentsPageHeader
                onAddStudent={handleAddStudent}
            />

            <StudentFilters
                search={search}
                setSearch={(value) => {
                    setSearch(value);
                    setCurrentPage(1);
                }}
                course={course}
                setCourse={(value) => {
                    setCourse(value);
                    setCurrentPage(1);
                }}
                status={status}
                setStatus={(value) => {
                    setStatus(value);
                    setCurrentPage(1);
                }}
            />

            <StudentTable
                students={students}
                hasFilters={hasFilters}
                onAddStudent={handleAddStudent}
                onViewStudent={handleViewStudent}
                onEditStudent={handleEditStudent}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AddStudentModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            <EditStudentModal
                student={editingStudent}
                onClose={() => setEditingStudent(null)}
            />

            <StudentDetailDrawer
                student={selectedStudent}
                onClose={() => setSelectedStudent(null)}
            />

            <div className="h-6" />
        </div>
    );
};

export default AdminStudents;