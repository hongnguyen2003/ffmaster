import { getListGroupsModel, getListItemsModel, getInfoItemModel } from "@models/item.model.js";

const getItemInfo = async (req, res, next) => {
    try {
        const { masp } = req.query;

        if (!masp) {
            return res.status(400).json({ message: "masp parameter is required" });
        }

        const sanpham = await getInfoItemModel(masp);
        if (sanpham === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(sanpham);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

const getListItems = async (req, res, next) => {
    try {
        const items = await getListItemsModel();
        if (items === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(items);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}


const getListGroups = async (req, res, next) => {
    try {
        const groups = await getListGroupsModel();
        if (groups === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(groups);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

export { getItemInfo, getListItems, getListGroups };