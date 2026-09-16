import { useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
    const location = useLocation();

    const isStudentPortal =
        location.pathname.startsWith("/student");

    const isAdminPortal =
        location.pathname.startsWith("/admin");

    const isAuthPage =
        location.pathname.startsWith("/auth") ||
        location.pathname === "/login";

    const isSpecialLayout =
        isStudentPortal ||
        isAdminPortal ||
        isAuthPage;

    return (
        <>

            <ScrollToTop />

            {/* Public Website Layout */}
            {!isSpecialLayout && <Navbar />}

            <AppRoutes />

            {!isSpecialLayout && <Footer />}
        </>
    );
};

export default App;
