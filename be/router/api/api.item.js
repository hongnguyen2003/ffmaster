import { getItemDetail, getListItems, getListGroups, getNewlyUpdatedItems, getGoodPriceItems, getVipItems, getHotItems, getSaleItems, createItem, updateItem, deleteItem } from '../../controllers/api/Item.js';
import isAdmin from '../../middleware/isAdmin.js';
import isAuth from '../../middleware/isAuth.js';
const ItemAPI = (router) => {

    router.get('/getItemDetail', getItemDetail);
    router.get('/getListItems', getListItems);
    router.get('/getListGroups', getListGroups);
    router.get('/getNewlyUpdatedItems', getNewlyUpdatedItems);
    router.get('/getGoodPriceItems', getGoodPriceItems);
    router.get('/getVipItems', getVipItems);
    router.get('/getHotItems', getHotItems);
    router.get('/getSaleItems', getSaleItems);

    router.post('/createItem', isAuth, isAdmin, createItem);
    router.put('/updateItem', isAuth, isAdmin, updateItem);
    router.delete('/deleteItem', isAuth, isAdmin, deleteItem);

    return router;
}

export default ItemAPI;