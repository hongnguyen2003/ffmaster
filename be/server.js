import express from 'express';
import viewEngine from './config/viewEngine';
import timeLog from './middleware/logging.js';
import path from 'path';
import dotenv from 'dotenv';
import RouterAPI from './router/apiRoute.js';
import isAuth from './middleware/isAuth.js';
import session from 'express-session';
import RedisStore from "connect-redis"
import { createClient } from "redis"
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
})


const app = express();
dotenv.config();
const sessionConfig = {
    secret: process.env.JWT_SECRET,
    resave: false,
    store: redisStore,
    saveUninitialized: false,
}
const corsOptions = {
    origin: `http://localhost:${process.env.PORT_FE || 3000}`, // Đảm bảo URL khớp chính xác với client
    credentials: true, // Để cho phép gửi cookies hoặc thông tin xác thực
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Các phương thức được phép
    optionsSuccessStatus: 204, // Đảm bảo xử lý OPTIONS
};


app.use(session(sessionConfig));
app.use(cookieParser());


app.use('/src', express.static(path.join(__dirname, 'src')));
app.use(express.json());
app.use(cors(corsOptions));
app.use(timeLog);
// app.use(isAuth);
app.options('*', cors(corsOptions));


viewEngine(app);
RouterAPI(app);



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on address http://localhost:${port}`);
});