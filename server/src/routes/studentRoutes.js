import express from "express";

import {
    createNewStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createNewStudent);

export default router;