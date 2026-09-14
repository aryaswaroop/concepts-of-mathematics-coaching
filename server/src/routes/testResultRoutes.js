import express from "express";

import {
    createNewTestResult,
    fetchAllTestResults,
    fetchTestResultById,
    publishResult,
    unpublishResult,
    calculateRanking,
} from "../controllers/testResultController.js";

const router = express.Router();

router.post("/", createNewTestResult);

router.get("/", fetchAllTestResults);

router.patch(
    "/test/:testId/ranking",
    calculateRanking
);

router.patch("/:id/publish", publishResult);

router.patch("/:id/unpublish", unpublishResult);

router.get("/:id", fetchTestResultById);

export default router;