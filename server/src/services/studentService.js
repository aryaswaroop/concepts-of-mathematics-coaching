import bcrypt from "bcryptjs";

import User from "../models/User.js";
import Student from "../models/Student.js";

export const createStudent = async ({
    name,
    email,
    phone,
    password,
    admissionNumber,
    fatherName,
    class: studentClass,
    session,
    school,
    address,
    photo,
}) => {
    const existingUser = await User.findOne({
        email: email.toLowerCase(),
    });

    if (existingUser) {
        const error = new Error(
            "A user with this email already exists"
        );
        error.statusCode = 409;
        throw error;
    }

    const existingStudent = await Student.findOne({
        admissionNumber,
    });

    if (existingStudent) {
        const error = new Error(
            "A student with this admission number already exists"
        );
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role: "STUDENT",
        isActive: true,
    });

    try {
        const student = await Student.create({
            userId: user._id,
            admissionNumber,
            name,
            fatherName,
            phone,
            email,
            class: studentClass,
            session,
            school,
            address,
            photo,
            status: "ACTIVE",
        });

        return await Student.findById(student._id)
            .populate("userId", "name email phone role isActive")
            .lean();
    } catch (error) {
        await User.findByIdAndDelete(user._id);
        throw error;
    }
};