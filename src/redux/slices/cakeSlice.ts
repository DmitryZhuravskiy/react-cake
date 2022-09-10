import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type Cake = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  rating: number;
};

interface CakeSlice {
  items: Cake[];
  status: "loading" | "success" | "error";
}

type FetchCakesProps = {
  categoryId: number;
  sort: string;
  search: string;
};

const initialState: CakeSlice = {
  items: [],
  status: "loading",
};

export const fetchCakes = createAsyncThunk(
  "cakes/fetchCakes",
  async (params: FetchCakesProps) => {
    const { categoryId, sort, search } = params;
    const { data } = await axios.get(
      `https://630752833a2114bac75f4277.mockapi.io/cakes?${
        categoryId > 0 ? `category=${categoryId}` : ``
      }&sortBy=${sort.replace("-", "")}&order=desc${search}`
    );
    return data as Cake[];
  }
);

export const cakeSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Cake[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCakes.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchCakes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchCakes.rejected, (state, action) => {
      state.items = [];
      state.status = "error";
    });
  },
});

export const selectorCake = (state: RootState) => state.cakes;
export const { setItems } = cakeSlice.actions;
export default cakeSlice.reducer;
