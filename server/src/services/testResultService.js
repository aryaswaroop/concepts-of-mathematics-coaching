import TestResult from "../models/TestResult.js";
import Test from "../models/Test.js";
import Student from "../models/Student.js";

const calculateGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B+";
    if (percentage >= 60) return "B";
    if (percentage >= 50) return "C";
    if (percentage >= 40) return "D";
    return "F";
};

export const createTestResult = async ({
    testId,
    studentId,
    marksObtained,
    remarks,
}) => {
    const test = await Test.findById(testId).lean();

    if (!test) {
        const error = new Error("Test not found");
        error.statusCode = 404;
        throw error;
    }

    const student = await Student.findOne({
        _id: studentId,
        status: "ACTIVE",
    }).lean();

    if (!student) {
        const error = new Error("Active student not found");
        error.statusCode = 404;
        throw error;
    }

    if (student.class !== test.class) {
        const error = new Error(
            "Student class does not match the test class"
        );
        error.statusCode = 400;
        throw error;
    }

    if (
        marksObtained === undefined ||
        marksObtained < 0 ||
        marksObtained > test.totalMarks
    ) {
        const error = new Error(
            `Marks obtained must be between 0 and ${test.totalMarks}`
        );
        error.statusCode = 400;
        throw error;
    }

    const existingResult = await TestResult.findOne({
        testId,
        studentId,
    }).lean();

    if (existingResult) {
        const error = new Error(
            "Result already exists for this student and test"
        );
        error.statusCode = 409;
        throw error;
    }

    const percentage = Number(
        ((marksObtained / test.totalMarks) * 100).toFixed(2)
    );

    const grade = calculateGrade(percentage);

    const result = await TestResult.create({
        testId,
        studentId,
        marksObtained,
        percentage,
        grade,
        remarks,
        evaluationStatus: "EVALUATED",
        isPublished: false,
        evaluatedAt: new Date(),
    });

    return await TestResult.findById(result._id)
        .populate(
            "testId",
            "title type class testDate duration totalMarks topics status"
        )
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .lean();
};

export const getAllTestResults = async (filters = {}) => {
    const query = {};

    if (filters.testId) {
        query.testId = filters.testId;
    }

    if (filters.studentId) {
        query.studentId = filters.studentId;
    }

    if (filters.evaluationStatus) {
        query.evaluationStatus =
            filters.evaluationStatus.toUpperCase();
    }

    if (filters.isPublished !== undefined) {
        query.isPublished =
            filters.isPublished === true ||
            filters.isPublished === "true";
    }

    return await TestResult.find(query)
        .populate(
            "testId",
            "title type class testDate duration totalMarks topics status"
        )
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "evaluatedBy",
            "name email role"
        )
        .sort({ createdAt: -1 })
        .lean();
};

export const getTestResultById = async (resultId) => {
    return await TestResult.findById(resultId)
        .populate(
            "testId",
            "title type class testDate duration totalMarks topics status"
        )
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "evaluatedBy",
            "name email role"
        )
        .lean();
};

export const publishTestResult = async ({
    resultId,
    evaluatedBy,
}) => {
    const result = await TestResult.findById(resultId);

    if (!result) {
        const error = new Error("Test result not found");
        error.statusCode = 404;
        throw error;
    }

    if (result.evaluationStatus !== "EVALUATED") {
        const error = new Error(
            "Only evaluated results can be published"
        );
        error.statusCode = 400;
        throw error;
    }

    result.isPublished = true;
    result.publishedAt = new Date();
    result.evaluatedBy = evaluatedBy;

    await result.save();

    return await TestResult.findById(result._id)
        .populate(
            "testId",
            "title type class testDate duration totalMarks topics status"
        )
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "evaluatedBy",
            "name email role"
        )
        .lean();
};

export const unpublishTestResult = async (resultId) => {
    const result = await TestResult.findById(resultId);

    if (!result) {
        const error = new Error("Test result not found");
        error.statusCode = 404;
        throw error;
    }

    result.isPublished = false;
    result.publishedAt = null;

    await result.save();

    return await TestResult.findById(result._id)
        .populate(
            "testId",
            "title type class testDate duration totalMarks topics status"
        )
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "evaluatedBy",
            "name email role"
        )
        .lean();
};

export const calculateTestRanking = async (testId) => {
    const test = await Test.findById(testId).lean();

    if (!test) {
        const error = new Error("Test not found");
        error.statusCode = 404;
        throw error;
    }

    const results = await TestResult.find({
        testId,
        evaluationStatus: "EVALUATED",
    })
        .sort({
            percentage: -1,
            marksObtained: -1,
            createdAt: 1,
        })
        .lean();

    if (results.length === 0) {
        return [];
    }

    const rankedResults = results.map((result, index) => ({
        ...result,
        calculatedRank: index + 1,
    }));

    await Promise.all(
        rankedResults.map((result) =>
            TestResult.findByIdAndUpdate(result._id, {
                rank: result.calculatedRank,
            })
        )
    );

    return await TestResult.find({
        testId,
        evaluationStatus: "EVALUATED",
    })
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "testId",
            "title type class testDate totalMarks"
        )
        .sort({
            rank: 1,
        })
        .lean();
};