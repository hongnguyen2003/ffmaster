import { User } from '@config/sequelize.config.js';
import bcrypt from 'bcrypt';
const getUsersModel = async () => {
    try {
        const user = await User.findAll({
            where: {
                role: 'USERS'
            }
        });
        return user;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const addUserModel = async (user) => {
    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({
            where: {
                username: user.username,
            }
        });

        if (existingUser) {
            return 'USER_DUPLICATE';
        }
        const existingEmail = await User.findOne({
            where: {
                email: user.email,
            }
        });

        if (existingEmail) {
            return 'EMAIL_DUPLICATE';
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const userInstance = await User.create({
            username: user.username,
            password: hashedPassword,
            fullname: user.fullname,
            address: user.address,
            email: user.email,
            sex: user.sex
        });
        const { password, ...userWithoutPassword } = userInstance.toJSON();
        return userWithoutPassword;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const updateUserModel = async (user) => {
    try {
        const existingUser = await User.findOne({
            where: {
                username: user.username,
            }
        });


        const existingEmail = await User.findOne({
            where: {
                email: user.email,
            }
        });
        const userDecoded = existingUser.toJSON();
        if (existingEmail && userDecoded.username !== user.username) {
            return 'EMAIL_DUPLICATE';
        }
        const data = await User.update(
            {
                fullname: user.fullname,
                address: user.address,
                email: user.email,
                sex: user.sex
            },
            {
                where: {
                    username: user.username
                }
            }
        );
        return data;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const delUserModel = async (id) => {
    try {
        const rows = await User.destroy({
            where: {
                username: id
            }
        });
        return rows

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getInfoUserModel = async (username) => {
    try {
        if (!username) return null;
        const user = await User.findOne({
            where: {
                username: username
            }
        });
        const { password, ...userWithoutPassword } = user.toJSON();

        return userWithoutPassword;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};


export { getUsersModel, addUserModel, delUserModel, updateUserModel, getInfoUserModel };