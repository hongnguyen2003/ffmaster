import { getInfoUserModel } from '../models/user.model.js';
import dotenv from 'dotenv';
dotenv.config();

const isAdmin = async (req, res, next) => {
    const user = req.session?.user;
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userInfo = await getInfoUserModel(user.username);
    
    if (userInfo.role === 'ADMIN') {
        return next();
    }
    return res.status(401).json({ message: "Unauthorized admin" });

};
export default isAdmin;