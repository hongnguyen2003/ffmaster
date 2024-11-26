import { Nhom, Monhang } from '@config/sequelize.config.js';
import { Op } from 'sequelize'; // Add this import

const getListGroupsModel = async () => {
    try {
        const nhom = await Nhom.findAll();
        return nhom.map(item => item.toJSON()); // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getListItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
        });
        return monhangs.map(item => item.toJSON()); // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getInfoItemModel = async (id) => {
    try {
        const monhang = await Monhang.findOne({
            where: {
                id: id
            }
        });
        return monhang ? monhang.toJSON() : null; // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getNewlyUpdatedItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            order: [['createdAt', 'DESC']],
            limit: 10
        });
        return monhangs.map(item => item.toJSON()); // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getGoodPriceItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: {
                gia: {
                    [Op.lt]: 1000000
                }
            }
        });
        return monhangs.map(item => item.toJSON()); // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getVipItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: {
                thevocuc: true
            }
        });
        return monhangs.map(item => item.toJSON()); // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getHotItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            order: [['soluong', 'DESC']],
            limit: 10
        });
        return monhangs.map(item => item.toJSON()); // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getSaleItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: {
                dangky: {
                    [Op.gt]: 0
                }
            }
        });
        return monhangs.map(item => item.toJSON()); // Modify this line
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const updateItemModel = async (id, updateData) => {
    try {
        const monhang = await Monhang.update(updateData, {
            where: { id: id }
        });
        return monhang;
    } catch (err) {
        console.error('Lỗi khi cập nhật:', err);
        return null;
    }
};

const deleteItemModel = async (id) => {
    try {
        const monhang = await Monhang.destroy({
            where: { id: id }
        });
        return monhang;
    } catch (err) {
        console.error('Lỗi khi xóa:', err);
        return null;
    }
};

const createItemModel = async (itemData) => {
    try {
        const newItem = await Monhang.create(itemData);
        return newItem.toJSON();
    } catch (err) {
        console.error('Lỗi khi tạo mới:', err);
        return null;
    }
};

export { getListGroupsModel, getListItemsModel, getInfoItemModel, getNewlyUpdatedItemsModel, getGoodPriceItemsModel, getVipItemsModel, getHotItemsModel, getSaleItemsModel, createItemModel, updateItemModel, deleteItemModel };