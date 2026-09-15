import { useState } from "react";

import TestsPageHeader from "../../components/admin/tests/TestsPageHeader";
import TestFilters from "../../components/admin/tests/TestFilters";
import TestTable from "../../components/admin/tests/TestTable";
import AddTestModal from "../../components/admin/tests/AddTestModal";
import EditTestModal from "../../components/admin/tests/EditTestModal";
import TestDetailDrawer from "../../components/admin/tests/TestDetailDrawer";

const AdminTests = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");
    const [status, setStatus] = useState("all");
    const [grade, setGrade] = useState("all");
    const [date, setDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] =
        useState(false);

    const [selectedTest, setSelectedTest] =
        useState(null);

    const [editingTest, setEditingTest] =
        useState(null);

    /*
     * API integration will be added later.
     * Keep this empty so no fabricated test data
     * appears in the management interface.
     */
    const tests = [];

    const totalPages = 1;

    const hasFilters =
        Boolean(search) ||
        type !== "all" ||
        status !== "all" ||
        grade !== "all" ||
        Boolean(date);

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleTypeChange = (value) => {
        setType(value);
        setCurrentPage(1);
    };

    const handleStatusChange = (value) => {
        setStatus(value);
        setCurrentPage(1);
    };

    const handleGradeChange = (value) => {
        setGrade(value);
        setCurrentPage(1);
    };

    const handleDateChange = (value) => {
        setDate(value);
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        setSearch("");
        setType("all");
        setStatus("all");
        setGrade("all");
        setDate("");
        setCurrentPage(1);
    };

    const handleAddTest = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleCreateTest = (formData) => {
        console.log("Create test:", formData);

        setIsAddModalOpen(false);
    };

    const handleViewTest = (test) => {
        setSelectedTest(test);
    };

    const handleCloseDrawer = () => {
        setSelectedTest(null);
    };

    const handleEditTest = (test) => {
        setSelectedTest(null);
        setEditingTest(test);
    };

    const handleCloseEditModal = () => {
        setEditingTest(null);
    };

    const handleUpdateTest = (formData) => {
        console.log("Update test:", formData);

        setEditingTest(null);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="pb-6">
            <TestsPageHeader
                onAddTest={handleAddTest}
            />

            <TestFilters
                search={search}
                type={type}
                status={status}
                grade={grade}
                date={date}
                onSearchChange={handleSearchChange}
                onTypeChange={handleTypeChange}
                onStatusChange={handleStatusChange}
                onGradeChange={handleGradeChange}
                onDateChange={handleDateChange}
                onClear={handleClearFilters}
            />

            <TestTable
                tests={tests}
                hasFilters={hasFilters}
                onAddTest={handleAddTest}
                onViewTest={handleViewTest}
                onEditTest={handleEditTest}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {/* Add Test */}
            <AddTestModal
                isOpen={isAddModalOpen}
                onClose={handleCloseAddModal}
                onSubmit={handleCreateTest}
            />

            {/* Edit Test */}
            <EditTestModal
                isOpen={Boolean(editingTest)}
                test={editingTest}
                onClose={handleCloseEditModal}
                onSubmit={handleUpdateTest}
            />

            {/* Test Details */}
            <TestDetailDrawer
                isOpen={Boolean(selectedTest)}
                test={selectedTest}
                onClose={handleCloseDrawer}
                onEdit={handleEditTest}
            />
        </div>
    );
};

export default AdminTests;