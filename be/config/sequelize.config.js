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

const Monhang = sequelize.define('Monhang', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gia: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    mota: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    hinhanh: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    dangky: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    thevocuc: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    soluong: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    nhom: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    tableName: 'monhang',
    timestamps: false,
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Khác',
    },
    sex: {
        type: DataTypes.ENUM('Male', 'Female', 'Nonbinary'),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM('USERS', 'ADMIN'),
        allowNull: false,
        defaultValue: 'USERS',
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

const Dangky = sequelize.define('Dangky', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'dangky',
    timestamps: false,
});

const Danhgia = sequelize.define('Danhgia', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    danhgia: {
        type: DataTypes.TINYINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    idnguoindanhgia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'danhgia',
    timestamps: false,
});

const Donhang = sequelize.define('Donhang', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    iddonhang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idmonhang: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idnguoimua: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    trangthai: {
        type: DataTypes.ENUM('wait', 'paid', 'done', 'cancel'),
        allowNull: false,
        defaultValue: 'wait',
    },
}, {
    tableName: 'donhang',
    timestamps: false,
});

const ThongtinMonhang = sequelize.define('ThongtinMonhang', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_monhang: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'thongtin_monhang',
    timestamps: false,
});

export { Monhang, Nhom, User, Dangky, Danhgia, Donhang, ThongtinMonhang };