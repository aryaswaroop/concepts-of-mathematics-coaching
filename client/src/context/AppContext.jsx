import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    // Global application state
    const [isAppLoading, setIsAppLoading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Authentication state foundation
    // Actual authentication will be connected later.
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Global UI state
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = "info") => {
        setNotification({
            message,
            type,
        });
    };

    const clearNotification = () => {
        setNotification(null);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setNotification(null);
    };

    const value = useMemo(
        () => ({
            // Application loading
            isAppLoading,
            setIsAppLoading,

            // Mobile navigation
            isMobileMenuOpen,
            setIsMobileMenuOpen,

            // Authentication foundation
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            logout,

            // Notifications
            notification,
            showNotification,
            clearNotification,
        }),
        [
            isAppLoading,
            isMobileMenuOpen,
            user,
            isAuthenticated,
            notification,
        ]
    );

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error(
            "useAppContext must be used inside AppProvider"
        );
    }

    return context;
};

export default AppContext;