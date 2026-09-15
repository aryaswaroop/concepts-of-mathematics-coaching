import AdminAcademicOverview from "../../components/admin/AdminAcademicOverview";
import AdminActivityOverview from "../../components/admin/AdminActivityOverview";
import AdminAssessmentOverview from "../../components/admin/AdminAssessmentOverview";
import AdminDashboardHeader from "../../components/admin/AdminDashboardHeader";
import AdminFinanceOverview from "../../components/admin/AdminFinanceOverview";
import AdminOverviewCards from "../../components/admin/AdminOverviewCards";
import AdminPendingActions from "../../components/admin/AdminPendingActions";
import AdminQuickActions from "../../components/admin/AdminQuickActions";

const AdminDashboard = () => {
    return (
        <div>
            <AdminDashboardHeader />

            <AdminOverviewCards />

            <AdminAcademicOverview />

            <AdminAssessmentOverview />

            <AdminFinanceOverview />

            <AdminActivityOverview />

            <AdminPendingActions />

            <AdminQuickActions />

            <div className="h-6" />
        </div>
    );
};

export default AdminDashboard;