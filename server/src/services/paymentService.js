import Payment from "../models/Payment.js";
import Enrollment from "../models/Enrollment.js";

export const createPayment = async ({
    enrollmentId,
    amount,
    paymentDate,
    paymentMethod,
    installmentNumber,
    receiptNumber,
    recordedBy,
    notes,
}) => {
    const enrollment = await Enrollment.findById(enrollmentId).lean();

    if (!enrollment) {
        const error = new Error("Enrollment not found");
        error.statusCode = 404;
        throw error;
    }

    if (!amount || amount <= 0) {
        const error = new Error(
            "Payment amount must be greater than 0"
        );
        error.statusCode = 400;
        throw error;
    }

    if (
        !Number.isInteger(installmentNumber) ||
        installmentNumber < 1 ||
        installmentNumber > 3
    ) {
        const error = new Error(
            "Installment number must be between 1 and 3"
        );
        error.statusCode = 400;
        throw error;
    }

    if (!recordedBy) {
        const error = new Error("recordedBy is required");
        error.statusCode = 400;
        throw error;
    }

    const existingInstallment = await Payment.findOne({
        enrollmentId: enrollment._id,
        installmentNumber,
    }).lean();

    if (existingInstallment) {
        const error = new Error(
            `Installment ${installmentNumber} has already been recorded`
        );
        error.statusCode = 409;
        throw error;
    }

    const paidAmount = await Payment.aggregate([
        {
            $match: {
                enrollmentId: enrollment._id,
            },
        },
        {
            $group: {
                _id: null,
                total: { $sum: "$amount" },
            },
        },
    ]);

    const totalPaid = paidAmount[0]?.total || 0;
    const remainingAmount = enrollment.finalFee - totalPaid;

    if (amount > remainingAmount) {
        const error = new Error(
            `Payment amount cannot exceed remaining fee of ${remainingAmount}`
        );
        error.statusCode = 400;
        throw error;
    }

    const payment = await Payment.create({
        enrollmentId,
        studentId: enrollment.studentId,
        amount,
        paymentDate: paymentDate || new Date(),
        paymentMethod,
        installmentNumber,
        receiptNumber,
        recordedBy,
        notes,
    });

    return await Payment.findById(payment._id)
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "enrollmentId",
            "session originalFee discount finalFee status"
        )
        .populate(
            "recordedBy",
            "name email role"
        )
        .lean();
};

export const getAllPayments = async (filters = {}) => {
    const query = {};

    if (filters.enrollmentId) {
        query.enrollmentId = filters.enrollmentId;
    }

    if (filters.studentId) {
        query.studentId = filters.studentId;
    }

    if (filters.status) {
        query.status = filters.status.toUpperCase();
    }

    return await Payment.find(query)
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "enrollmentId",
            "session originalFee discount finalFee status"
        )
        .populate(
            "recordedBy",
            "name email role"
        )
        .sort({ paymentDate: -1, createdAt: -1 })
        .lean();
};

export const getPaymentById = async (paymentId) => {
    return await Payment.findById(paymentId)
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "enrollmentId",
            "session originalFee discount finalFee status"
        )
        .populate(
            "recordedBy",
            "name email role"
        )
        .lean();
};