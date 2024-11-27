import { getListItemsModel } from "../models/item.model";
import { getInfoUserModel } from "../models/user.model";
const accountTableController = async (req, res, next) => {
    const users = await getListItemsModel();
    const filteredUsers = users.filter(user => user.username != req.session.user.username);

    const userInfo = await getInfoUserModel(req.session.user.username);
    res.render("views/layouts/default", { title: "Quản lý account", user: userInfo, data: { path: "views/accoutTable", props: { users: filteredUsers } } });
};

export default accountTableController;