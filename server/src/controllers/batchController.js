import {
    getAllBatches,
    getBatchById,
    createBatch,
} from "../services/batchService.js";

export const fetchAllBatches = async (req, res, next) => {
    try {
        const batches = await getAllBatches({
            shift: req.query.shift,
            session: req.query.session,
            status: req.query.status,
        });

        res.status(200).json({
            success: true,
            message: "Batches fetched successfully",
            data: batches,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchBatchById = async (req, res, next) => {
    try {
        const batch = await getBatchById(req.params.id);

        if (!batch) {
            return res.status(404).json({
                success: false,
                message: "Batch not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Batch fetched successfully",
            data: batch,
        });
    } catch (error) {
        next(error);
    }
};

export const createNewBatch = async (req, res, next) => {
    try {
        const {
            name,
            courseId,
            session,
            shift,
            startTime,
            endTime,
            capacity,
            notes,
        } = req.body;

        if (
            !name ||
            !courseId ||
            !session ||
            !shift ||
            !startTime ||
            !endTime ||
            capacity === undefined
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "name, courseId, session, shift, startTime, endTime and capacity are required",
                data: null,
            });
        }

        if (!["MORNING", "EVENING"].includes(shift.toUpperCase())) {
            return res.status(400).json({
                success: false,
                message: "Shift must be MORNING or EVENING",
                data: null,
            });
        }

        const numericCapacity = Number(capacity);

        if (
            !Number.isInteger(numericCapacity) ||
            numericCapacity < 1 ||
            numericCapacity > 100
        ) {
            return res.status(400).json({
                success: false,
                message: "Capacity must be an integer between 1 and 100",
                data: null,
            });
        }

        const batch = await createBatch({
            name,
            courseId,
            session,
            shift: shift.toUpperCase(),
            startTime,
            endTime,
            capacity: numericCapacity,
            notes,
        });

        res.status(201).json({
            success: true,
            message: "Batch created successfully",
            data: batch,
        });
    } catch (error) {
        next(error);
    }
};