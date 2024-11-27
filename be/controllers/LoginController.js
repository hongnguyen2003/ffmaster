const loginController = (req, res, next) => {
    res.render("views/layouts/default", { title: "Đăng nhập", user: null, data: { path: "views/login", props: {} } });
};

export default loginController;