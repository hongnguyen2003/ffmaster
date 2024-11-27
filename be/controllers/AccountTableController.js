import { getListDangkyModel } from "../models/item.model";
import { getInfoUserModel } from "../models/user.model";
const accountTableController = async (req, res, next) => {
    const items = await getListItemsModel();
    const filteredItems = items.filter(user => user.username != req.session.user.username);
    const dangky = await getListDangkyModel();
    const userInfo = await getInfoUserModel(req.session.user.username);
    res.render("views/layouts/default", { title: "Quản lý account", user: userInfo, data: { path: "views/accoutTable", props: { users: filteredItems, dangky: dangky } } });
};

export default accountTableController;