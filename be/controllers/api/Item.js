import { getListGroupsModel, getListItemsModel, getInfoItemModel, getNewlyUpdatedItemsModel, getGoodPriceItemsModel, getVipItemsModel, getHotItemsModel, getSaleItemsModel, createItemModel, updateItemModel, deleteItemModel } from "@models/item.model.js";

export const getItemDetail = async (req, res, next) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "id parameter is required" });
        }

        const monhang = await getInfoItemModel(id);
        if (monhang === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(monhang);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

export const getListItems = async (req, res, next) => {
    try {
        const items = await getListItemsModel();
        if (items === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(items);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}


export const getListGroups = async (req, res, next) => {
    try {
        const groups = await getListGroupsModel();
        if (groups === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(groups);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

export const getNewlyUpdatedItems = async (req, res, next) => {
    try {
        const items = await getNewlyUpdatedItemsModel();
        if (items === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(items);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export const getGoodPriceItems = async (req, res, next) => {
    try {
        const items = await getGoodPriceItemsModel();
        if (items === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(items);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export const getVipItems = async (req, res, next) => {
    try {
        const items = await getVipItemsModel();
        if (items === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(items);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export const getHotItems = async (req, res, next) => {
    try {
        const items = await getHotItemsModel();
        if (items === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(items);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export const getSaleItems = async (req, res, next) => {
    try {
        const items = await getSaleItemsModel();
        if (items === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(items);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export const createItem = async (req, res, next) => {
    try {
        const itemData = req.body;

        if (!itemData) {
            return res.status(400).json({ message: "itemData parameter is required" });
        }

        const newItem = await createItemModel(itemData);
        if (newItem === null) return res.status(500).json({ message: "Error to create" });
        return res.status(200).json({ message: "Create successful", item: newItem });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export const updateItem = async (req, res, next) => {
    try {
        const { id, ...updateData } = req.body;

        if (!id || !updateData) {
            return res.status(400).json({ message: "id and updateData parameters are required" });
        }

        const result = await updateItemModel(id, updateData);
        if (result === null) return res.status(500).json({ message: "Error to update" });
        return res.status(200).json({ message: "Update successful" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export const deleteItem = async (req, res, next) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ message: "id parameter is required" });
        }

        const result = await deleteItemModel(id);
        if (result === null) return res.status(500).json({ message: "Error to delete" });
        return res.status(200).json({ message: "Delete successful" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

