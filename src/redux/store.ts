import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import cakes from "./slices/cakeSlice";

const store = configureStore({
  reducer: {
    filter,
    cart,
    cakes,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
