import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Batches from "../pages/Batches";
import TestsResults from "../pages/TestsResults";
import AdmissionFees from "../pages/AdmissionFees";
import Contact from "../pages/Contact";

import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => (
    <Routes>
        {/* Public Website */}
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

        {/* Student Portal */}
        <Route
            path="/student/*"
            element={<StudentRoutes />}
        />
        {/* Admin Portal */}
        <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
);

export default AppRoutes;