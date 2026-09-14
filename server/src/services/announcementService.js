import Announcement from "../models/Announcement.js";
import Batch from "../models/Batch.js";

export const createAnnouncement = async ({
    title,
    message,
    target = "ALL",
    batchId,
    publishDate,
    expiryDate,
    isActive = true,
    createdBy,
}) => {
    if (target === "BATCH") {
        if (!batchId) {
            const error = new Error(
                "batchId is required for BATCH announcements"
            );
            error.statusCode = 400;
            throw error;
        }

        const batch = await Batch.findById(batchId).lean();

        if (!batch) {
            const error = new Error("Batch not found");
            error.statusCode = 404;
            throw error;
        }
    } else if (batchId) {
        const error = new Error(
            "batchId should only be provided for BATCH announcements"
        );
        error.statusCode = 400;
        throw error;
    }

    if (
        publishDate &&
        expiryDate &&
        new Date(expiryDate) < new Date(publishDate)
    ) {
        const error = new Error(
            "expiryDate cannot be earlier than publishDate"
        );
        error.statusCode = 400;
        throw error;
    }

    const announcement = await Announcement.create({
        title,
        message,
        target,
        batchId: target === "BATCH" ? batchId : null,
        publishDate: publishDate || new Date(),
        expiryDate: expiryDate || null,
        isActive,
        createdBy,
    });

    return await Announcement.findById(announcement._id)
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

export const getAllAnnouncements = async (filters = {}) => {
    const query = {};

    if (filters.target) {
        query.target = filters.target.toUpperCase();
    }

    if (filters.batchId) {
        query.batchId = filters.batchId;
    }

    if (filters.isActive !== undefined) {
        query.isActive =
            filters.isActive === true ||
            filters.isActive === "true";
    }

    return await Announcement.find(query)
        .populate(
            "batchId",
            "name session shift startTime endTime capacity status"
        )
        .populate(
            "createdBy",
            "name email role"
        )
        .sort({
            publishDate: -1,
            createdAt: -1,
        })
        .lean();
};

export const getAnnouncementById = async (announcementId) => {
    return await Announcement.findById(announcementId)
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