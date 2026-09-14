import express from "express";

import {
    createNewReward,
    fetchAllRewards,
    fetchRewardById,
} from "../controllers/rewardController.js";

const router = express.Router();

router.post("/", createNewReward);

router.get("/", fetchAllRewards);

router.get("/:id", fetchRewardById);

export default router;