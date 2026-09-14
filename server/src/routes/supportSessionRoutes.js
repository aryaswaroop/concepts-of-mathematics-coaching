import express from "express";

import {
    createNewSupportSession,
    fetchAllSupportSessions,
    fetchSupportSessionById,
} from "../controllers/supportSessionController.js";

const router = express.Router();

router.post("/", createNewSupportSession);

router.get("/", fetchAllSupportSessions);

router.get("/:id", fetchSupportSessionById);

export default router;