import express from "express";

import {
    forgotPassword,
    getCurrentUser,
    login,
    resetPassword,
} from "../controllers/authController.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Authentication Routes
|--------------------------------------------------------------------------
*/

router.post("/login", login);

router.post(
    "/forgot-password",
    forgotPassword
);

router.post(
    "/reset-password",
    resetPassword
);

/*
|--------------------------------------------------------------------------
| Protected Authentication Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/me",
    protect,
    getCurrentUser
);

export default router;