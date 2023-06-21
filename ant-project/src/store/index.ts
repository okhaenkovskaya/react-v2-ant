import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./slices/productSlice";
import productItemSlice from "./slices/productItemSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterslice";


export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productItemSlice,
    cart: cartSlice,
    filter: filterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;