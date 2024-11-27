import express from 'express';
import UserAPI from './api/api.user';
import AuthAPI from './api/api.auth';
import ItemAPI from './api/api.item';
import OrderAPI from './api/api.order';
import { uploadFile } from '@controllers/api/FileHandle'; // Import the FileHandle controller

const router = express.Router();

const RouterAPI = (app) => {

    OrderAPI(router);
    UserAPI(router);
    AuthAPI(router);
    ItemAPI(router);

    router.post('/upload', uploadFile); // Add the file upload route

    return app.use("/api", router);
}
export default RouterAPI;