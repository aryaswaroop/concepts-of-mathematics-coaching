import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },

        target: {
            type: String,
            enum: ["ALL", "CLASS_11", "CLASS_12", "BATCH"],
            default: "ALL",
        },

        batchId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Batch",
            default: null,
        },

        publishDate: {
            type: Date,
            default: Date.now,
        },

        expiryDate: {
            type: Date,
            default: null,
        },

        isActive: {
            type: Boolean,
            default: true,
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

announcementSchema.index({
    target: 1,
    publishDate: -1,
});

const Announcement = mongoose.model(
    "Announcement",
    announcementSchema
);

export default Announcement;