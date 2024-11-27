import { createSlice } from '@reduxjs/toolkit';
const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};
export const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart'));
};
const initialState = {
    cart: getCartFromLocalStorage() || [],
    showCart: false,
    type: 'CART',
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
            saveCartToLocalStorage(state.cart);
        },
        emptyCart: (state) => {
            state.cart = [];
            saveCartToLocalStorage([]);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            saveCartToLocalStorage(state.cart);
        },
        turnCart(state) {
            state.showCart = !state.showCart;
        },
        changeCartType(state, action) {
            state.type = action.payload;
        },
    },
});

export const { addItem, removeItem, turnCart, changeCartType, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
