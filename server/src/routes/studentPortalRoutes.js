import express from "express";

import {
    fetchStudentDashboard,
    fetchStudentLearning,
    fetchStudentBatch,
    fetchStudentTests,
    fetchStudentResults,
    fetchStudentRewards,
    fetchStudentAnnouncements,
    fetchStudentSupportSessions,
    fetchStudentPayments,
} from "../controllers/studentPortalController.js";

import protect from "../middlewares/authMiddleware.js";
import authorizeRoles from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.use(
    protect,
    authorizeRoles("STUDENT")
);

router.get(
    "/dashboard",
    fetchStudentDashboard
);

router.get(
    "/learning",
    fetchStudentLearning
);

router.get(
    "/batch",
    fetchStudentBatch
);

router.get(
    "/tests",
    fetchStudentTests
);

router.get(
    "/results",
    fetchStudentResults
);

router.get(
    "/rewards",
    fetchStudentRewards
);

router.get(
    "/announcements",
    fetchStudentAnnouncements
);

router.get(
    "/support",
    fetchStudentSupportSessions
);

router.get(
    "/payments",
    fetchStudentPayments
);

export default router;