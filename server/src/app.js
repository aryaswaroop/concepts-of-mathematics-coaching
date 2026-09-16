import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

import courseRoutes from "./routes/courseRoutes.js";
import batchRoutes from "./routes/batchRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import testResultRoutes from "./routes/testResultRoutes.js";
import rewardRoutes from "./routes/rewardRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import supportSessionRoutes from "./routes/supportSessionRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

import errorMiddleware from "./middlewares/errorMiddleware.js";
import studentPortalRoutes from "./routes/studentPortalRoutes.js";

const app = express();

app.use(
    cors({
        origin:
            process.env.CLIENT_URL ||
            "http://localhost:5173",
    })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Concepts of Mathematics API is running",
    });
});

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

app.use("/api/auth", authRoutes);

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

app.use("/api/courses", courseRoutes);
app.use("/api/batches", batchRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/test-results", testResultRoutes);
app.use("/api/rewards", rewardRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/support-sessions", supportSessionRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/student", studentPortalRoutes);

app.use(errorMiddleware);

export default app;