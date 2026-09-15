import { useMemo, useState } from "react";

import AddSupportSessionModal from "../../components/admin/support/AddSupportSessionModal";
import EditSupportSessionModal from "../../components/admin/support/EditSupportSessionModal";
import SupportFilters from "../../components/admin/support/SupportFilters";
import SupportPageHeader from "../../components/admin/support/SupportPageHeader";
import SupportSessionDetailDrawer from "../../components/admin/support/SupportSessionDetailDrawer";
import SupportTable from "../../components/admin/support/SupportTable";

const AdminSupport = () => {
    const [search, setSearch] = useState("");
    const [supportType, setSupportType] = useState("all");
    const [priority, setPriority] = useState("all");
    const [status, setStatus] = useState("all");
    const [date, setDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] =
        useState(false);

    const [selectedSession, setSelectedSession] =
        useState(null);

    const [editingSession, setEditingSession] =
        useState(null);

    // API integration will replace this with live support sessions.
    const sessions = [];

    const totalPages = 1;

    const hasFilters = useMemo(
        () =>
            Boolean(
                search ||
                supportType !== "all" ||
                priority !== "all" ||
                status !== "all" ||
                date
            ),
        [
            search,
            supportType,
            priority,
            status,
            date,
        ]
    );

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleSupportTypeChange = (value) => {
        setSupportType(value);
        setCurrentPage(1);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
        setCurrentPage(1);
    };

    const handleStatusChange = (value) => {
        setStatus(value);
        setCurrentPage(1);
    };

    const handleDateChange = (value) => {
        setDate(value);
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        setSearch("");
        setSupportType("all");
        setPriority("all");
        setStatus("all");
        setDate("");
        setCurrentPage(1);
    };

    const handleAddSession = () => {
        setIsAddModalOpen(true);
    };

    const handleViewSession = (session) => {
        setSelectedSession(session);
    };

    const handleEditSession = (session) => {
        setEditingSession(session);
    };

    const handleAddSubmit = (sessionData) => {
        // API integration will be added later.
        console.log(
            "Support session to create:",
            sessionData
        );
    };

    const handleEditSubmit = (sessionData) => {
        // API integration will be added later.
        console.log(
            "Support session to update:",
            sessionData
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <SupportPageHeader
                onAddSession={handleAddSession}
            />

            <SupportFilters
                search={search}
                setSearch={handleSearchChange}
                supportType={supportType}
                setSupportType={handleSupportTypeChange}
                priority={priority}
                setPriority={handlePriorityChange}
                status={status}
                setStatus={handleStatusChange}
                date={date}
                setDate={handleDateChange}
                onClear={handleClearFilters}
            />

            <SupportTable
                sessions={sessions}
                hasFilters={hasFilters}
                onAddSession={handleAddSession}
                onViewSession={handleViewSession}
                onEditSession={handleEditSession}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AddSupportSessionModal
                isOpen={isAddModalOpen}
                onClose={() =>
                    setIsAddModalOpen(false)
                }
                onSubmit={handleAddSubmit}
            />

            <EditSupportSessionModal
                session={editingSession}
                onClose={() =>
                    setEditingSession(null)
                }
                onSubmit={handleEditSubmit}
            />

            <SupportSessionDetailDrawer
                session={selectedSession}
                onClose={() =>
                    setSelectedSession(null)
                }
            />
        </div>
    );
};

export default AdminSupport;