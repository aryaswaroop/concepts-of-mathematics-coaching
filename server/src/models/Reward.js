import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

        testId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Test",
            default: null,
        },

        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        description: {
            type: String,
            trim: true,
        },

        rewardType: {
            type: String,
            enum: [
                "GIFT",
                "APPRECIATION",
                "ACHIEVEMENT",
                "SPECIAL_RECOGNITION",
            ],
            required: true,
        },

        awardedDate: {
            type: Date,
            default: Date.now,
        },

        notes: {
            type: String,
            trim: true,
        },

        awardedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Reward = mongoose.model("Reward", rewardSchema);

export default Reward;