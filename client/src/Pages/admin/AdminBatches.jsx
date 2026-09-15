import { useMemo, useState } from "react";

import AddBatchModal from "../../components/admin/batches/AddBatchModal";
import BatchDetailDrawer from "../../components/admin/batches/BatchDetailDrawer";
import BatchFilters from "../../components/admin/batches/BatchFilters";
import BatchTable from "../../components/admin/batches/BatchTable";
import BatchesPageHeader from "../../components/admin/batches/BatchesPageHeader";
import EditBatchModal from "../../components/admin/batches/EditBatchModal";

const AdminBatches = () => {
    const [search, setSearch] = useState("");
    const [grade, setGrade] = useState("all");
    const [session, setSession] = useState("all");
    const [status, setStatus] = useState("all");

    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedBatch, setSelectedBatch] = useState(null);
    const [editingBatch, setEditingBatch] = useState(null);

    /*
     * UI-only stage.
     * Real records will come from the backend later.
     */
    const batches = [];

    const totalPages = 1;

    const hasFilters = useMemo(() => {
        return Boolean(
            search.trim() ||
            grade !== "all" ||
            session !== "all" ||
            status !== "all"
        );
    }, [search, grade, session, status]);

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleGradeChange = (value) => {
        setGrade(value);
        setCurrentPage(1);
    };

    const handleSessionChange = (value) => {
        setSession(value);
        setCurrentPage(1);
    };

    const handleStatusChange = (value) => {
        setStatus(value);
        setCurrentPage(1);
    };

    const handleAddBatch = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleCreateBatch = (batchData) => {
        console.log("Create batch:", batchData);

        setIsAddModalOpen(false);
    };

    const handleViewBatch = (batch) => {
        setSelectedBatch(batch);
    };

    const handleCloseDrawer = () => {
        setSelectedBatch(null);
    };

    const handleEditBatch = (batch) => {
        setSelectedBatch(null);
        setEditingBatch(batch);
    };

    const handleCloseEditModal = () => {
        setEditingBatch(null);
    };

    const handleUpdateBatch = (batchData) => {
        console.log("Update batch:", batchData);

        setEditingBatch(null);
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);
    };

    return (
        <div>
            <BatchesPageHeader
                onAddBatch={handleAddBatch}
            />

            <BatchFilters
                search={search}
                setSearch={handleSearchChange}
                grade={grade}
                setGrade={handleGradeChange}
                session={session}
                setSession={handleSessionChange}
                status={status}
                setStatus={handleStatusChange}
            />

            <BatchTable
                batches={batches}
                hasFilters={hasFilters}
                onAddBatch={handleAddBatch}
                onViewBatch={handleViewBatch}
                onEditBatch={handleEditBatch}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AddBatchModal
                isOpen={isAddModalOpen}
                onClose={handleCloseAddModal}
                onSubmit={handleCreateBatch}
            />

            <EditBatchModal
                isOpen={Boolean(editingBatch)}
                batch={editingBatch}
                onClose={handleCloseEditModal}
                onSubmit={handleUpdateBatch}
            />

            <BatchDetailDrawer
                isOpen={Boolean(selectedBatch)}
                batch={selectedBatch}
                onClose={handleCloseDrawer}
                onEdit={handleEditBatch}
            />

            <div className="h-6" />
        </div>
    );
};

export default AdminBatches;