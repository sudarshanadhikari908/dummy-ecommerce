import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@shared/axios";

type IPayload = {
  searchQuery?: string;
};
export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async ({ searchQuery }: IPayload) => {
    try {
      let api = `/products`;
      if (searchQuery) api += `/search?q=${searchQuery}`;
      const res = await axiosInstance.get(api);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      return { error: "Failed to fetch products. " };
    }
  },
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: string) => {
    try {
      const res = await axiosInstance.get(`/products/${id}`);
      if (res?.status === 200) {
        return res.data;
      }
    } catch (e) {
      return e;
    }
  },
);
