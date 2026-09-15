import { useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    const location = useLocation();

    const isStudentPortal =
        location.pathname.startsWith("/student");

    const isAdminPortal =
        location.pathname.startsWith("/admin");

    const isDashboardPortal =
        isStudentPortal || isAdminPortal;

    return (
        <>
            {/* Public Website Layout */}
            {!isDashboardPortal && <Navbar />}

            <AppRoutes />

            {!isDashboardPortal && <Footer />}
        </>
    );
};

export default App;