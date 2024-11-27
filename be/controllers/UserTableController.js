import { getInfoUserModel, getUsersModel } from "../models/user.model";
const homeController = async (req, res, next) => {
    const users = await getUsersModel();
    const filteredUsers = users.filter(user => user.username != req.session.user.username);

    const userInfo = await getInfoUserModel(req.session.user.username);
    res.render("views/layouts/default", { title: "Quản lý user", user: userInfo, data: { path: "views/userTable", props: { users: filteredUsers } } });
};

export default homeController;