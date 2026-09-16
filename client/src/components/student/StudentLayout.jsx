import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";

import StudentFooter from "./StudentFooter";
import StudentSidebar from "./StudentSidebar";
import StudentTopbar from "./StudentTopbar";

import { useAppContext } from "../../context/AppContext";

const StudentLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const { logout } = useAppContext();

    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        logout();
        navigate("/auth/login", {
            replace: true,
        });
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900">
            <StudentSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                onLogout={handleLogout}
            />

            <div className="min-h-screen lg:pl-[280px]">
                <StudentTopbar
                    onMenuClick={() =>
                        setSidebarOpen(true)
                    }
                />

                <main className="relative min-h-[calc(100vh-76px)] overflow-hidden">
                    {/* Mathematical Grid */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-50"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.045) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />

                    {/* Ambient Glows */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl"
                    />

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -6,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                }}
                            >
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>

                <StudentFooter />
            </div>
        </div>
    );
};

export default StudentLayout;