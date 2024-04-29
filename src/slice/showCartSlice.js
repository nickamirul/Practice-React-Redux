import { createSlice } from "@reduxjs/toolkit";

const initialShowCart = {
     showCart: true,
}

const showCartSlice = createSlice({
    name: "showCartSlice",
    initialState: initialShowCart,
    reducers:{
        click(state){
            state.showCart = !state.showCart;
        }

    }
})

export const showCartSliceAction = showCartSlice.actions;

export default showCartSlice.reducer;