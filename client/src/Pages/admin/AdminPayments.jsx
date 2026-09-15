import { useMemo, useState } from "react";

import AddPaymentModal from "../../components/admin/payments/AddPaymentModal";
import EditPaymentModal from "../../components/admin/payments/EditPaymentModal";
import PaymentDetailDrawer from "../../components/admin/payments/PaymentDetailDrawer";
import PaymentFilters from "../../components/admin/payments/PaymentFilters";
import PaymentsPageHeader from "../../components/admin/payments/PaymentsPageHeader";
import PaymentTable from "../../components/admin/payments/PaymentTable";

const AdminPayments = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [method, setMethod] = useState("all");
    const [grade, setGrade] = useState("all");

    const [currentPage, setCurrentPage] = useState(1);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [selectedPayment, setSelectedPayment] =
        useState(null);

    const [editingPayment, setEditingPayment] =
        useState(null);

    /*
     * Backend/API integration will be added later.
     *
     * Keep this empty for now so the admin UI never
     * displays fabricated payment records.
     */
    const payments = [];

    const totalPages = 1;

    const hasFilters = useMemo(() => {
        return (
            search.trim() !== "" ||
            status !== "all" ||
            method !== "all" ||
            grade !== "all"
        );
    }, [search, status, method, grade]);

    const handleSearchChange = (value) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleStatusChange = (value) => {
        setStatus(value);
        setCurrentPage(1);
    };

    const handleMethodChange = (value) => {
        setMethod(value);
        setCurrentPage(1);
    };

    const handleGradeChange = (value) => {
        setGrade(value);
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        setSearch("");
        setStatus("all");
        setMethod("all");
        setGrade("all");
        setCurrentPage(1);
    };

    /* -----------------------------
       Add payment
    ----------------------------- */

    const handleOpenAddPayment = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddPayment = () => {
        setIsAddModalOpen(false);
    };

    const handleAddPayment = (paymentData) => {
        console.log(
            "Payment data ready for API integration:",
            paymentData
        );

        setIsAddModalOpen(false);
    };

    /* -----------------------------
       View payment
    ----------------------------- */

    const handleViewPayment = (payment) => {
        setSelectedPayment(payment);
    };

    const handleClosePaymentDetails = () => {
        setSelectedPayment(null);
    };

    /* -----------------------------
       Edit payment
    ----------------------------- */

    const handleOpenEditPayment = (payment) => {
        setEditingPayment(payment);

        /*
         * If the detail drawer is open and the user
         * chooses edit, close the drawer first.
         */
        setSelectedPayment(null);
    };

    const handleCloseEditPayment = () => {
        setEditingPayment(null);
    };

    const handleEditPayment = (paymentData) => {
        console.log(
            "Updated payment data ready for API integration:",
            paymentData
        );

        setEditingPayment(null);
    };

    /* -----------------------------
       Pagination
    ----------------------------- */

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="pb-8">
            {/* Page header */}
            <PaymentsPageHeader
                onAddPayment={handleOpenAddPayment}
            />

            {/* Filters */}
            <PaymentFilters
                search={search}
                status={status}
                method={method}
                grade={grade}
                onSearchChange={handleSearchChange}
                onStatusChange={handleStatusChange}
                onMethodChange={handleMethodChange}
                onGradeChange={handleGradeChange}
                onClear={handleClearFilters}
            />

            {/* Payment records */}
            <PaymentTable
                payments={payments}
                hasFilters={hasFilters}
                onAddPayment={handleOpenAddPayment}
                onViewPayment={handleViewPayment}
                onEditPayment={handleOpenEditPayment}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {/* Add payment */}
            <AddPaymentModal
                isOpen={isAddModalOpen}
                onClose={handleCloseAddPayment}
                onSubmit={handleAddPayment}
            />

            {/* Edit payment */}
            <EditPaymentModal
                isOpen={Boolean(editingPayment)}
                payment={editingPayment}
                onClose={handleCloseEditPayment}
                onSubmit={handleEditPayment}
            />

            {/* Payment details */}
            <PaymentDetailDrawer
                isOpen={Boolean(selectedPayment)}
                payment={selectedPayment}
                onClose={handleClosePaymentDetails}
                onEdit={handleOpenEditPayment}
            />
        </div>
    );
};

export default AdminPayments;