import express from "express";

import {
    createNewPayment,
    fetchAllPayments,
    fetchPaymentById,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/", createNewPayment);

router.get("/", fetchAllPayments);

router.get("/:id", fetchPaymentById);

export default router;