import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParsedQs } from "qs";
import { RootState } from "../store";

type Sort = 'rating' | 'title' | 'price';

interface FilterSliseProps {
  searchValue: string | string[] | ParsedQs | ParsedQs[] | undefined;
  categoryId: number;
  sort: Sort;
}

const initialState: FilterSliseProps = {
  searchValue: "",
  categoryId: 0,
  sort: "rating",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterSliseProps> ) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.categoryId = Number(action.payload.categoryId);
      } else {
        state.categoryId = 0;
        state.sort = "rating";
      }
    },
  },
});

export const selectorFilter = (state: RootState) => state.filter;
// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setFilter, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
