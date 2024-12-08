import express from 'express';
import userTableController from '../controllers/UserTableController.js';
import aboutController from '../controllers/AboutController.js';
import loginController from '../controllers/LoginController.js';
import registerController from '../controllers/RegisterController.js';
import homeController from '../controllers/HomeController.js';
import profileController from '../controllers/ProfileController.js';
import accountTableController from '../controllers/AccountTableController.js';
import orderTableController from '../controllers/OrderTableController.js';
import isAdmin from '../middleware/isAdmin.js';
import isAuth from '../middleware/isAuth.js';
const router = express.Router();

const RouterWeb = (app) => {

    router.get('/about', aboutController);

    router.get('/login', loginController);

    router.get('/register', registerController);

    router.get('/usertable', isAuth, isAdmin, userTableController);

    router.get('/itemtable', isAuth, isAdmin, accountTableController);

    router.get('/profile', profileController);

    router.get('/order', orderTableController);

    router.get('/', homeController);

    return app.use("/", router);
}
export default RouterWeb;