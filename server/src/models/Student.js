import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        admissionNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        fatherName: {
            type: String,
            trim: true,
            maxlength: 100,
        },

        phone: {
            type: String,
            trim: true,
        },

        email: {
            type: String,
            lowercase: true,
            trim: true,
        },

        class: {
            type: Number,
            required: true,
            enum: [11, 12],
        },

        session: {
            type: String,
            required: true,
            trim: true,
        },

        school: {
            type: String,
            trim: true,
        },

        address: {
            type: String,
            trim: true,
        },

        admissionDate: {
            type: Date,
            default: Date.now,
        },

        photo: {
            type: String,
            default: null,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE", "COMPLETED"],
            default: "ACTIVE",
        },
    },
    {
        timestamps: true,
    }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;