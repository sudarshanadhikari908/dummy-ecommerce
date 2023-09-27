import { createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductDetail } from "@shared/interface/products";
import { getAllProducts, getProductById } from "@store/actions/product";

interface State {
  productList:
    | {
        products: IProduct[];
        total: number;
        skip: number;
        limit: number;
      }
    | undefined;
  productsListLoading: boolean;
  productDetail: IProductDetail | undefined;
  productDetailLoading: boolean;
}

const initialState: State = {
  productList: undefined,
  productsListLoading: false,
  productDetail: undefined,
  productDetailLoading: false,
};

const productsSlice = createSlice({
  name: "product slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.productsListLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.productsListLoading = false;
      state.productList = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.productsListLoading = false;
      state.productList = undefined;
    });
    builder.addCase(getProductById.pending, (state) => {
      state.productDetailLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.productDetailLoading = false;
      state.productDetail = action.payload;
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.productDetailLoading = false;
      state.productDetail = undefined;
    });
  },
});

export default productsSlice.reducer;
