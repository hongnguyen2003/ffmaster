import { createRatingModel, getAverageRating } from '@models/rating.model.js';
export const createRatingController = async (req, res, next) => {
    try {
        const { danhgia } = req.body;
        console.log(req.body);

        if (typeof danhgia !== "number") {
            return res.status(400).json({ message: "danhgia parameters are required" });
        }
        const user = req.session.user.username;
        console.log(req.session.user.username);

        const ratingData = { danhgia, idnguoindanhgia: user };
        const result = await createRatingModel(ratingData);
        if (result === null) return res.status(500).json({ message: "Error creating rating" });
        return res.status(200).json({ message: "Rating created successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error creating rating", ...error });
    }
};

export const getAverageRatingController = async (req, res, next) => {
    try {
        const averageRating = await getAverageRating();
        if (averageRating === null) return res.status(200).json({ message: "No ratings found" });
        return res.status(200).json({ averageRating });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error retrieving average rating", ...error });
    }
};
