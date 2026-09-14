import express from "express";

import {
    createNewTest,
    fetchAllTests,
    fetchTestById,
} from "../controllers/testController.js";

const router = express.Router();

router.post("/", createNewTest);

router.get("/", fetchAllTests);

router.get("/:id", fetchTestById);

export default router;