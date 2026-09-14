import {
    createEnrollment,
    getAllEnrollments,
    getEnrollmentById,
} from "../services/enrollmentService.js";

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

export const fetchAllEnrollments = async (req, res, next) => {
    try {
        const enrollments = await getAllEnrollments({
            studentId: req.query.studentId,
            courseId: req.query.courseId,
            batchId: req.query.batchId,
            session: req.query.session,
            status: req.query.status,
        });

        res.status(200).json({
            success: true,
            message: "Enrollments fetched successfully",
            data: enrollments,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchEnrollmentById = async (req, res, next) => {
    try {
        const enrollment = await getEnrollmentById(req.params.id);

        if (!enrollment) {
            return res.status(404).json({
                success: false,
                message: "Enrollment not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Enrollment fetched successfully",
            data: enrollment,
        });
    } catch (error) {
        next(error);
    }
};