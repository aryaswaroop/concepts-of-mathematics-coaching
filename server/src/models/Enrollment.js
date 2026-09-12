import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },

        batchId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Batch",
            required: true,
        },

        session: {
            type: String,
            required: true,
            trim: true,
        },

        admissionDate: {
            type: Date,
            default: Date.now,
        },

        originalFee: {
            type: Number,
            required: true,
            min: 0,
        },

        discount: {
            type: Number,
            default: 0,
            min: 0,
        },

        finalFee: {
            type: Number,
            required: true,
            min: 0,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "COMPLETED", "CANCELLED"],
            default: "ACTIVE",
        },

        notes: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

enrollmentSchema.index(
    {
        studentId: 1,
        courseId: 1,
        session: 1,
    },
    {
        unique: true,
    }
);

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;