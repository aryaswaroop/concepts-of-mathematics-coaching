import express from "express";

import {
    createNewAnnouncement,
    fetchAllAnnouncements,
    fetchAnnouncementById,
} from "../controllers/announcementController.js";

const router = express.Router();

router.post("/", createNewAnnouncement);

router.get("/", fetchAllAnnouncements);

router.get("/:id", fetchAnnouncementById);

export default router;