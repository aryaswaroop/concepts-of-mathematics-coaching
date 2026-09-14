import {
    createReward,
    getAllRewards,
    getRewardById,
} from "../services/rewardService.js";

export const createNewReward = async (req, res, next) => {
    try {
        const {
            studentId,
            testId,
            title,
            description,
            rewardType,
            awardedDate,
            notes,
            awardedBy,
        } = req.body;

        if (
            !studentId ||
            !title ||
            !rewardType ||
            !awardedBy
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "studentId, title, rewardType and awardedBy are required",
                data: null,
            });
        }

        const reward = await createReward({
            studentId,
            testId,
            title,
            description,
            rewardType,
            awardedDate,
            notes,
            awardedBy,
        });

        res.status(201).json({
            success: true,
            message: "Reward created successfully",
            data: reward,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchAllRewards = async (req, res, next) => {
    try {
        const rewards = await getAllRewards({
            studentId: req.query.studentId,
            testId: req.query.testId,
            rewardType: req.query.rewardType,
        });

        res.status(200).json({
            success: true,
            message: "Rewards fetched successfully",
            data: rewards,
        });
    } catch (error) {
        next(error);
    }
};

export const fetchRewardById = async (req, res, next) => {
    try {
        const reward = await getRewardById(req.params.id);

        if (!reward) {
            return res.status(404).json({
                success: false,
                message: "Reward not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "Reward fetched successfully",
            data: reward,
        });
    } catch (error) {
        next(error);
    }
};