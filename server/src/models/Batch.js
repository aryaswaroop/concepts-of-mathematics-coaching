import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },

        session: {
            type: String,
            required: true,
            trim: true,
        },

        shift: {
            type: String,
            enum: ["MORNING", "EVENING"],
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

        capacity: {
            type: Number,
            required: true,
            min: 1,
            max: 100,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "FULL", "INACTIVE"],
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

const Batch = mongoose.model("Batch", batchSchema);

export default Batch;