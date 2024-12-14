import { Danhgia } from '@config/sequelize.config.js';
import sequelize from '@config/db.config.js';

export const createRatingModel = async (ratingData) => {
    try {
        const rating = await Danhgia.create(ratingData);
        return rating;
    } catch (err) {
        console.error('Lỗi khi tạo đánh giá:', err);
        return null;
    }
};

export const getAverageRating = async () => {
    try {
        const result = await Danhgia.findAll({
            attributes: [[sequelize.fn('AVG', sequelize.col('danhgia')), 'averageRating']],
        });
        return result[0].dataValues.averageRating;
    } catch (err) {
        console.error('Lỗi khi lấy đánh giá trung bình:', err);
        return null;
    }
};


