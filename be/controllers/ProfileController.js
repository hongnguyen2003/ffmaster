import { getInfoUserModel, getUsersModel } from "../models/user.model";
const registerController = async (req, res, next) => {

    const userInfo = await getInfoUserModel(req.session.user.username);
    res.render("views/layouts/default", { title: "Thông tin người dùng", user: userInfo, data: { path: "views/profile", props: {} } });
};

export default registerController;