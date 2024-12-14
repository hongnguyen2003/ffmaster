import isAuth from '../../middleware/isAuth.js';
import { createRatingController, getAverageRatingController } from '../../controllers/api/Rating.js';
const RatingAPI = (router) => {

    router.post('/createRating', isAuth, createRatingController);
    router.get('/getRating', getAverageRatingController);

    return router;
}

export default RatingAPI;