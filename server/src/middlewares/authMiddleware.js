import jwt from "jsonwebtoken";

import User from "../models/User.js";

const protect = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (
            !authorization ||
            !authorization.startsWith("Bearer ")
        ) {
            return res.status(401).json({
                success: false,
                message: "Authentication required.",
                data: null,
            });
        }

        const token = authorization.split(" ")[1];

        if (!process.env.JWT_SECRET) {
            throw new Error(
                "JWT_SECRET is not defined in environment variables"
            );
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(decoded.userId).lean();

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User account not found.",
                data: null,
            });
        }

        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                message: "Your account is inactive.",
                data: null,
            });
        }

        req.user = user;

        next();
    } catch (error) {
        if (
            error.name === "JsonWebTokenError" ||
            error.name === "TokenExpiredError"
        ) {
            return res.status(401).json({
                success: false,
                message:
                    error.name === "TokenExpiredError"
                        ? "Your session has expired. Please login again."
                        : "Invalid authentication token.",
                data: null,
            });
        }

        next(error);
    }
};

export default protect;