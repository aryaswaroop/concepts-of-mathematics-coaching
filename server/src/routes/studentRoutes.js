import express from "express";

import {
    createNewStudent,
    getMyStudentProfile,
} from "../controllers/studentController.js";

import protect from "../middlewares/authMiddleware.js";
import authorizeRoles from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post(
    "/",
    protect,
    authorizeRoles("ADMIN"),
    createNewStudent
);

router.get(
    "/me",
    protect,
    authorizeRoles("STUDENT"),
    getMyStudentProfile
);

export default router;