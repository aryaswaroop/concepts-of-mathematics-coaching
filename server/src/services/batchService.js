import Batch from "../models/Batch.js";
import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";

const getCurrentStrength = async (batchId) => {
    return await Enrollment.countDocuments({
        batchId,
        status: "ACTIVE",
    });
};

export const getAllBatches = async (filters = {}) => {
    const query = {
        status: { $in: ["ACTIVE", "FULL"] },
    };

    if (filters.shift) {
        query.shift = filters.shift.toUpperCase();
    }

    if (filters.session) {
        query.session = filters.session;
    }

    if (filters.status) {
        query.status = filters.status.toUpperCase();
    }

    const batches = await Batch.find(query)
        .populate("courseId", "name class subject originalFee")
        .sort({
            shift: 1,
            startTime: 1,
        })
        .lean();

    const batchesWithStrength = await Promise.all(
        batches.map(async (batch) => {
            const currentStrength = await getCurrentStrength(batch._id);

            return {
                ...batch,
                currentStrength,
                availableSeats: Math.max(
                    batch.capacity - currentStrength,
                    0
                ),
            };
        })
    );

    return batchesWithStrength;
};

export const getBatchById = async (batchId) => {
    const batch = await Batch.findOne({
        _id: batchId,
        status: { $in: ["ACTIVE", "FULL"] },
    })
        .populate("courseId", "name class subject originalFee")
        .lean();

    if (!batch) {
        return null;
    }

    const currentStrength = await getCurrentStrength(batch._id);

    return {
        ...batch,
        currentStrength,
        availableSeats: Math.max(
            batch.capacity - currentStrength,
            0
        ),
    };
};

export const createBatch = async ({
    name,
    courseId,
    session,
    shift,
    startTime,
    endTime,
    capacity,
    notes,
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

    const existingBatch = await Batch.findOne({
        name,
        session,
    }).lean();

    if (existingBatch) {
        const error = new Error(
            "A batch with this name already exists for this session"
        );
        error.statusCode = 409;
        throw error;
    }

    const batch = await Batch.create({
        name,
        courseId,
        session,
        shift,
        startTime,
        endTime,
        capacity,
        status: "ACTIVE",
        notes,
    });

    return await Batch.findById(batch._id)
        .populate(
            "courseId",
            "name class subject originalFee"
        )
        .lean();
};