import express from "express";

import {
    createNewEnrollment,
    fetchAllEnrollments,
    fetchEnrollmentById,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", createNewEnrollment);

router.get("/", fetchAllEnrollments);

router.get("/:id", fetchEnrollmentById);

export default router;