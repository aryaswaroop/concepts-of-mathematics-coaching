import bcrypt from "bcryptjs";
import crypto from "crypto";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/

const getSafeUser = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    isActive: user.isActive,
    lastLogin: user.lastLogin,
});

/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
                data: null,
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const user = await User.findOne({
            email: normalizedEmail,
        }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
                data: null,
            });
        }

        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                message:
                    "Your account is currently inactive. Please contact the institute.",
                data: null,
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
                data: null,
            });
        }

        user.lastLogin = new Date();

        await user.save();

        const token = generateToken(user._id);

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            data: {
                token,
                user: getSafeUser(user),
            },
        });
    } catch (error) {
        next(error);
    }
};

/*
|--------------------------------------------------------------------------
| Get Current User
|--------------------------------------------------------------------------
*/

export const getCurrentUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).lean();

        if (!user) {
            return res.status(404).json({
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

        return res.status(200).json({
            success: true,
            message: "Current user fetched successfully.",
            data: {
                user: getSafeUser(user),
            },
        });
    } catch (error) {
        next(error);
    }
};

/*
|--------------------------------------------------------------------------
| Forgot Password
|--------------------------------------------------------------------------
*/

export const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required.",
                data: null,
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const user = await User.findOne({
            email: normalizedEmail,
        });

        /*
        |--------------------------------------------------------------------------
        | Security:
        | Do not reveal whether an email exists in production.
        |--------------------------------------------------------------------------
        */

        if (!user) {
            return res.status(200).json({
                success: true,
                message:
                    "If an account exists with this email, password reset instructions have been generated.",
                data: null,
            });
        }

        if (!user.isActive) {
            return res.status(200).json({
                success: true,
                message:
                    "If an account exists with this email, password reset instructions have been generated.",
                data: null,
            });
        }

        /*
        |--------------------------------------------------------------------------
        | Generate raw token
        |--------------------------------------------------------------------------
        */

        const rawToken = crypto.randomBytes(32).toString("hex");

        /*
        |--------------------------------------------------------------------------
        | Store only token hash in database
        |--------------------------------------------------------------------------
        */

        const hashedToken = crypto
            .createHash("sha256")
            .update(rawToken)
            .digest("hex");

        user.resetPasswordToken = hashedToken;

        /*
        | Reset token valid for 15 minutes.
        */

        user.resetPasswordExpires = new Date(
            Date.now() + 15 * 60 * 1000
        );

        await user.save();

        /*
        |--------------------------------------------------------------------------
        | Development reset URL
        |--------------------------------------------------------------------------
        |
        | In production this should be replaced by an email service.
        |--------------------------------------------------------------------------
        */

        const clientUrl =
            process.env.CLIENT_URL || "http://localhost:5173";

        const resetUrl = `${clientUrl}/auth/reset-password?token=${rawToken}`;

        const responseData =
            process.env.NODE_ENV === "production"
                ? null
                : {
                    resetUrl,
                    expiresInMinutes: 15,
                };

        return res.status(200).json({
            success: true,
            message:
                "If an account exists with this email, password reset instructions have been generated.",
            data: responseData,
        });
    } catch (error) {
        next(error);
    }
};

/*
|--------------------------------------------------------------------------
| Reset Password
|--------------------------------------------------------------------------
*/

export const resetPassword = async (req, res, next) => {
    try {
        const { token, password } = req.body;

        if (!token || !password) {
            return res.status(400).json({
                success: false,
                message: "Reset token and new password are required.",
                data: null,
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message:
                    "Password must be at least 6 characters long.",
                data: null,
            });
        }

        const hashedToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: {
                $gt: new Date(),
            },
        }).select("+password +resetPasswordToken +resetPasswordExpires");

        if (!user) {
            return res.status(400).json({
                success: false,
                message:
                    "This password reset link is invalid or has expired.",
                data: null,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        user.password = hashedPassword;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;

        await user.save();

        return res.status(200).json({
            success: true,
            message:
                "Password reset successfully. You can now sign in with your new password.",
            data: null,
        });
    } catch (error) {
        next(error);
    }
};