import { getListOrderModel } from "../models/order.model";
import { getInfoUserModel } from "../models/user.model";
const orderTableController = async (req, res, next) => {
    const order = await getListOrderModel(null, true) || [];
    const userInfo = await getInfoUserModel(req.session.user.username);
    res.render("views/layouts/default", { title: "Quản lý account", user: userInfo, data: { path: "views/orderTable", props: { order: order } } });
};

export default orderTableController;