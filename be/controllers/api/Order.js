import { createOrderModel, updateOrderModel, deleteOrderModel, getListOrderModel } from '@models/order.model.js';

export const createOrder = async (req, res, next) => {
    try {
        const { cartItems } = req.body;
        if (!cartItems) {
            return res.status(400).json({ message: "orderData parameter is required" });
        }
        const newOrder = await createOrderModel(cartItems, req.session.user.username);
        if (newOrder === null) return res.status(500).json({ message: "Error creating order" });
        return res.status(200).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error creating order", ...error });
    }
};


export const getListOrder = async (req, res, next) => {
    try {
        const order = await getListOrderModel(req.session.user.username);
        if (order === null) return res.status(200).json([]);
        return res.status(200).json(order);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error fetching order", ...error });
    }
};

export const updateOrder = async (req, res, next) => {
    try {
        const { id, updateData } = req.body;
        if (!id || !updateData) {
            return res.status(400).json({ message: "id and updateData parameters are required" });
        }
        const result = await updateOrderModel(id, updateData);
        if (result === null) return res.status(500).json({ message: "Error updating order" });
        return res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error updating order", ...error });
    }
};

export const deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ message: "id parameter is required" });
        }
        const result = await deleteOrderModel(id);
        if (result === null) return res.status(500).json({ message: "Error deleting order" });
        return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error deleting order", ...error });
    }
};