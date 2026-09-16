import { Navigate, Route, Routes } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Batches from "../pages/Batches";
import TestsResults from "../pages/TestsResults";
import AdmissionFees from "../pages/AdmissionFees";
import Contact from "../pages/Contact";

// Authentication
import AuthRoutes from "./AuthRoutes";

// Student Portal
import StudentRoutes from "./StudentRoutes";

// Admin Portal
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            {/* =====================================================
                PUBLIC WEBSITE
            ====================================================== */}
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/courses" element={<Courses />} />

            <Route path="/batches" element={<Batches />} />

            <Route
                path="/tests-results"
                element={<TestsResults />}
            />

            <Route
                path="/admission-fees"
                element={<AdmissionFees />}
            />

            <Route path="/contact" element={<Contact />} />

            {/* =====================================================
                AUTHENTICATION
            ====================================================== */}

            {/* Main authentication routes */}
            <Route
                path="/auth/*"
                element={<AuthRoutes />}
            />

            {/* Convenient login URL */}
            <Route
                path="/login"
                element={
                    <Navigate
                        to="/auth/login"
                        replace
                    />
                }
            />

            {/* =====================================================
                STUDENT PORTAL
            ====================================================== */}
            <Route
                path="/student/*"
                element={<StudentRoutes />}
            />

            {/* =====================================================
                ADMIN PORTAL
            ====================================================== */}
            <Route
                path="/admin/*"
                element={<AdminRoutes />}
            />

            {/* =====================================================
                FALLBACK
            ====================================================== */}
            <Route
                path="*"
                element={
                    <Navigate
                        to="/"
                        replace
                    />
                }
            />
        </Routes>
    );
};

export default AppRoutes;