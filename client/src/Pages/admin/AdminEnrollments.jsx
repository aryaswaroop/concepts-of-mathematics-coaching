import { useMemo, useState } from "react";

import EnrollmentsPageHeader from "../../components/admin/enrollments/EnrollmentsPageHeader";
import EnrollmentFilters from "../../components/admin/enrollments/EnrollmentFilters";
import EnrollmentTable from "../../components/admin/enrollments/EnrollmentTable";
import AddEnrollmentModal from "../../components/admin/enrollments/AddEnrollmentModal";
import EditEnrollmentModal from "../../components/admin/enrollments/EditEnrollmentModal";
import EnrollmentDetailDrawer from "../../components/admin/enrollments/EnrollmentDetailDrawer";

const AdminEnrollments = () => {
    const [search, setSearch] = useState("");
    const [grade, setGrade] = useState("all");
    const [status, setStatus] = useState("all");
    const [paymentStatus, setPaymentStatus] = useState("all");

    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedEnrollment, setSelectedEnrollment] = useState(null);
    const [editingEnrollment, setEditingEnrollment] = useState(null);

    // API integration will be added later.
    // No fabricated enrollment records.
    const enrollments = [];

    const totalPages = 1;

    const hasFilters = useMemo(() => {
        return (
            search.trim() !== "" ||
            grade !== "all" ||
            status !== "all" ||
            paymentStatus !== "all"
        );
    }, [search, grade, status, paymentStatus]);

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

    const handlePaymentStatusChange = (value) => {
        setPaymentStatus(value);
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        setSearch("");
        setGrade("all");
        setStatus("all");
        setPaymentStatus("all");
        setCurrentPage(1);
    };

    const handleAddEnrollment = () => {
        setIsAddModalOpen(true);
    };

    const handleCreateEnrollment = (formData) => {
        // Backend/API integration will be connected later.
        console.log("Create enrollment:", formData);
    };

    const handleViewEnrollment = (enrollment) => {
        setSelectedEnrollment(enrollment);
    };

    const handleEditEnrollment = (enrollment) => {
        setSelectedEnrollment(null);
        setEditingEnrollment(enrollment);
    };

    const handleUpdateEnrollment = (formData) => {
        // Backend/API integration will be connected later.
        console.log("Update enrollment:", formData);
    };

    const handleCloseDrawer = () => {
        setSelectedEnrollment(null);
    };

    const handleCloseEditModal = () => {
        setEditingEnrollment(null);
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);
    };

    return (
        <div className="relative">
            <EnrollmentsPageHeader
                onAddEnrollment={handleAddEnrollment}
            />

            <EnrollmentFilters
                search={search}
                grade={grade}
                status={status}
                paymentStatus={paymentStatus}
                onSearchChange={handleSearchChange}
                onGradeChange={handleGradeChange}
                onStatusChange={handleStatusChange}
                onPaymentStatusChange={handlePaymentStatusChange}
                onClear={handleClearFilters}
            />

            <EnrollmentTable
                enrollments={enrollments}
                hasFilters={hasFilters}
                onAddEnrollment={handleAddEnrollment}
                onViewEnrollment={handleViewEnrollment}
                onEditEnrollment={handleEditEnrollment}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AddEnrollmentModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSubmit={handleCreateEnrollment}
            />

            <EditEnrollmentModal
                isOpen={Boolean(editingEnrollment)}
                enrollment={editingEnrollment}
                onClose={handleCloseEditModal}
                onSubmit={handleUpdateEnrollment}
            />

            <EnrollmentDetailDrawer
                isOpen={Boolean(selectedEnrollment)}
                enrollment={selectedEnrollment}
                onClose={handleCloseDrawer}
                onEdit={handleEditEnrollment}
            />
        </div>
    );
};

export default AdminEnrollments;