import { Navigate, useLocation } from "react-router-dom";

import PageLoader from "../components/common/PageLoader";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = ({
    children,
    allowedRoles,
}) => {
    const {
        isAuthenticated,
        isAuthLoading,
        user,
    } = useAppContext();

    const location = useLocation();

    if (isAuthLoading) {
        return <PageLoader />;
    }

    if (!isAuthenticated || !user) {
        return (
            <Navigate
                to="/auth/login"
                replace
                state={{
                    from: location.pathname,
                }}
            />
        );
    }

    if (
        allowedRoles &&
        !allowedRoles.includes(user.role)
    ) {
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
    }

    return children;
};

export default ProtectedRoute;