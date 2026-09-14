import {
    createAnnouncement,
    getAllAnnouncements,
    getAnnouncementById,
} from "../services/announcementService.js";

export const createNewAnnouncement = async (req, res, next) => {
    try {
        const {
            title,
            message,
            target,
            batchId,
            publishDate,
            expiryDate,
            isActive,
            createdBy,
        } = req.body;

        if (!title || !message || !createdBy) {
            return res.status(400).json({
                success: false,
                message:
                    "title, message and createdBy are required",
                data: null,
            });
        }

        const announcement = await createAnnouncement({
            title,
            message,
            target,
            batchId,
            publishDate,
            expiryDate,
            isActive,
            createdBy,
        });

        res.status(201).json({
            success: true,
            message: "Announcement created successfully",
            data: announcement,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchAllAnnouncements = async (req, res, next) => {
    try {
        const announcements = await getAllAnnouncements({
            target: req.query.target,
            batchId: req.query.batchId,
            isActive: req.query.isActive,
        });

        res.status(200).json({
            success: true,
            message: "Announcements fetched successfully",
            data: announcements,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchAnnouncementById = async (req, res, next) => {
    try {
        const announcement = await getAnnouncementById(
            req.params.id
        );

        if (!announcement) {
            return res.status(404).json({
                success: false,
                message: "Announcement not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Announcement fetched successfully",
            data: announcement,
        });
    } catch (error) {
        next(error);
    }
};