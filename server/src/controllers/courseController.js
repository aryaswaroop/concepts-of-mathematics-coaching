import {
    getAllCourses,
    getCourseById,
} from "../services/courseService.js";

export const fetchAllCourses = async (req, res, next) => {
    try {
        const courses = await getAllCourses();

        res.status(200).json({
            success: true,
            message: "Courses fetched successfully",
            data: courses,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchCourseById = async (req, res, next) => {
    try {
        const course = await getCourseById(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Course fetched successfully",
            data: course,
        });
    } catch (error) {
        next(error);
    }
};