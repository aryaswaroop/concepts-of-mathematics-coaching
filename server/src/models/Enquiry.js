import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            lowercase: true,
            trim: true,
        },

        class: {
            type: Number,
            enum: [11, 12],
        },

        message: {
            type: String,
            trim: true,
            maxlength: 1000,
        },

        source: {
            type: String,
            enum: ["WEBSITE", "PHONE", "WALK_IN", "OTHER"],
            default: "WEBSITE",
        },

        status: {
            type: String,
            enum: [
                "NEW",
                "CONTACTED",
                "FOLLOW_UP",
                "CONVERTED",
                "CLOSED",
            ],
            default: "NEW",
        },

        followUpDate: {
            type: Date,
            default: null,
        },

        notes: {
            type: String,
            trim: true,
        },

        handledBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

enquirySchema.index({
    status: 1,
    createdAt: -1,
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;