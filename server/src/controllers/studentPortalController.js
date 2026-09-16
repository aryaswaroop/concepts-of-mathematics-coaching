import {
    getStudentDashboard,
    getStudentLearning,
    getStudentBatch,
    getStudentTests,
    getStudentResults,
    getStudentRewards,
    getStudentAnnouncements,
    getStudentSupportSessions,
    getStudentPayments,
} from "../services/studentPortalService.js";

export const fetchStudentDashboard = async (
    req,
    res,
    next
) => {
    try {
        const dashboard = await getStudentDashboard(
            req.user._id
        );

        return res.status(200).json({
            success: true,
            message:
                "Student dashboard fetched successfully",
            data: dashboard,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentLearning = async (
    req,
    res,
    next
) => {
    try {
        const learning = await getStudentLearning(
            req.user._id
        );

        return res.status(200).json({
            success: true,
            message:
                "Student learning data fetched successfully",
            data: learning,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentBatch = async (
    req,
    res,
    next
) => {
    try {
        const batch = await getStudentBatch(
            req.user._id
        );

        return res.status(200).json({
            success: true,
            message:
                "Student batch data fetched successfully",
            data: batch,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentTests = async (
    req,
    res,
    next
) => {
    try {
        const tests = await getStudentTests(
            req.user._id
        );

        return res.status(200).json({
            success: true,
            message:
                "Student tests fetched successfully",
            data: tests,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentResults = async (
    req,
    res,
    next
) => {
    try {
        const results = await getStudentResults(
            req.user._id
        );

        return res.status(200).json({
            success: true,
            message:
                "Student results fetched successfully",
            data: results,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentRewards = async (
    req,
    res,
    next
) => {
    try {
        const rewards = await getStudentRewards(
            req.user._id
        );

        return res.status(200).json({
            success: true,
            message:
                "Student rewards fetched successfully",
            data: rewards,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentAnnouncements = async (
    req,
    res,
    next
) => {
    try {
        const announcements =
            await getStudentAnnouncements(
                req.user._id
            );

        return res.status(200).json({
            success: true,
            message:
                "Student announcements fetched successfully",
            data: announcements,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentSupportSessions = async (
    req,
    res,
    next
) => {
    try {
        const supportSessions =
            await getStudentSupportSessions(
                req.user._id
            );

        return res.status(200).json({
            success: true,
            message:
                "Student support sessions fetched successfully",
            data: supportSessions,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchStudentPayments = async (
    req,
    res,
    next
) => {
    try {
        const payments = await getStudentPayments(
            req.user._id
        );

        return res.status(200).json({
            success: true,
            message:
                "Student payment data fetched successfully",
            data: payments,
        });
    } catch (error) {
        next(error);
    }
};