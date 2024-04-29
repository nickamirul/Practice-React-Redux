import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "../slice/showCartSlice";
import counterCartSlice from "../slice/counterCartSlice";
import cartSlice from "../slice/cart-slice";

const store = configureStore({
    reducer: {showCart: showCartSlice, counterCart: counterCartSlice, cart: cartSlice.reducer}
})

export default store;