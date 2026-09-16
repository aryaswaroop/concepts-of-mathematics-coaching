import { Navigate } from "react-router-dom";

import PageLoader from "../components/common/PageLoader";
import { useAppContext } from "../context/AppContext";

const AuthRedirect = () => {
    const {
        isAuthenticated,
        isAuthLoading,
        user,
    } = useAppContext();

    if (isAuthLoading) {
        return <PageLoader />;
    }

    if (!isAuthenticated || !user) {
        return (
            <Navigate
                to="/auth/login"
                replace
            />
        );
    }

    if (user.role === "ADMIN") {
        return (
            <Navigate
                to="/admin"
                replace
            />
        );
    }

    return (
        <Navigate
            to="/student"
            replace
        />
    );
};

export default AuthRedirect;