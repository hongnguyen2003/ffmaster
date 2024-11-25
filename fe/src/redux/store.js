import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    // Optional: Add middleware, devTools, and other store enhancers if needed
});

export default store;