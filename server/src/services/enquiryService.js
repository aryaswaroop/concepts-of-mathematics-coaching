import Enquiry from "../models/Enquiry.js";
import User from "../models/User.js";

export const createEnquiry = async ({
    name,
    phone,
    email,
    class: studentClass,
    message,
    source = "WEBSITE",
    status = "NEW",
    followUpDate,
    notes,
    handledBy,
}) => {
    const allowedSources = [
        "WEBSITE",
        "PHONE",
        "WALK_IN",
        "OTHER",
    ];

    const allowedStatuses = [
        "NEW",
        "CONTACTED",
        "FOLLOW_UP",
        "CONVERTED",
        "CLOSED",
    ];

    if (!allowedSources.includes(source)) {
        const error = new Error("Invalid enquiry source");
        error.statusCode = 400;
        throw error;
    }

    if (!allowedStatuses.includes(status)) {
        const error = new Error("Invalid enquiry status");
        error.statusCode = 400;
        throw error;
    }

    if (handledBy) {
        const user = await User.findOne({
            _id: handledBy,
            isActive: true,
        }).lean();

        if (!user) {
            const error = new Error("Active handler user not found");
            error.statusCode = 404;
            throw error;
        }
    }

    if (status === "FOLLOW_UP" && !followUpDate) {
        const error = new Error(
            "followUpDate is required for FOLLOW_UP enquiries"
        );
        error.statusCode = 400;
        throw error;
    }

    const enquiry = await Enquiry.create({
        name,
        phone,
        email,
        class: studentClass,
        message,
        source,
        status,
        followUpDate: followUpDate || null,
        notes,
        handledBy: handledBy || null,
    });

    return await Enquiry.findById(enquiry._id)
        .populate(
            "handledBy",
            "name email role"
        )
        .lean();
};


export const getAllEnquiries = async (filters = {}) => {
    const query = {};

    if (filters.source) {
        query.source = filters.source.toUpperCase();
    }

    if (filters.status) {
        query.status = filters.status.toUpperCase();
    }

    if (filters.class) {
        query.class = Number(filters.class);
    }

    return await Enquiry.find(query)
        .populate(
            "handledBy",
            "name email role"
        )
        .sort({
            createdAt: -1,
        })
        .lean();
};


export const getEnquiryById = async (enquiryId) => {
    return await Enquiry.findById(enquiryId)
        .populate(
            "handledBy",
            "name email role"
        )
        .lean();
};