import { DataTypes } from 'sequelize';
import sequelize from '@config/db.config.js';

const Nhom = sequelize.define('Nhom', {
    idnhom: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'nhom',
    timestamps: false,
});


const Sanpham = sequelize.define('Sanpham', {
    masp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gia: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hinhanh: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mota: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    idnhom: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

}, {
    tableName: 'sanpham',
    timestamps: false,
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'USERS',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'users',
    timestamps: false,
});


export { Sanpham, Nhom, User };