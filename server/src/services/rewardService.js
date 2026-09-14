import Reward from "../models/Reward.js";
import Student from "../models/Student.js";
import Test from "../models/Test.js";

export const createReward = async ({
    studentId,
    testId,
    title,
    description,
    rewardType,
    awardedDate,
    notes,
    awardedBy,
}) => {
    const student = await Student.findOne({
        _id: studentId,
        status: "ACTIVE",
    }).lean();

    if (!student) {
        const error = new Error("Active student not found");
        error.statusCode = 404;
        throw error;
    }

    if (testId) {
        const test = await Test.findById(testId).lean();

        if (!test) {
            const error = new Error("Test not found");
            error.statusCode = 404;
            throw error;
        }

        if (test.class !== student.class) {
            const error = new Error(
                "Student class does not match the selected test"
            );
            error.statusCode = 400;
            throw error;
        }
    }

    const reward = await Reward.create({
        studentId,
        testId: testId || null,
        title,
        description,
        rewardType,
        awardedDate: awardedDate || new Date(),
        notes,
        awardedBy,
    });

    return await Reward.findById(reward._id)
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "testId",
            "title type class testDate totalMarks"
        )
        .populate(
            "awardedBy",
            "name email role"
        )
        .lean();
};

export const getAllRewards = async (filters = {}) => {
    const query = {};

    if (filters.studentId) {
        query.studentId = filters.studentId;
    }

    if (filters.testId) {
        query.testId = filters.testId;
    }

    if (filters.rewardType) {
        query.rewardType = filters.rewardType.toUpperCase();
    }

    return await Reward.find(query)
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "testId",
            "title type class testDate totalMarks"
        )
        .populate(
            "awardedBy",
            "name email role"
        )
        .sort({
            awardedDate: -1,
            createdAt: -1,
        })
        .lean();
};

export const getRewardById = async (rewardId) => {
    return await Reward.findById(rewardId)
        .populate(
            "studentId",
            "name admissionNumber class phone email"
        )
        .populate(
            "testId",
            "title type class testDate totalMarks"
        )
        .populate(
            "awardedBy",
            "name email role"
        )
        .lean();
};