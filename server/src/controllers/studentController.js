import { createStudent } from "../services/studentService.js";

export const createNewStudent = async (req, res, next) => {
    try {
        const {
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
        } = req.body;

        if (
            !name ||
            !email ||
            !password ||
            !admissionNumber ||
            !studentClass ||
            !session
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "name, email, password, admissionNumber, class and session are required",
                data: null,
            });
        }

        if (![11, 12].includes(Number(studentClass))) {
            return res.status(400).json({
                success: false,
                message: "Student class must be 11 or 12",
                data: null,
            });
        }

        const student = await createStudent({
            name,
            email,
            phone,
            password,
            admissionNumber,
            fatherName,
            class: Number(studentClass),
            session,
            school,
            address,
            photo,
        });

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student,
        });
    } catch (error) {
        next(error);
    }
};