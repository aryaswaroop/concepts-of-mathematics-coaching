import { useMemo, useState } from "react";

import EnquiriesPageHeader from "../../components/admin/enquiries/EnquiriesPageHeader";
import EnquiryFilters from "../../components/admin/enquiries/EnquiryFilters";
import EnquiryTable from "../../components/admin/enquiries/EnquiryTable";
import AddEnquiryModal from "../../components/admin/enquiries/AddEnquiryModal";
import EditEnquiryModal from "../../components/admin/enquiries/EditEnquiryModal";
import EnquiryDetailDrawer from "../../components/admin/enquiries/EnquiryDetailDrawer";

const AdminEnquiries = () => {
    const [search, setSearch] = useState("");
    const [enquiryType, setEnquiryType] = useState("all");
    const [grade, setGrade] = useState("all");
    const [status, setStatus] = useState("all");
    const [priority, setPriority] = useState("all");
    const [date, setDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const [editingEnquiry, setEditingEnquiry] = useState(null);

    // API integration will replace this with live enquiry records.
    const enquiries = [];

    const totalPages = 1;

    const hasFilters = useMemo(() => {
        return (
            search.trim() !== "" ||
            enquiryType !== "all" ||
            grade !== "all" ||
            status !== "all" ||
            priority !== "all" ||
            date !== ""
        );
    }, [
        search,
        enquiryType,
        grade,
        status,
        priority,
        date,
    ]);

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleEnquiryTypeChange = (value) => {
        setEnquiryType(value);
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

    const handlePriorityChange = (value) => {
        setPriority(value);
        setCurrentPage(1);
    };

    const handleDateChange = (value) => {
        setDate(value);
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        setSearch("");
        setEnquiryType("all");
        setGrade("all");
        setStatus("all");
        setPriority("all");
        setDate("");
        setCurrentPage(1);
    };

    const handleAddEnquiry = () => {
        setIsAddModalOpen(true);
    };

    const handleViewEnquiry = (enquiry) => {
        setSelectedEnquiry(enquiry);
    };

    const handleEditEnquiry = (enquiry) => {
        setEditingEnquiry(enquiry);
    };

    const handleAddSubmit = (data) => {
        console.log("Add enquiry:", data);
    };

    const handleEditSubmit = (data) => {
        console.log("Edit enquiry:", data);
    };

    return (
        <div className="min-h-full">
            <EnquiriesPageHeader
                onAddEnquiry={handleAddEnquiry}
            />

            <EnquiryFilters
                search={search}
                setSearch={handleSearchChange}
                enquiryType={enquiryType}
                setEnquiryType={handleEnquiryTypeChange}
                grade={grade}
                setGrade={handleGradeChange}
                status={status}
                setStatus={handleStatusChange}
                priority={priority}
                setPriority={handlePriorityChange}
                date={date}
                setDate={handleDateChange}
                onClear={handleClearFilters}
            />

            <EnquiryTable
                enquiries={enquiries}
                hasFilters={hasFilters}
                onAddEnquiry={handleAddEnquiry}
                onViewEnquiry={handleViewEnquiry}
                onEditEnquiry={handleEditEnquiry}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            <AddEnquiryModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSubmit={handleAddSubmit}
            />

            <EditEnquiryModal
                isOpen={Boolean(editingEnquiry)}
                enquiry={editingEnquiry}
                onClose={() => setEditingEnquiry(null)}
                onSubmit={handleEditSubmit}
            />

            <EnquiryDetailDrawer
                isOpen={Boolean(selectedEnquiry)}
                enquiry={selectedEnquiry}
                onClose={() => setSelectedEnquiry(null)}
            />
        </div>
    );
};

export default AdminEnquiries;