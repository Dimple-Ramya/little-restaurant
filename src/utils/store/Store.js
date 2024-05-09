import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/Cart"


const Store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default Store