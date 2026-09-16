import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    getCurrentUser,
    loginUser,
} from "../services/api";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [isAppLoading, setIsAppLoading] =
        useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const [user, setUser] = useState(null);

    const [isAuthenticated, setIsAuthenticated] =
        useState(false);

    const [isAuthLoading, setIsAuthLoading] =
        useState(true);

    const [notification, setNotification] =
        useState(null);

    /*
    |--------------------------------------------------------------------------
    | Notification
    |--------------------------------------------------------------------------
    */

    const showNotification = (
        message,
        type = "info"
    ) => {
        setNotification({
            message,
            type,
        });
    };

    const clearNotification = () => {
        setNotification(null);
    };

    /*
    |--------------------------------------------------------------------------
    | Login
    |--------------------------------------------------------------------------
    */

    const login = async (credentials) => {
        const response = await loginUser(
            credentials
        );

        const {
            token,
            user: loggedInUser,
        } = response.data;

        localStorage.setItem(
            "authToken",
            token
        );

        localStorage.setItem(
            "authUser",
            JSON.stringify(loggedInUser)
        );

        setUser(loggedInUser);
        setIsAuthenticated(true);

        return loggedInUser;
    };

    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");

        setUser(null);
        setIsAuthenticated(false);
        setNotification(null);
    };

    /*
    |--------------------------------------------------------------------------
    | Restore Authentication
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const restoreAuthentication =
            async () => {
                const token =
                    localStorage.getItem(
                        "authToken"
                    );

                if (!token) {
                    setIsAuthLoading(false);
                    return;
                }

                try {
                    const response =
                        await getCurrentUser();

                    const currentUser =
                        response.data.user;

                    setUser(currentUser);
                    setIsAuthenticated(true);

                    localStorage.setItem(
                        "authUser",
                        JSON.stringify(
                            currentUser
                        )
                    );
                } catch (error) {
                    localStorage.removeItem(
                        "authToken"
                    );

                    localStorage.removeItem(
                        "authUser"
                    );

                    setUser(null);
                    setIsAuthenticated(false);
                } finally {
                    setIsAuthLoading(false);
                }
            };

        restoreAuthentication();
    }, []);

    const value = useMemo(
        () => ({
            isAppLoading,
            setIsAppLoading,

            isMobileMenuOpen,
            setIsMobileMenuOpen,

            user,
            setUser,

            isAuthenticated,
            setIsAuthenticated,

            isAuthLoading,

            login,
            logout,

            notification,
            showNotification,
            clearNotification,
        }),
        [
            isAppLoading,
            isMobileMenuOpen,
            user,
            isAuthenticated,
            isAuthLoading,
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