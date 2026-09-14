import {
    createPayment,
    getAllPayments,
    getPaymentById,
} from "../services/paymentService.js";

export const createNewPayment = async (req, res, next) => {
    try {
        const {
            enrollmentId,
            amount,
            paymentDate,
            paymentMethod,
            installmentNumber,
            receiptNumber,
            recordedBy,
            notes,
        } = req.body;

        if (
            !enrollmentId ||
            amount === undefined ||
            installmentNumber === undefined ||
            !recordedBy
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "enrollmentId, amount, installmentNumber and recordedBy are required",
                data: null,
            });
        }

        const payment = await createPayment({
            enrollmentId,
            amount: Number(amount),
            paymentDate,
            paymentMethod,
            installmentNumber: Number(installmentNumber),
            receiptNumber,
            recordedBy,
            notes,
        });

        res.status(201).json({
            success: true,
            message: "Payment recorded successfully",
            data: payment,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchAllPayments = async (req, res, next) => {
    try {
        const payments = await getAllPayments({
            enrollmentId: req.query.enrollmentId,
            studentId: req.query.studentId,
            status: req.query.status,
        });

        res.status(200).json({
            success: true,
            message: "Payments fetched successfully",
            data: payments,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchPaymentById = async (req, res, next) => {
    try {
        const payment = await getPaymentById(req.params.id);

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "Payment not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Payment fetched successfully",
            data: payment,
        });
    } catch (error) {
        next(error);
    }
};