import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  EProductSliceStatus,
  IProductBlock,
  IProductsSlice,
  IProductSliceParams
} from "../../types/productSliceTypes"

const initialState: IProductsSlice = {
  productList: [],
  status: EProductSliceStatus.Loading
}

export const fetchProducts = createAsyncThunk<IProductBlock[], IProductSliceParams>(
  "products/fetchProduct",
  async(params) => {
    const {categoryID} = params;
    const response = await axios.get<IProductBlock[]>(
      `https://fakestoreapi.com/products`,
      {
        params: {
          category: categoryID > 0 ? categoryID : null,
        }
      }
    );

    return response.data;
  }
)

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.productList = [];
      state.status = EProductSliceStatus.Loading;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.status = EProductSliceStatus.Success;
    })
    builder.addCase(fetchProducts.rejected, (state, ) => {
      state.productList = [];
      state.status = EProductSliceStatus.Error;
    })
  }
})

export default productsSlice.reducer;