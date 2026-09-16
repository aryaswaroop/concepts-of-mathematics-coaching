import { Navigate, Route, Routes } from "react-router-dom";

import AdminLayout from "../components/admin/AdminLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminStudents from "../pages/admin/AdminStudents";
import AdminCourses from "../pages/admin/AdminCourses";
import AdminBatches from "../pages/admin/AdminBatches";
import AdminEnrollments from "../pages/admin/AdminEnrollments";
import AdminPayments from "../pages/admin/AdminPayments";
import AdminTests from "../pages/admin/AdminTests";
import AdminResults from "../pages/admin/AdminResults";
import AdminRewards from "../pages/admin/AdminRewards";
import AdminAnnouncements from "../pages/admin/AdminAnnouncements";
import AdminSupport from "../pages/admin/AdminSupport";
import AdminEnquiries from "../pages/admin/AdminEnquiries";
import AdminReports from "../pages/admin/AdminReports";
import AdminProfile from "../pages/admin/AdminProfile";
import AdminSettings from "../pages/admin/AdminSettings";

import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoute
                        allowedRoles={["ADMIN"]}
                    >
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route
                    index
                    element={
                        <Navigate
                            to="/admin/dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="dashboard"
                    element={<AdminDashboard />}
                />

                <Route
                    path="students"
                    element={<AdminStudents />}
                />

                <Route
                    path="courses"
                    element={<AdminCourses />}
                />

                <Route
                    path="batches"
                    element={<AdminBatches />}
                />

                <Route
                    path="enrollments"
                    element={<AdminEnrollments />}
                />

                <Route
                    path="payments"
                    element={<AdminPayments />}
                />

                <Route
                    path="tests"
                    element={<AdminTests />}
                />

                <Route
                    path="results"
                    element={<AdminResults />}
                />

                <Route
                    path="rewards"
                    element={<AdminRewards />}
                />

                <Route
                    path="announcements"
                    element={<AdminAnnouncements />}
                />

                <Route
                    path="support"
                    element={<AdminSupport />}
                />

                <Route
                    path="enquiries"
                    element={<AdminEnquiries />}
                />

                <Route
                    path="reports"
                    element={<AdminReports />}
                />

                <Route
                    path="profile"
                    element={<AdminProfile />}
                />

                <Route
                    path="settings"
                    element={<AdminSettings />}
                />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;