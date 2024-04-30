import { createSlice } from "@reduxjs/toolkit";

const initialShowCart = {
    showCart: false,
    notification: null,
}

const showCartSlice = createSlice({
    name: "showCartSlice",
    initialState: initialShowCart,
    reducers: {
        click(state) {
            state.showCart = !state.showCart;
        },
        showNotification(state, action) {
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message }
        }

    }
})

export const showCartSliceAction = showCartSlice.actions;

export default showCartSlice.reducer;