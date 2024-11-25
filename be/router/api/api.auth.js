import { loginUser, registerUser, logoutUser, changePasswordUser } from '../../controllers/api/Auth';
import isAuth from '../../middleware/isAuth.js';

const AuthAPI = (router) => {

    router.post('/login', loginUser);
    router.post('/register', registerUser);
    router.get('/logout', logoutUser);
    router.put('/changePassword', isAuth, changePasswordUser);

    return router;
}
export default AuthAPI;