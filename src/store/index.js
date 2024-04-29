import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "../slice/showCartSlice";

const store = configureStore({
    reducer: {showCart: showCartSlice}
})

export default store;