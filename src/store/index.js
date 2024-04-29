import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "../slice/showCartSlice";
import counterCartSlice from "../slice/counterCartSlice";

const store = configureStore({
    reducer: {showCart: showCartSlice, counterCart: counterCartSlice}
})

export default store;