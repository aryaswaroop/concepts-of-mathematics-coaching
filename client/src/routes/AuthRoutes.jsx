import { Navigate, Route, Routes } from "react-router-dom";

import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";

import AuthRedirect from "./AuthRedirect";

const AuthRoutes = () => (
    <Routes>
        <Route
            index
            element={<AuthRedirect />}
        />

        <Route
            path="login"
            element={<Login />}
        />

        <Route
            path="forgot-password"
            element={<ForgotPassword />}
        />

        <Route
            path="reset-password"
            element={<ResetPassword />}
        />
    </Routes>
);

export default AuthRoutes;