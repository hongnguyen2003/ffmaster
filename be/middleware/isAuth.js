import { verifyToken } from '../utils/jwt.js';
import dotenv from 'dotenv';
import { User } from '@config/sequelize.config.js';
dotenv.config();

const isAuth = async (req, res, next) => {
    const bypassRoutes = ['/src', '/api/logout', '/api/login', '/api/register', '/api/forgot-password', '/api/reset-password'];
    const token = req.cookies ? req.cookies.auth : null;
    const user = req.session?.user;

    if (bypassRoutes.some(route => req.url.startsWith(route))) {
        return next();
    }

    if (!token) {
        return res.status(403).json({ message: "No auth token" });
    }

    const decoded = verifyToken(token, process.env.JWT_SECRET);

    if (!decoded) {
        return res.status(403).json({ message: "No auth jwt" });
    }

    if (!user || decoded.username !== user.username) {
        return res.status(403).json({ message: "No auth" });
    }

    const dbUser = await User.findOne({ where: { username: user.username } });
    if (dbUser && dbUser.status !== 0) {
        return res.status(403).json({ message: "User is banned" });
    }

    next();
};

export default isAuth;