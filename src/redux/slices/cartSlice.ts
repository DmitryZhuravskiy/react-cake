import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  size: number,
  count: number,
}

interface CartSliceProps {
  totalPrice: number,
  items: CartItem[]
}

const initialState: CartSliceProps = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem >) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItems(state, action:  PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

// Action creators are generated for each case reducer function
export const { addItems, removeItems, clearItems, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
