import mongoose from "mongoose";

const supportSessionSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        startTime: {
            type: String,
            required: true,
            trim: true,
        },

        endTime: {
            type: String,
            required: true,
            trim: true,
        },

        reason: {
            type: String,
            trim: true,
        },

        topics: [
            {
                type: String,
                trim: true,
            },
        ],

        remarks: {
            type: String,
            trim: true,
        },

        status: {
            type: String,
            enum: ["SCHEDULED", "COMPLETED", "CANCELLED"],
            default: "SCHEDULED",
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

supportSessionSchema.index({
    studentId: 1,
    date: -1,
});

const SupportSession = mongoose.model(
    "SupportSession",
    supportSessionSchema
);

export default SupportSession;