const registerController = (req, res, next) => {
    res.render("views/layouts/default", { title: "Đăng ký", user: null, data: { path: "views/register", props: {} } });
};

export default registerController;