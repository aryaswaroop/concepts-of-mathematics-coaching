import {
    createTestResult,
    getAllTestResults,
    getTestResultById,
    publishTestResult,
    unpublishTestResult,
    calculateTestRanking,
} from "../services/testResultService.js";

export const createNewTestResult = async (req, res, next) => {
    try {
        const {
            testId,
            studentId,
            marksObtained,
            remarks,
        } = req.body;

        if (
            !testId ||
            !studentId ||
            marksObtained === undefined
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "testId, studentId and marksObtained are required",
                data: null,
            });
        }

        const result = await createTestResult({
            testId,
            studentId,
            marksObtained: Number(marksObtained),
            remarks,
        });

        res.status(201).json({
            success: true,
            message: "Test result created successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchAllTestResults = async (req, res, next) => {
    try {
        const results = await getAllTestResults({
            testId: req.query.testId,
            studentId: req.query.studentId,
            evaluationStatus: req.query.evaluationStatus,
            isPublished: req.query.isPublished,
        });

        res.status(200).json({
            success: true,
            message: "Test results fetched successfully",
            data: results,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchTestResultById = async (req, res, next) => {
    try {
        const result = await getTestResultById(req.params.id);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Test result not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Test result fetched successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const publishResult = async (req, res, next) => {
    try {
        const { evaluatedBy } = req.body;

        if (!evaluatedBy) {
            return res.status(400).json({
                success: false,
                message: "evaluatedBy is required",
                data: null,
            });
        }

        const result = await publishTestResult({
            resultId: req.params.id,
            evaluatedBy,
        });

        res.status(200).json({
            success: true,
            message: "Test result published successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const unpublishResult = async (req, res, next) => {
    try {
        const result = await unpublishTestResult(req.params.id);

        res.status(200).json({
            success: true,
            message: "Test result unpublished successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const calculateRanking = async (req, res, next) => {
    try {
        const results = await calculateTestRanking(
            req.params.testId
        );

        res.status(200).json({
            success: true,
            message: "Test ranking calculated successfully",
            data: results,
        });
    } catch (error) {
        next(error);
    }
};