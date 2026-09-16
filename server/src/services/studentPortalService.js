import Student from "../models/Student.js";
import Enrollment from "../models/Enrollment.js";
import Payment from "../models/Payment.js";
import Test from "../models/Test.js";
import TestResult from "../models/TestResult.js";
import Reward from "../models/Reward.js";
import Announcement from "../models/Announcement.js";
import SupportSession from "../models/SupportSession.js";

const getStudentForUser = async (userId) => {
    const student = await Student.findOne({
        userId,
        status: {
            $in: ["ACTIVE", "COMPLETED"],
        },
    }).lean();

    if (!student) {
        const error = new Error("Student profile not found");
        error.statusCode = 404;
        throw error;
    }

    return student;
};

const getActiveEnrollments = async (studentId) => {
    return await Enrollment.find({
        studentId,
        status: "ACTIVE",
    })
        .populate(
            "courseId",
            "name class subject description syllabus resources originalFee"
        )
        .populate(
            "batchId",
            "name session shift startTime endTime capacity status notes"
        )
        .sort({
            admissionDate: -1,
            createdAt: -1,
        })
        .lean();
};

const mapLearning = (enrollments) => {
    return enrollments.map((enrollment) => ({
        id: enrollment._id,
        session: enrollment.session,
        admissionDate: enrollment.admissionDate,
        status: enrollment.status,

        course: enrollment.courseId
            ? {
                id: enrollment.courseId._id,
                name: enrollment.courseId.name,
                class: enrollment.courseId.class,
                subject: enrollment.courseId.subject,
                description: enrollment.courseId.description,
                syllabus: enrollment.courseId.syllabus || [],
                resources: enrollment.courseId.resources || [],
            }
            : null,

        batch: enrollment.batchId
            ? {
                id: enrollment.batchId._id,
                name: enrollment.batchId.name,
                session: enrollment.batchId.session,
                shift: enrollment.batchId.shift,
                startTime: enrollment.batchId.startTime,
                endTime: enrollment.batchId.endTime,
                status: enrollment.batchId.status,
            }
            : null,

        fee: {
            originalFee: enrollment.originalFee,
            discount: enrollment.discount,
            finalFee: enrollment.finalFee,
        },
    }));
};

export const getStudentDashboard = async (userId) => {
    const student = await getStudentForUser(userId);

    const enrollments = await getActiveEnrollments(
        student._id
    );

    const enrollmentIds = enrollments.map(
        (enrollment) => enrollment._id
    );

    const courseIds = enrollments
        .filter((enrollment) => enrollment.courseId)
        .map((enrollment) => enrollment.courseId._id);

    const batchIds = enrollments
        .filter((enrollment) => enrollment.batchId)
        .map((enrollment) => enrollment.batchId._id);

    const now = new Date();

    const [
        upcomingTests,
        recentResults,
        recentRewards,
        announcements,
        payments,
    ] = await Promise.all([
        Test.find({
            status: {
                $in: ["SCHEDULED", "COMPLETED"],
            },
            courseId: {
                $in: courseIds,
            },
            $or: [
                {
                    batchId: {
                        $in: batchIds,
                    },
                },
                {
                    batchId: null,
                },
            ],
            testDate: {
                $gte: now,
            },
        })
            .select(
                "title type class courseId batchId testDate duration totalMarks topics status"
            )
            .populate(
                "courseId",
                "name class subject"
            )
            .populate(
                "batchId",
                "name session shift startTime endTime"
            )
            .sort({
                testDate: 1,
            })
            .limit(5)
            .lean(),

        TestResult.find({
            studentId: student._id,
            evaluationStatus: "EVALUATED",
            isPublished: true,
        })
            .select(
                "testId marksObtained percentage grade rank remarks publishedAt createdAt"
            )
            .populate(
                "testId",
                "title type class testDate totalMarks topics"
            )
            .sort({
                createdAt: -1,
            })
            .limit(5)
            .lean(),

        Reward.find({
            studentId: student._id,
        })
            .select(
                "title description rewardType awardedDate testId"
            )
            .populate(
                "testId",
                "title type testDate totalMarks"
            )
            .sort({
                awardedDate: -1,
                createdAt: -1,
            })
            .limit(5)
            .lean(),

        Announcement.find({
            isActive: true,
            publishDate: {
                $lte: now,
            },
            $or: [
                {
                    expiryDate: null,
                },
                {
                    expiryDate: {
                        $gte: now,
                    },
                },
            ],
            $and: [
                {
                    $or: [
                        {
                            target: "ALL",
                        },
                        {
                            target:
                                student.class === 11
                                    ? "CLASS_11"
                                    : "CLASS_12",
                        },
                        {
                            target: "BATCH",
                            batchId: {
                                $in: batchIds,
                            },
                        },
                    ],
                },
            ],
        })
            .select(
                "title message target batchId publishDate expiryDate"
            )
            .populate(
                "batchId",
                "name session shift"
            )
            .sort({
                publishDate: -1,
                createdAt: -1,
            })
            .limit(10)
            .lean(),

        Payment.find({
            studentId: student._id,
            ...(enrollmentIds.length > 0
                ? {
                    enrollmentId: {
                        $in: enrollmentIds,
                    },
                }
                : {}),
        })
            .select(
                "enrollmentId amount paymentDate paymentMethod installmentNumber receiptNumber"
            )
            .populate(
                "enrollmentId",
                "session originalFee discount finalFee status"
            )
            .sort({
                paymentDate: -1,
                createdAt: -1,
            })
            .lean(),
    ]);

    const totalFee = enrollments.reduce(
        (total, enrollment) =>
            total + Number(enrollment.finalFee || 0),
        0
    );

    const totalPaid = payments.reduce(
        (total, payment) =>
            total + Number(payment.amount || 0),
        0
    );

    return {
        student: {
            id: student._id,
            name: student.name,
            admissionNumber: student.admissionNumber,
            class: student.class,
            session: student.session,
            school: student.school,
            photo: student.photo,
            status: student.status,
        },

        learning: mapLearning(enrollments),

        tests: upcomingTests,

        results: recentResults,

        rewards: recentRewards,

        announcements,

        payments: {
            summary: {
                totalFee,
                totalPaid,
                pendingAmount: Math.max(
                    totalFee - totalPaid,
                    0
                ),
            },
            recent: payments.slice(0, 5),
        },
    };
};

export const getStudentLearning = async (userId) => {
    const student = await getStudentForUser(userId);

    const enrollments = await getActiveEnrollments(
        student._id
    );

    return mapLearning(enrollments);
};

export const getStudentBatch = async (userId) => {
    const student = await getStudentForUser(userId);

    const enrollment = await Enrollment.findOne({
        studentId: student._id,
        status: "ACTIVE",
    })
        .populate(
            "batchId",
            "name session shift startTime endTime capacity status notes"
        )
        .populate(
            "courseId",
            "name class subject"
        )
        .sort({
            admissionDate: -1,
            createdAt: -1,
        })
        .lean();

    if (!enrollment) {
        return null;
    }

    return {
        enrollmentId: enrollment._id,

        batch: enrollment.batchId
            ? {
                id: enrollment.batchId._id,
                name: enrollment.batchId.name,
                session: enrollment.batchId.session,
                shift: enrollment.batchId.shift,
                startTime: enrollment.batchId.startTime,
                endTime: enrollment.batchId.endTime,
                capacity: enrollment.batchId.capacity,
                status: enrollment.batchId.status,
            }
            : null,

        course: enrollment.courseId
            ? {
                id: enrollment.courseId._id,
                name: enrollment.courseId.name,
                class: enrollment.courseId.class,
                subject: enrollment.courseId.subject,
            }
            : null,

        session: enrollment.session,
    };
};

export const getStudentTests = async (userId) => {
    const student = await getStudentForUser(userId);

    const enrollments = await getActiveEnrollments(
        student._id
    );

    const courseIds = enrollments.map(
        (enrollment) => enrollment.courseId?._id
    );

    const batchIds = enrollments.map(
        (enrollment) => enrollment.batchId?._id
    );

    return await Test.find({
        status: {
            $in: ["SCHEDULED", "COMPLETED"],
        },
        courseId: {
            $in: courseIds,
        },
        $or: [
            {
                batchId: {
                    $in: batchIds,
                },
            },
            {
                batchId: null,
            },
        ],
    })
        .select(
            "title type class courseId batchId testDate duration totalMarks topics instructions status"
        )
        .populate(
            "courseId",
            "name class subject"
        )
        .populate(
            "batchId",
            "name session shift startTime endTime"
        )
        .sort({
            testDate: -1,
        })
        .lean();
};

export const getStudentResults = async (userId) => {
    const student = await getStudentForUser(userId);

    return await TestResult.find({
        studentId: student._id,
        evaluationStatus: "EVALUATED",
        isPublished: true,
    })
        .select(
            "testId marksObtained percentage grade rank remarks publishedAt createdAt"
        )
        .populate(
            "testId",
            "title type class testDate duration totalMarks topics"
        )
        .sort({
            createdAt: -1,
        })
        .lean();
};

export const getStudentRewards = async (userId) => {
    const student = await getStudentForUser(userId);

    return await Reward.find({
        studentId: student._id,
    })
        .select(
            "title description rewardType awardedDate testId"
        )
        .populate(
            "testId",
            "title type class testDate totalMarks"
        )
        .sort({
            awardedDate: -1,
            createdAt: -1,
        })
        .lean();
};

export const getStudentAnnouncements = async (userId) => {
    const student = await getStudentForUser(userId);

    const enrollments = await getActiveEnrollments(
        student._id
    );

    const batchIds = enrollments
        .filter((enrollment) => enrollment.batchId)
        .map((enrollment) => enrollment.batchId._id);

    const now = new Date();

    return await Announcement.find({
        isActive: true,
        publishDate: {
            $lte: now,
        },
        $or: [
            {
                expiryDate: null,
            },
            {
                expiryDate: {
                    $gte: now,
                },
            },
        ],
        $and: [
            {
                $or: [
                    {
                        target: "ALL",
                    },
                    {
                        target:
                            student.class === 11
                                ? "CLASS_11"
                                : "CLASS_12",
                    },
                    {
                        target: "BATCH",
                        batchId: {
                            $in: batchIds,
                        },
                    },
                ],
            },
        ],
    })
        .select(
            "title message target batchId publishDate expiryDate"
        )
        .populate(
            "batchId",
            "name session shift"
        )
        .sort({
            publishDate: -1,
            createdAt: -1,
        })
        .lean();
};

export const getStudentSupportSessions = async (
    userId
) => {
    const student = await getStudentForUser(userId);

    return await SupportSession.find({
        studentId: student._id,
    })
        .select(
            "date startTime endTime reason topics remarks status"
        )
        .sort({
            date: -1,
            startTime: -1,
        })
        .lean();
};

export const getStudentPayments = async (userId) => {
    const student = await getStudentForUser(userId);

    const enrollments = await getActiveEnrollments(
        student._id
    );

    const enrollmentIds = enrollments.map(
        (enrollment) => enrollment._id
    );

    const payments = await Payment.find({
        studentId: student._id,
        ...(enrollmentIds.length > 0
            ? {
                enrollmentId: {
                    $in: enrollmentIds,
                },
            }
            : {}),
    })
        .select(
            "enrollmentId amount paymentDate paymentMethod installmentNumber receiptNumber"
        )
        .populate(
            "enrollmentId",
            "session originalFee discount finalFee status"
        )
        .sort({
            paymentDate: -1,
            createdAt: -1,
        })
        .lean();

    const totalFee = enrollments.reduce(
        (total, enrollment) =>
            total + Number(enrollment.finalFee || 0),
        0
    );

    const totalPaid = payments.reduce(
        (total, payment) =>
            total + Number(payment.amount || 0),
        0
    );

    return {
        summary: {
            totalFee,
            totalPaid,
            pendingAmount: Math.max(
                totalFee - totalPaid,
                0
            ),
        },
        payments,
    };
};