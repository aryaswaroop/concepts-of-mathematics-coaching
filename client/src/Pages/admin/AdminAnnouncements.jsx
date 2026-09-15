import { useMemo, useState } from "react";

import AddAnnouncementModal from "../../components/admin/announcements/AddAnnouncementModal";
import AnnouncementDetailDrawer from "../../components/admin/announcements/AnnouncementDetailDrawer";
import AnnouncementFilters from "../../components/admin/announcements/AnnouncementFilters";
import AnnouncementTable from "../../components/admin/announcements/AnnouncementTable";
import AnnouncementsPageHeader from "../../components/admin/announcements/AnnouncementsPageHeader";
import EditAnnouncementModal from "../../components/admin/announcements/EditAnnouncementModal";

const AdminAnnouncements = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [audience, setAudience] = useState("all");
    const [status, setStatus] = useState("all");
    const [date, setDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] =
        useState(null);
    const [editingAnnouncement, setEditingAnnouncement] =
        useState(null);

    // API integration will replace this with live announcement records.
    const announcements = [];

    const totalPages = 1;

    const hasFilters = useMemo(
        () =>
            Boolean(
                search ||
                category !== "all" ||
                audience !== "all" ||
                status !== "all" ||
                date
            ),
        [
            search,
            category,
            audience,
            status,
            date,
        ]
    );

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (value) => {
        setCategory(value);
        setCurrentPage(1);
    };

    const handleAudienceChange = (value) => {
        setAudience(value);
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
        setCategory("all");
        setAudience("all");
        setStatus("all");
        setDate("");
        setCurrentPage(1);
    };

    const handleAddAnnouncement = () => {
        setIsAddModalOpen(true);
    };

    const handleViewAnnouncement = (announcement) => {
        setSelectedAnnouncement(announcement);
    };

    const handleEditAnnouncement = (announcement) => {
        setEditingAnnouncement(announcement);
    };

    const handleAddSubmit = (announcementData) => {
        // API integration will be added later.
        console.log(
            "Announcement to create:",
            announcementData
        );
    };

    const handleEditSubmit = (announcementData) => {
        // API integration will be added later.
        console.log(
            "Announcement to update:",
            announcementData
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <AnnouncementsPageHeader
                onAddAnnouncement={
                    handleAddAnnouncement
                }
            />

            <AnnouncementFilters
                search={search}
                setSearch={handleSearchChange}
                category={category}
                setCategory={handleCategoryChange}
                audience={audience}
                setAudience={handleAudienceChange}
                status={status}
                setStatus={handleStatusChange}
                date={date}
                setDate={handleDateChange}
                onClear={handleClearFilters}
            />

            <AnnouncementTable
                announcements={announcements}
                hasFilters={hasFilters}
                onAddAnnouncement={
                    handleAddAnnouncement
                }
                onViewAnnouncement={
                    handleViewAnnouncement
                }
                onEditAnnouncement={
                    handleEditAnnouncement
                }
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AddAnnouncementModal
                isOpen={isAddModalOpen}
                onClose={() =>
                    setIsAddModalOpen(false)
                }
                onSubmit={handleAddSubmit}
            />

            <EditAnnouncementModal
                announcement={editingAnnouncement}
                onClose={() =>
                    setEditingAnnouncement(null)
                }
                onSubmit={handleEditSubmit}
            />

            <AnnouncementDetailDrawer
                announcement={selectedAnnouncement}
                onClose={() =>
                    setSelectedAnnouncement(null)
                }
            />
        </div>
    );
};

export default AdminAnnouncements;