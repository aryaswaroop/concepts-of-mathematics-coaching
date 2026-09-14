import {
    createEnquiry,
    getAllEnquiries,
    getEnquiryById,
} from "../services/enquiryService.js";


export const createNewEnquiry = async (
    req,
    res,
    next
) => {
    try {
        const {
            name,
            phone,
            email,
            class: studentClass,
            message,
            source,
            status,
            followUpDate,
            notes,
            handledBy,
        } = req.body;

        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message:
                    "name and phone are required",
                data: null,
            });
        }

        if (
            studentClass !== undefined &&
            studentClass !== null &&
            ![11, 12].includes(Number(studentClass))
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "class must be either 11 or 12",
                data: null,
            });
        }

        const enquiry = await createEnquiry({
            name,
            phone,
            email,
            class: studentClass,
            message,
            source,
            status,
            followUpDate,
            notes,
            handledBy,
        });

        res.status(201).json({
            success: true,
            message:
                "Enquiry created successfully",
            data: enquiry,
        });
    } catch (error) {
        next(error);
    }
};


export const fetchAllEnquiries = async (
    req,
    res,
    next
) => {
    try {
        const enquiries = await getAllEnquiries({
            source: req.query.source,
            status: req.query.status,
            class: req.query.class,
        });

        res.status(200).json({
            success: true,
            message:
                "Enquiries fetched successfully",
            data: enquiries,
        });
    } catch (error) {
        next(error);
    }
};


export const fetchEnquiryById = async (
    req,
    res,
    next
) => {
    try {
        const enquiry = await getEnquiryById(
            req.params.id
        );

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: "Enquiry not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Enquiry fetched successfully",
            data: enquiry,
        });
    } catch (error) {
        next(error);
    }
};