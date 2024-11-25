
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    isShowForm: false,
    userInfo: {
        username: '',
        fullname: '',
        role: '',
        email: '',
        address: '',
        sex: '',
    },
    formType: 'LOGIN',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
        turnForm(state) {
            state.isShowForm = !state.isShowForm;
        },
        changeFormType(state, action) {
            state.formType = action.payload;
        },
        changeUserInfo(state, action) {
            state.userInfo = action.payload;
        }

    },
});

export const { login, logout, turnForm, changeFormType, changeUserInfo } = authSlice.actions;
export default authSlice.reducer;