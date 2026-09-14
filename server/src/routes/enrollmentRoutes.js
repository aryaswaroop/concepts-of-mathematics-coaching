import express from "express";

import {
    createNewEnrollment,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", createNewEnrollment);

export default router;