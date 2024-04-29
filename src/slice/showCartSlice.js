import { createSlice } from "@reduxjs/toolkit";

const initialShowCart = {
     isShowCart: true,
}

const showCartSlice = createSlice({
    name: "showCartSlice",
    initialState: initialShowCart,
    reducers:{

    }
})

export const showCartSliceAction = showCartSlice.actions;

export default showCartSlice.reducer;