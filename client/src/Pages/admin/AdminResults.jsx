import { useState } from "react";

import ResultsPageHeader from "../../components/admin/results/ResultsPageHeader";
import ResultFilters from "../../components/admin/results/ResultFilters";
import ResultTable from "../../components/admin/results/ResultTable";
import AddResultModal from "../../components/admin/results/AddResultModal";
import EditResultModal from "../../components/admin/results/EditResultModal";
import ResultDetailDrawer from "../../components/admin/results/ResultDetailDrawer";

const AdminResults = () => {
    const [search, setSearch] = useState("");
    const [grade, setGrade] = useState("all");
    const [status, setStatus] = useState("all");
    const [testType, setTestType] = useState("all");
    const [date, setDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] =
        useState(false);

    const [selectedResult, setSelectedResult] =
        useState(null);

    const [editingResult, setEditingResult] =
        useState(null);

    /*
     * API integration will be added later.
     * No fabricated student scores or ranks are used.
     */
    const results = [];

    const totalPages = 1;

    const hasFilters =
        Boolean(search) ||
        grade !== "all" ||
        status !== "all" ||
        testType !== "all" ||
        Boolean(date);

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

    const handleTestTypeChange = (value) => {
        setTestType(value);
        setCurrentPage(1);
    };

    const handleDateChange = (value) => {
        setDate(value);
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        setSearch("");
        setGrade("all");
        setStatus("all");
        setTestType("all");
        setDate("");
        setCurrentPage(1);
    };

    const handleAddResult = () => {
        setIsAddModalOpen(true);
    };

    const handleCreateResult = (formData) => {
        console.log("Create result:", formData);

        setIsAddModalOpen(false);
    };

    const handleViewResult = (result) => {
        setSelectedResult(result);
    };

    const handleEditResult = (result) => {
        setSelectedResult(null);
        setEditingResult(result);
    };

    const handleUpdateResult = (formData) => {
        console.log("Update result:", formData);

        setEditingResult(null);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="pb-6">
            <ResultsPageHeader
                onAddResult={handleAddResult}
            />

            <ResultFilters
                search={search}
                grade={grade}
                status={status}
                testType={testType}
                date={date}
                onSearchChange={handleSearchChange}
                onGradeChange={handleGradeChange}
                onStatusChange={handleStatusChange}
                onTestTypeChange={handleTestTypeChange}
                onDateChange={handleDateChange}
                onClear={handleClearFilters}
            />

            <ResultTable
                results={results}
                hasFilters={hasFilters}
                onAddResult={handleAddResult}
                onViewResult={handleViewResult}
                onEditResult={handleEditResult}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AddResultModal
                isOpen={isAddModalOpen}
                onClose={() =>
                    setIsAddModalOpen(false)
                }
                onSubmit={handleCreateResult}
            />

            <EditResultModal
                isOpen={Boolean(editingResult)}
                result={editingResult}
                onClose={() =>
                    setEditingResult(null)
                }
                onSubmit={handleUpdateResult}
            />

            <ResultDetailDrawer
                isOpen={Boolean(selectedResult)}
                result={selectedResult}
                onClose={() =>
                    setSelectedResult(null)
                }
                onEdit={handleEditResult}
            />
        </div>
    );
};

export default AdminResults;