import {
    getAllBatches,
    getBatchById,
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