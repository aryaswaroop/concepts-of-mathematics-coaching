import {
    createTest,
    getAllTests,
    getTestById,
} from "../services/testService.js";

export const createNewTest = async (req, res, next) => {
    try {
        const {
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
            status,
            createdBy,
        } = req.body;

        if (
            !title ||
            !type ||
            !testClass ||
            !courseId ||
            !testDate ||
            duration === undefined ||
            totalMarks === undefined ||
            !createdBy
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "title, type, class, courseId, testDate, duration, totalMarks and createdBy are required",
                data: null,
            });
        }

        if (![11, 12].includes(Number(testClass))) {
            return res.status(400).json({
                success: false,
                message: "Test class must be 11 or 12",
                data: null,
            });
        }

        const test = await createTest({
            title,
            type,
            class: Number(testClass),
            courseId,
            batchId,
            testDate,
            duration: Number(duration),
            totalMarks: Number(totalMarks),
            topics,
            instructions,
            status,
            createdBy,
        });

        res.status(201).json({
            success: true,
            message: "Test created successfully",
            data: test,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchAllTests = async (req, res, next) => {
    try {
        const tests = await getAllTests({
            class: req.query.class,
            courseId: req.query.courseId,
            batchId: req.query.batchId,
            type: req.query.type,
            status: req.query.status,
        });

        res.status(200).json({
            success: true,
            message: "Tests fetched successfully",
            data: tests,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchTestById = async (req, res, next) => {
    try {
        const test = await getTestById(req.params.id);

        if (!test) {
            return res.status(404).json({
                success: false,
                message: "Test not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Test fetched successfully",
            data: test,
        });
    } catch (error) {
        next(error);
    }
};