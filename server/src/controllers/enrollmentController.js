import { createEnrollment } from "../services/enrollmentService.js";

export const createNewEnrollment = async (req, res, next) => {
    try {
        const {
            studentId,
            courseId,
            batchId,
            discount,
            notes,
        } = req.body;

        if (!studentId || !courseId || !batchId) {
            return res.status(400).json({
                success: false,
                message: "studentId, courseId and batchId are required",
                data: null,
            });
        }

        const enrollment = await createEnrollment({
            studentId,
            courseId,
            batchId,
            discount,
            notes,
        });

        res.status(201).json({
            success: true,
            message: "Student enrolled successfully",
            data: enrollment,
        });
    } catch (error) {
        next(error);
    }
};