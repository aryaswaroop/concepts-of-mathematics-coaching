import "dotenv/config";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import User from "./models/User.js";
import Course from "./models/Course.js";
import Batch from "./models/Batch.js";

import connectDatabase from "./config/database.js";

const seedDatabase = async () => {
    try {
        await connectDatabase();

        console.log("Connected to MongoDB for seeding...");

        // --------------------------------
        // 1. Create Admin
        // --------------------------------

        const hashedPassword = await bcrypt.hash(
            process.env.ADMIN_PASSWORD,
            12
        );

        const admin = await User.findOneAndUpdate(
            {
                email: process.env.ADMIN_EMAIL,
            },
            {
                name: process.env.ADMIN_NAME,
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
                role: "ADMIN",
                isActive: true,
            },
            {
                returnDocument: "after",
                upsert: true,
                setDefaultsOnInsert: true,
            }
        );

        console.log(`Admin ready: ${admin.email}`);

        // --------------------------------
        // 2. Create Courses
        // --------------------------------

        const class11Course = await Course.findOneAndUpdate(
            {
                class: 11,
                subject: "Mathematics",
            },
            {
                name: "Class 11 Mathematics",
                class: 11,
                subject: "Mathematics",
                originalFee: 2500,
                description:
                    "Mathematics coaching for Class 11 students.",
                isActive: true,
            },
            {
                returnDocument: "after",
                upsert: true,
                setDefaultsOnInsert: true,
            }
        );

        const class12Course = await Course.findOneAndUpdate(
            {
                class: 12,
                subject: "Mathematics",
            },
            {
                name: "Class 12 Mathematics",
                class: 12,
                subject: "Mathematics",
                originalFee: 3000,
                description:
                    "Mathematics coaching for Class 12 students with board examination preparation.",
                isActive: true,
            },
            {
                returnDocument: "after",
                upsert: true,
                setDefaultsOnInsert: true,
            }
        );

        console.log("Courses ready.");

        // --------------------------------
        // 3. Create Batches
        // --------------------------------

        const batches = [
            {
                name: "Class 11 Morning Batch",
                courseId: class11Course._id,
                session: "2026-27",
                shift: "MORNING",
                startTime: "06:30",
                endTime: "08:00",
                capacity: 50,
                status: "ACTIVE",
            },
            {
                name: "Class 11 Morning Batch 2",
                courseId: class11Course._id,
                session: "2026-27",
                shift: "MORNING",
                startTime: "08:00",
                endTime: "09:30",
                capacity: 50,
                status: "ACTIVE",
            },
            {
                name: "Class 12 Morning Batch",
                courseId: class12Course._id,
                session: "2026-27",
                shift: "MORNING",
                startTime: "09:30",
                endTime: "11:00",
                capacity: 60,
                status: "ACTIVE",
            },
            {
                name: "Class 11 Evening Batch",
                courseId: class11Course._id,
                session: "2026-27",
                shift: "EVENING",
                startTime: "17:00",
                endTime: "18:30",
                capacity: 50,
                status: "ACTIVE",
            },
            {
                name: "Class 12 Evening Batch",
                courseId: class12Course._id,
                session: "2026-27",
                shift: "EVENING",
                startTime: "18:30",
                endTime: "20:00",
                capacity: 60,
                status: "ACTIVE",
            },
        ];

        for (const batch of batches) {
            await Batch.findOneAndUpdate(
                {
                    name: batch.name,
                    session: batch.session,
                },
                batch,
                {
                    returnDocument: "after",
                    upsert: true,
                    setDefaultsOnInsert: true,
                }
            );
        }

        console.log("Batches ready.");

        console.log("Database seeding completed successfully.");

        await mongoose.connection.close();

        console.log("MongoDB connection closed.");
        process.exit(0);
    } catch (error) {
        console.error("Database seeding failed:", error.message);

        await mongoose.connection.close();

        process.exit(1);
    }
};

seedDatabase();