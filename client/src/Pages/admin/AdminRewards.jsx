import { useMemo, useState } from "react";

import AddRewardModal from "../../components/admin/rewards/AddRewardModal";
import EditRewardModal from "../../components/admin/rewards/EditRewardModal";
import RewardDetailDrawer from "../../components/admin/rewards/RewardDetailDrawer";
import RewardFilters from "../../components/admin/rewards/RewardFilters";
import RewardTable from "../../components/admin/rewards/RewardTable";
import RewardsPageHeader from "../../components/admin/rewards/RewardsPageHeader";

const AdminRewards = () => {
    const [search, setSearch] = useState("");
    const [grade, setGrade] = useState("all");
    const [rewardType, setRewardType] = useState("all");
    const [status, setStatus] = useState("all");
    const [date, setDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedReward, setSelectedReward] = useState(null);
    const [editingReward, setEditingReward] = useState(null);

    // API integration will replace this with live reward records.
    const rewards = [];

    const totalPages = 1;

    const hasFilters = useMemo(
        () =>
            Boolean(
                search ||
                grade !== "all" ||
                rewardType !== "all" ||
                status !== "all" ||
                date
            ),
        [search, grade, rewardType, status, date]
    );

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleGradeChange = (value) => {
        setGrade(value);
        setCurrentPage(1);
    };

    const handleRewardTypeChange = (value) => {
        setRewardType(value);
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
        setGrade("all");
        setRewardType("all");
        setStatus("all");
        setDate("");
        setCurrentPage(1);
    };

    const handleAddReward = () => {
        setIsAddModalOpen(true);
    };

    const handleViewReward = (reward) => {
        setSelectedReward(reward);
    };

    const handleEditReward = (reward) => {
        setEditingReward(reward);
    };

    const handleAddSubmit = (rewardData) => {
        // API integration will be added later.
        console.log("Reward to create:", rewardData);
    };

    const handleEditSubmit = (rewardData) => {
        // API integration will be added later.
        console.log("Reward to update:", rewardData);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <RewardsPageHeader onAddReward={handleAddReward} />

            <RewardFilters
                search={search}
                setSearch={handleSearchChange}
                grade={grade}
                setGrade={handleGradeChange}
                rewardType={rewardType}
                setRewardType={handleRewardTypeChange}
                status={status}
                setStatus={handleStatusChange}
                date={date}
                setDate={handleDateChange}
                onClear={handleClearFilters}
            />

            <RewardTable
                rewards={rewards}
                hasFilters={hasFilters}
                onAddReward={handleAddReward}
                onViewReward={handleViewReward}
                onEditReward={handleEditReward}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AddRewardModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSubmit={handleAddSubmit}
            />

            <EditRewardModal
                reward={editingReward}
                onClose={() => setEditingReward(null)}
                onSubmit={handleEditSubmit}
            />

            <RewardDetailDrawer
                reward={selectedReward}
                onClose={() => setSelectedReward(null)}
            />
        </div>
    );
};

export default AdminRewards;