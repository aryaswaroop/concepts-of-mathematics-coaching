import Enrollment from "../models/Enrollment.js";
import Student from "../models/Student.js";
import Course from "../models/Course.js";
import Batch from "../models/Batch.js";

export const createEnrollment = async ({
    studentId,
    courseId,
    batchId,
    discount = 0,
    notes,
}) => {
    // --------------------------------
    // 1. Find Student
    // --------------------------------

    const student = await Student.findOne({
        _id: studentId,
        status: "ACTIVE",
    }).lean();

    if (!student) {
        const error = new Error("Active student not found");
        error.statusCode = 404;
        throw error;
    }

    // --------------------------------
    // 2. Find Course
    // --------------------------------

    const course = await Course.findOne({
        _id: courseId,
        isActive: true,
    }).lean();

    if (!course) {
        const error = new Error("Active course not found");
        error.statusCode = 404;
        throw error;
    }

    // --------------------------------
    // 3. Find Batch
    // --------------------------------

    const batch = await Batch.findOne({
        _id: batchId,
        status: { $in: ["ACTIVE", "FULL"] },
    }).lean();

    if (!batch) {
        const error = new Error("Active batch not found");
        error.statusCode = 404;
        throw error;
    }

    // --------------------------------
    // 4. Validate Student Class
    // --------------------------------

    if (student.class !== course.class) {
        const error = new Error(
            "Student class does not match the selected course"
        );
        error.statusCode = 400;
        throw error;
    }

    // --------------------------------
    // 5. Validate Batch Course
    // --------------------------------

    if (batch.courseId.toString() !== course._id.toString()) {
        const error = new Error(
            "Selected batch does not belong to the selected course"
        );
        error.statusCode = 400;
        throw error;
    }

    // --------------------------------
    // 6. Check Duplicate Enrollment
    // --------------------------------

    const existingEnrollment = await Enrollment.findOne({
        studentId,
        courseId,
        session: student.session,
    }).lean();

    if (existingEnrollment) {
        const error = new Error(
            "Student is already enrolled in this course for this session"
        );
        error.statusCode = 409;
        throw error;
    }

    // --------------------------------
    // 7. Check Batch Capacity
    // --------------------------------

    const currentStrength = await Enrollment.countDocuments({
        batchId,
        status: "ACTIVE",
    });

    if (currentStrength >= batch.capacity) {
        const error = new Error("Selected batch is full");
        error.statusCode = 409;
        throw error;
    }

    // --------------------------------
    // 8. Validate Discount
    // --------------------------------

    if (discount < 0 || discount > course.originalFee) {
        const error = new Error(
            "Discount must be between 0 and the original course fee"
        );
        error.statusCode = 400;
        throw error;
    }

    // --------------------------------
    // 9. Calculate Final Fee
    // --------------------------------

    const finalFee = course.originalFee - discount;

    // --------------------------------
    // 10. Create Enrollment
    // --------------------------------

    const enrollment = await Enrollment.create({
        studentId,
        courseId,
        batchId,
        session: student.session,
        originalFee: course.originalFee,
        discount,
        finalFee,
        status: "ACTIVE",
        notes,
    });

    return await Enrollment.findById(enrollment._id)
        .populate("studentId", "name admissionNumber class phone email")
        .populate("courseId", "name class subject originalFee")
        .populate(
            "batchId",
            "name session shift startTime endTime capacity status"
        )
        .lean();
};