export const selectCartItems = state => state.cart.cart;
export const selectIsShowCart = (state) => state.cart.showCart;
export const sellectCartType = (state) => state.cart.type;
export const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart'));
};