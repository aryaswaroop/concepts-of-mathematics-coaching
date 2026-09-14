import express from "express";

import {
    createNewBatch,
    fetchAllBatches,
    fetchBatchById,
} from "../controllers/batchController.js";

const router = express.Router();

router.post("/", createNewBatch);

router.get("/", fetchAllBatches);
router.get("/:id", fetchBatchById);

export default router;