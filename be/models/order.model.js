import { Donhang, Monhang } from '@config/sequelize.config.js';
import { v4 as uuidv4 } from 'uuid';

const createOrderModel = async (cartItems, username) => {
    try {
        const newOrders = [];
        const newId = uuidv4();
        for (const item of cartItems) {
            const newOrder = await Donhang.create({
                iddonhang: newId,
                idmonhang: item.id,
                idnguoimua: username,
                trangthai: 'wait',
            });
            newOrders.push(newOrder.toJSON());
        }
        return newOrders;
    } catch (err) {
        console.error('Error creating order:', err);
        return null;
    }
};


const getListOrderModel = async (username, isAdmin) => {
    try {
        const query = isAdmin ? {} : { where: { idnguoimua: username } };
        const orders = await Donhang.findAll(query);
        if (orders.length === 0) return null;

        const orderData = orders.map(order => order.toJSON());
        const groupedOrders = orderData.reduce((acc, order) => {
            if (!acc[order.iddonhang]) {
                acc[order.iddonhang] = {
                    id: order.id,
                    iddonhang: order.iddonhang,
                    idmonhang: [],
                    idnguoimua: order.idnguoimua,
                    trangthai: order.trangthai
                };
            }
            acc[order.iddonhang].idmonhang.push(order.idmonhang);
            return acc;
        }, {});

        for (const key in groupedOrders) {
            groupedOrders[key].idmonhang = await Promise.all(
                groupedOrders[key].idmonhang.map(async (idmonhang) => {
                    const monhang = await Monhang.findOne({ where: { id: idmonhang } });
                    return monhang ? monhang.toJSON() : null;
                })
            );
        }

        return groupedOrders;
    } catch (err) {
        console.error('Error fetching orders:', err);
        return null;
    }
}

const updateOrderModel = async (id, updateData) => {
    try {
        const result = await Donhang.update(updateData, { where: { iddonhang: id } });
        return result;
    } catch (err) {
        console.error('Error updating order:', err);
        return null;
    }
};

const deleteOrderModel = async (id) => {
    try {
        const result = await Donhang.update({ trangthai: 'cancel' }, { where: { iddonhang: id } });
        return result;
    } catch (err) {
        console.error('Error updating order:', err);
        return null;
    }
};

const doneOrderModel = async (id) => {
    try {
        const result = await Donhang.update({ trangthai: 'done' }, { where: { iddonhang: id } });
        return result;
    } catch (err) {
        console.error('Error updating order:', err);
        return null;
    }

}

export { createOrderModel, updateOrderModel, deleteOrderModel, getListOrderModel, doneOrderModel };