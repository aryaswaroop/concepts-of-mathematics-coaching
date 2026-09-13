import Batch from "../models/Batch.js";
import Enrollment from "../models/Enrollment.js";

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