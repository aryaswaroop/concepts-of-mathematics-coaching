import express from "express";

import {
    createNewEnquiry,
    fetchAllEnquiries,
    fetchEnquiryById,
} from "../controllers/enquiryController.js";

const router = express.Router();

router.post("/", createNewEnquiry);

router.get("/", fetchAllEnquiries);

router.get("/:id", fetchEnquiryById);

export default router;