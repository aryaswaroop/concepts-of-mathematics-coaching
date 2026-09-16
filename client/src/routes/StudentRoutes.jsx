import { Navigate, Route, Routes } from "react-router-dom";

import StudentLayout from "../components/student/StudentLayout";

import StudentDashboard from "../pages/student/StudentDashboard";
import MyLearning from "../pages/student/MyLearning";
import MyBatch from "../pages/student/MyBatch";
import StudentTests from "../pages/student/StudentTests";
import StudentResults from "../pages/student/StudentResults";
import StudentRewards from "../pages/student/StudentRewards";
import StudentAnnouncements from "../pages/student/StudentAnnouncements";
import StudentSupport from "../pages/student/StudentSupport";
import StudentPayments from "../pages/student/StudentPayments";
import StudentProfile from "../pages/student/StudentProfile";
import StudentSettings from "../pages/student/StudentSettings";

import ProtectedRoute from "./ProtectedRoute";

const StudentRoutes = () => {
    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoute
                        allowedRoles={["STUDENT"]}
                    >
                        <StudentLayout />
                    </ProtectedRoute>
                }
            >
                <Route
                    index
                    element={
                        <Navigate
                            to="/student/dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="dashboard"
                    element={<StudentDashboard />}
                />

                <Route
                    path="learning"
                    element={<MyLearning />}
                />

                <Route
                    path="batch"
                    element={<MyBatch />}
                />

                <Route
                    path="tests"
                    element={<StudentTests />}
                />

                <Route
                    path="results"
                    element={<StudentResults />}
                />

                <Route
                    path="rewards"
                    element={<StudentRewards />}
                />

                <Route
                    path="announcements"
                    element={<StudentAnnouncements />}
                />

                <Route
                    path="support"
                    element={<StudentSupport />}
                />

                <Route
                    path="payments"
                    element={<StudentPayments />}
                />

                <Route
                    path="profile"
                    element={<StudentProfile />}
                />

                <Route
                    path="settings"
                    element={<StudentSettings />}
                />
            </Route>
        </Routes>
    );
};

export default StudentRoutes;