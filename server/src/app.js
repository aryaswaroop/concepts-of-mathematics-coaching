import express from "express";
import cors from "cors";

import courseRoutes from "./routes/courseRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import batchRoutes from "./routes/batchRoutes.js";

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
    })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Concepts of Mathematics API is running",
    });
});

app.use("/api/courses", courseRoutes);
app.use("/api/batches", batchRoutes);

app.use(errorMiddleware);

export default app;