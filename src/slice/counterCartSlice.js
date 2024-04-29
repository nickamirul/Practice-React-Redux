import { createSlice } from "@reduxjs/toolkit"

const initialCounterCart = {
    counterCart: 0,
}

const counterCartSlice = createSlice({
    name: 'counterCart',
    initialState: initialCounterCart,
    reducers:{
        increaseCart(state){
            state.counterCart++;
        },
        decreaseCart(state){
            state.counterCart--;
        }
    }
})

export const counterCartActions = counterCartSlice.actions;

export default counterCartSlice.reducer;