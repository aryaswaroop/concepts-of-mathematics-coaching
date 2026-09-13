import express from "express";

import {
    fetchAllBatches,
    fetchBatchById,
} from "../controllers/batchController.js";

const router = express.Router();

router.get("/", fetchAllBatches);
router.get("/:id", fetchBatchById);

export default router;