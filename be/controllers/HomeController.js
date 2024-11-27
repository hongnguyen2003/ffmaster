import { getInfoUserModel, getUsersModel } from "../models/user.model";
const homeController = async (req, res, next) => {
    const userInfo = await getInfoUserModel(req.session?.user?.username);
    if (userInfo === null) return res.redirect('/login');
    res.render("views/layouts/default", { title: "Home Page", user: userInfo, data: { path: "views/main", props: {} } });
};

export default homeController;