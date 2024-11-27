
import { createOrder, getOrder, updateOrder, deleteOrder, getListOrder } from '../../controllers/api/Order.js';
import isAuth from '../../middleware/isAuth.js';
import isAdmin from '../../middleware/isAdmin.js';
const OrderAPI = (router) => {
    router.post('/order', isAuth, createOrder);
    router.get('/listOrder', isAuth, getListOrder);
    router.put('/order', isAuth, isAdmin, updateOrder);
    router.delete('/order', isAuth, deleteOrder);
    return router;
};

export default OrderAPI;