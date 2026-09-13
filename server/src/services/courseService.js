import Course from "../models/Course.js";

export const getAllCourses = async () => {
    return await Course.find({ isActive: true })
        .sort({ classLevel: 1 })
        .lean();
};

export const getCourseById = async (courseId) => {
    return await Course.findOne({
        _id: courseId,
        isActive: true,
    }).lean();
};