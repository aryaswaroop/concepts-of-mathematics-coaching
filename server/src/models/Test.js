import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        type: {
            type: String,
            enum: ["WEEKLY", "MONTHLY", "REVISION", "PRE_BOARD"],
            required: true,
        },

        class: {
            type: Number,
            enum: [11, 12],
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
            default: null,
        },

        testDate: {
            type: Date,
            required: true,
        },

        duration: {
            type: Number,
            required: true,
            min: 1,
        },

        totalMarks: {
            type: Number,
            required: true,
            min: 1,
        },

        topics: [
            {
                type: String,
                trim: true,
            },
        ],

        instructions: {
            type: String,
            trim: true,
        },

        status: {
            type: String,
            enum: ["DRAFT", "SCHEDULED", "COMPLETED", "CANCELLED"],
            default: "DRAFT",
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

testSchema.index({
    courseId: 1,
    class: 1,
    testDate: -1,
});

const Test = mongoose.model("Test", testSchema);

export default Test;