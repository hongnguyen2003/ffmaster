import { delUser, updateUser, addUser, getUser, getListUser } from '../../controllers/api/User.js';
import isAdmin from '../../middleware/isAdmin.js';
import isAuth from '../../middleware/isAuth.js';
const UserAPI = (router) => {

    router.get('/getListUser', isAuth, isAdmin, getListUser);
    router.get('/getUser', isAuth, getUser);
    router.post('/addUser', isAuth, isAdmin, addUser);
    router.put('/updateUser', isAuth, updateUser);
    router.delete('/delUser', isAuth, delUser);

    return router;
}
export default UserAPI;