import express from "express";

import {
    fetchAllCourses,
    fetchCourseById,
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", fetchAllCourses);
router.get("/:id", fetchCourseById);

export default router;