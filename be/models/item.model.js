import { Nhom, Monhang, Dangky } from '@config/sequelize.config.js';
import { Op, where } from 'sequelize'; // Add this import

const parseImageField = (item) => {
    const jsonItem = item.toJSON();
    if (jsonItem.hinhanh) {
        jsonItem.hinhanh = JSON.parse(jsonItem.hinhanh);
    }
    return jsonItem;
};

const getListGroupsModel = async () => {
    try {
        const nhom = await Nhom.findAll({ where: { status: 0 } });
        return nhom.map(item => parseImageField(item));
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getListDangkyModel = async () => {
    try {
        const dangky = await Dangky.findAll();
        return dangky;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getListItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({ 
            where: { 
                status: 0,
                soluong: { [Op.gt]: 0 } 
            } 
        });
        return monhangs.map(item => parseImageField(item));
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getListItemsSearchModel = async (query) => {
    try {
        const monhangs = await Monhang.findAll({
            where: {
                status: 0,
                soluong: { [Op.gt]: 0 },
                ten: {
                    [Op.like]: `%${query}%`
                }
            }
        });
        return monhangs.map(item => parseImageField(item));
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getInfoItemModel = async (id) => {
    try {
        const monhang = await Monhang.findOne({
            where: {
                id: id,
                status: 0
            }
        });
        return monhang ? parseImageField(monhang) : null;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getNewlyUpdatedItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: { 
                status: 0,
                soluong: { [Op.gt]: 0 }
            },
            order: [['createdAt', 'DESC']],
            limit: 10
        });
        return monhangs.map(item => parseImageField(item));
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getGoodPriceItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: {
                status: 0,
                soluong: { [Op.gt]: 0 },
                gia: {
                    [Op.lt]: 1000000
                }
            }
        });
        return monhangs.map(item => parseImageField(item));
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getVipItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: {
                status: 0,
                soluong: { [Op.gt]: 0 },
                thevocuc: true
            }
        });
        return monhangs.map(item => parseImageField(item));
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getHotItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: { 
                status: 0,
                soluong: { [Op.gt]: 0 }
            },
            order: [['soluong', 'DESC']],
            limit: 10
        });
        return monhangs.map(item => parseImageField(item));
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getSaleItemsModel = async () => {
    try {
        const monhangs = await Monhang.findAll({
            where: {
                status: 0,
                soluong: { [Op.gt]: 0 },
                dangky: {
                    [Op.gt]: 0
                }
            }
        });
        return monhangs.map(item => parseImageField(item));
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
        const monhang = await Monhang.update({ status: 1 }, {
            where: { id: id }
        });
        console.log(monhang);

        return monhang;
    } catch (err) {
        console.error('Lỗi khi xóa:', err);
        return null;
    }
};

const createItemModel = async (itemData) => {
    try {
        itemData.nhom = 1;
        const newItem = await Monhang.create(itemData);
        return newItem.toJSON();
    } catch (err) {
        console.error('Lỗi khi tạo mới:', err);
        return null;
    }
};

export { getListItemsSearchModel, getListDangkyModel, getListGroupsModel, getListItemsModel, getInfoItemModel, getNewlyUpdatedItemsModel, getGoodPriceItemsModel, getVipItemsModel, getHotItemsModel, getSaleItemsModel, createItemModel, updateItemModel, deleteItemModel };