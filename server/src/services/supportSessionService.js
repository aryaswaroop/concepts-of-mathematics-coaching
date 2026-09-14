import SupportSession from "../models/SupportSession.js";
import Student from "../models/Student.js";

export const createSupportSession = async ({
    studentId,
    date,
    startTime,
    endTime,
    reason,
    topics,
    remarks,
    status = "SCHEDULED",
    createdBy,
}) => {
    // Check student
    const student = await Student.findOne({
        _id: studentId,
        status: "ACTIVE",
    }).lean();

    if (!student) {
        const error = new Error("Active student not found");
        error.statusCode = 404;
        throw error;
    }

    // Validate time
    if (startTime >= endTime) {
        const error = new Error(
            "endTime must be later than startTime"
        );
        error.statusCode = 400;
        throw error;
    }

    // Validate status
    const allowedStatuses = [
        "SCHEDULED",
        "COMPLETED",
        "CANCELLED",
    ];

    if (!allowedStatuses.includes(status)) {
        const error = new Error(
            "Invalid support session status"
        );
        error.statusCode = 400;
        throw error;
    }

    // Create session
    const supportSession = await SupportSession.create({
        studentId,
        date,
        startTime,
        endTime,
        reason,
        topics,
        remarks,
        status,
        createdBy,
    });

    return await SupportSession.findById(
        supportSession._id
    )
        .populate(
            "studentId",
            "name admissionNumber class session phone email"
        )
        .populate(
            "createdBy",
            "name email role"
        )
        .lean();
};


export const getAllSupportSessions = async (filters = {}) => {
    const query = {};

    if (filters.studentId) {
        query.studentId = filters.studentId;
    }

    if (filters.status) {
        query.status = filters.status.toUpperCase();
    }

    return await SupportSession.find(query)
        .populate(
            "studentId",
            "name admissionNumber class session phone email"
        )
        .populate(
            "createdBy",
            "name email role"
        )
        .sort({
            date: -1,
            startTime: -1,
        })
        .lean();
};


export const getSupportSessionById = async (
    supportSessionId
) => {
    return await SupportSession.findById(
        supportSessionId
    )
        .populate(
            "studentId",
            "name admissionNumber class session phone email"
        )
        .populate(
            "createdBy",
            "name email role"
        )
        .lean();
};