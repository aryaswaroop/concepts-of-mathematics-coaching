import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        enrollmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Enrollment",
            required: true,
        },

        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 1,
        },

        paymentDate: {
            type: Date,
            default: Date.now,
        },

        paymentMethod: {
            type: String,
            enum: ["CASH", "UPI", "BANK_TRANSFER", "OTHER"],
            default: "CASH",
        },

        installmentNumber: {
            type: Number,
            required: true,
            min: 1,
            max: 3,
        },

        receiptNumber: {
            type: String,
            unique: true,
            sparse: true,
            trim: true,
        },

        notes: {
            type: String,
            trim: true,
        },

        recordedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

paymentSchema.index({
    enrollmentId: 1,
    installmentNumber: 1,
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;