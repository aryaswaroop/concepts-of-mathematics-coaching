import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        class: {
            type: Number,
            required: true,
            enum: [11, 12],
        },

        subject: {
            type: String,
            required: true,
            default: "Mathematics",
            trim: true,
        },

        originalFee: {
            type: Number,
            required: true,
            min: 0,
        },

        description: {
            type: String,
            trim: true,
        },

        syllabus: [
            {
                type: String,
                trim: true,
            },
        ],

        resources: [
            {
                title: {
                    type: String,
                    trim: true,
                },

                url: {
                    type: String,
                    trim: true,
                },
            },
        ],

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;