import { delUserModel, addUserModel, updateUserModel, getInfoUserModel, getUsersModel } from "../../models/user.model";
import { logoutUser } from '@controllers/api/Auth';
const addUser = async (req, res, next) => {

    try {
        const user = req.body;

        if (!req.body.username) return res.status(400).json({ message: "missing info" });
        const resu = await addUserModel(user);
        switch (resu) {
            case null:
                return res.status(500).json({ message: "Error to add" });
            case 'USER_DUPLICATE':
                return res.status(500).json({ message: resu });
            case 'EMAIL_DUPLICATE':
                return res.status(500).json({ message: resu });
            default:
                return res.status(200).json({ message: "User added" });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};
const delUser = async (req, res, next) => {
    try {

        if (!req.body.id) return res.status(400).json({ message: "ID is required" });
        const userInfo = await getInfoUserModel(req.session.user.username);
        let { id } = req.body;
        if (userInfo.role === 'USERS') {
            id = req.session.user.username;
            req.session.destroy((err) => {
                if (err) {
                    console.log(err);
                }
                res.clearCookie('auth');
            });

        }
        const resu = await delUserModel(id);
        if (resu === null) return res.status(500).json({ message: "Error to delete" });
        return res.status(200).json({ message: "User deleted" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};
const updateUser = async (req, res, next) => {

    try {
        const userInfo = await getInfoUserModel(req.session.user.username);
        const { username, fullname, address, email, sex } = req.body;
        if (!username || !fullname || !address || !email || !sex) {
            return res.status(400).json({ message: "missing info" });
        } if (userInfo.role === 'USERS' && req.body.username != req.session.user.username)
            return res.status(400).json({ message: "You can't update this user" });
        const user = req.body;
        const resu = await updateUserModel(user);
        if (resu === null) return res.status(500).json({ message: "Error to update" });
        return res.status(200).json({ message: resu });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

const getUser = async (req, res, next) => {
    try {

        let { username } = req.body;
        const userInfo = await getInfoUserModel(req.session.user.username);
        if (userInfo.role === 'USERS')
            username = req.session.user.username;
        const users = await getInfoUserModel(username);
        if (users === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(users);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

const getListUser = async (req, res, next) => {
    try {
        const users = await getUsersModel();
        const filteredUsers = users.filter(user => user.username != req.session.user.username);
        if (filteredUsers === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(filteredUsers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

export { addUser, delUser, updateUser, getUser, getListUser };