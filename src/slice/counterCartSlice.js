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

            if(state.counterCart < 0){
                state.counterCart = 0;
            }
        }
    }
})

export const counterCartActions = counterCartSlice.actions;

export default counterCartSlice.reducer;