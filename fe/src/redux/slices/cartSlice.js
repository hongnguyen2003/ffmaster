import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart:
        [
            // {
            //     "id": 1,
            //     "ten": "Free Fire Account 1",
            //     "gia": "1500000.00",
            //     "mota": "High rank, many skins, and rare items.",
            //     "hinhanh": ["acc1.jpg"],
            //     "dangky": 1,
            //     "thevocuc": true,
            //     "soluong": 1,
            //     "nhom": 1,
            //     "createdAt": "2024-11-26T09:14:34.000Z"
            // },
        ],
    showCart: false,
    type: 'CART',
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        turnCart(state) {
            state.showCart = !state.showCart;
        },
        changeCartType(state, action) {
            state.type = action.payload;
        },
    },
});

export const { addItem, removeItem, turnCart, changeCartType } = cartSlice.actions;
export default cartSlice.reducer;
