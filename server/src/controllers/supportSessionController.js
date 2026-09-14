import {
    createSupportSession,
    getAllSupportSessions,
    getSupportSessionById,
} from "../services/supportSessionService.js";


export const createNewSupportSession = async (
    req,
    res,
    next
) => {
    try {
        const {
            studentId,
            date,
            startTime,
            endTime,
            reason,
            topics,
            remarks,
            status,
            createdBy,
        } = req.body;

        if (
            !studentId ||
            !date ||
            !startTime ||
            !endTime ||
            !createdBy
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "studentId, date, startTime, endTime and createdBy are required",
                data: null,
            });
        }

        const supportSession =
            await createSupportSession({
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

        res.status(201).json({
            success: true,
            message:
                "Support session created successfully",
            data: supportSession,
        });
    } catch (error) {
        next(error);
    }
};


export const fetchAllSupportSessions = async (
    req,
    res,
    next
) => {
    try {
        const supportSessions =
            await getAllSupportSessions({
                studentId: req.query.studentId,
                status: req.query.status,
            });

        res.status(200).json({
            success: true,
            message:
                "Support sessions fetched successfully",
            data: supportSessions,
        });
    } catch (error) {
        next(error);
    }
};


export const fetchSupportSessionById = async (
    req,
    res,
    next
) => {
    try {
        const supportSession =
            await getSupportSessionById(
                req.params.id
            );

        if (!supportSession) {
            return res.status(404).json({
                success: false,
                message: "Support session not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Support session fetched successfully",
            data: supportSession,
        });
    } catch (error) {
        next(error);
    }
};