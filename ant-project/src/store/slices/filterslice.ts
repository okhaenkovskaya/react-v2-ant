import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFilterSlice } from "../../types/filterSliceTypes";

const initialState: IFilterSlice = {
  categoryID: 0,
  searchValue: ""
}

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCategoryID: (state, action: PayloadAction<number>) => {
      state.categoryID = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  }
})

export default filterSlice.reducer;
export const {setCategoryID, setSearchValue} = filterSlice.actions;