import { User } from '@config/sequelize.config.js';
import bcrypt from 'bcrypt';

const loginUserModel = async (username, password) => {
    try {
        const user = await User.findOne({ where: { username } });
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...userWithoutPassword } = user.toJSON();
            return userWithoutPassword;
        } else {
            return null;
        }
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const changePasswordModel = async (password, username) => {
    try {

        const hashedPassword = await bcrypt.hash(password, 10);
        const userInstance = await User.update({
            password: hashedPassword
        }, {
            where: {
                username: username
            }
        });
        return userInstance;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

export { loginUserModel, changePasswordModel }