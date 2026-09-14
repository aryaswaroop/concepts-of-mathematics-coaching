import Test from "../models/Test.js";
import Course from "../models/Course.js";
import Batch from "../models/Batch.js";

export const createTest = async ({
    title,
    type,
    class: testClass,
    courseId,
    batchId,
    testDate,
    duration,
    totalMarks,
    topics,
    instructions,
    status = "DRAFT",
    createdBy,
}) => {
    const course = await Course.findOne({
        _id: courseId,
        isActive: true,
    }).lean();

    if (!course) {
        const error = new Error("Active course not found");
        error.statusCode = 404;
        throw error;
    }

    if (course.class !== Number(testClass)) {
        const error = new Error(
            "Test class does not match the selected course"
        );
        error.statusCode = 400;
        throw error;
    }

    if (batchId) {
        const batch = await Batch.findOne({
            _id: batchId,
            courseId,
            status: { $in: ["ACTIVE", "FULL"] },
        }).lean();

        if (!batch) {
            const error = new Error(
                "Selected batch does not belong to the selected course or is inactive"
            );
            error.statusCode = 400;
            throw error;
        }
    }

    const test = await Test.create({
        title,
        type,
        class: Number(testClass),
        courseId,
        batchId: batchId || null,
        testDate,
        duration,
        totalMarks,
        topics: topics || [],
        instructions,
        status,
        createdBy,
    });

    return await Test.findById(test._id)
        .populate(
            "courseId",
            "name class subject originalFee"
        )
        .populate(
            "batchId",
            "name session shift startTime endTime capacity status"
        )
        .populate(
            "createdBy",
            "name email role"
        )
        .lean();
};

export const getAllTests = async (filters = {}) => {
    const query = {};

    if (filters.class) {
        query.class = Number(filters.class);
    }

    if (filters.courseId) {
        query.courseId = filters.courseId;
    }

    if (filters.batchId) {
        query.batchId = filters.batchId;
    }

    if (filters.type) {
        query.type = filters.type.toUpperCase();
    }

    if (filters.status) {
        query.status = filters.status.toUpperCase();
    }

    return await Test.find(query)
        .populate(
            "courseId",
            "name class subject originalFee"
        )
        .populate(
            "batchId",
            "name session shift startTime endTime capacity status"
        )
        .populate(
            "createdBy",
            "name email role"
        )
        .sort({ testDate: -1 })
        .lean();
};

export const getTestById = async (testId) => {
    return await Test.findById(testId)
        .populate(
            "courseId",
            "name class subject originalFee"
        )
        .populate(
            "batchId",
            "name session shift startTime endTime capacity status"
        )
        .populate(
            "createdBy",
            "name email role"
        )
        .lean();
};