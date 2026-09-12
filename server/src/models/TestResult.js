import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema(
    {
        testId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Test",
            required: true,
        },

        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

        marksObtained: {
            type: Number,
            required: true,
            min: 0,
        },

        percentage: {
            type: Number,
            min: 0,
            max: 100,
        },

        grade: {
            type: String,
            trim: true,
        },

        rank: {
            type: Number,
            min: 1,
            default: null,
        },

        remarks: {
            type: String,
            trim: true,
        },

        evaluationStatus: {
            type: String,
            enum: ["PENDING", "EVALUATED"],
            default: "PENDING",
        },

        isPublished: {
            type: Boolean,
            default: false,
        },

        evaluatedAt: {
            type: Date,
            default: null,
        },

        publishedAt: {
            type: Date,
            default: null,
        },

        evaluatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

testResultSchema.index(
    {
        testId: 1,
        studentId: 1,
    },
    {
        unique: true,
    }
);

const TestResult = mongoose.model("TestResult", testResultSchema);

export default TestResult;