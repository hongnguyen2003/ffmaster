import { getItemInfo, getListItems, getListGroups } from '../../controllers/api/Item.js';
import isAdmin from '../../middleware/isAdmin.js';
import isAuth from '../../middleware/isAuth.js';
const ItemAPI = (router) => {

    router.get('/getItemInfo', isAuth, isAdmin, getItemInfo);
    router.get('/getListItems', isAuth, isAdmin, getListItems);
    router.get('/getListGroups', isAuth, isAdmin, getListGroups);

    return router;
}
export default ItemAPI;