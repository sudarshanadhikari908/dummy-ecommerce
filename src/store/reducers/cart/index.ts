import { createSlice } from "@reduxjs/toolkit";
import { ICartList } from "@shared/interface/cart";

interface State {
  cartList: ICartList[] | undefined;
  cartListLoading: boolean;
  checkedList: ICartList[];
  buyingCartList: ICartList[];
}

const initialState: State = {
  cartList: undefined,
  cartListLoading: false,
  checkedList: [],
  buyingCartList: [],
};

const cartSlice = createSlice({
  name: "product slice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      if (!state.cartList) {
        state.cartList = [];
      }

      const matchingItem = state.cartList.find(
        (item: ICartList) => item.id === payload.productDetails.id,
      );

      if (matchingItem) {
        matchingItem.quantity += payload.quantities;
      } else {
        const newItem = {
          ...payload.productDetails,
          quantity: payload.quantities,
        };
        state.cartList.push(newItem);
      }
    },
    clearCart: (state) => {
      state.cartList = undefined;
    },
    deleteCart: (state, action) => {
      const { payload } = action;
      if (state.cartList) {
        state.cartList = state?.cartList.filter(
          (item: ICartList) => item.id !== payload.id,
        );
      }
    },
    changeQuantity: (state, action) => {
      const { payload } = action;
      if (state.cartList) {
        state.cartList = state.cartList.map((item: ICartList) => {
          if (item.id === payload.cart.id) {
            return {
              ...item,
              quantity: payload.quantity,
            };
          }
          return item;
        });
      }
    },
    handleChecked: (state, action) => {
      const cartItem = action.payload;
      return { ...state, checkedList: [...state.checkedList, cartItem] };
    },
    handleCheckedRemove: (state, action) => {
      const cartItemId = action.payload;
      const updatedCartItems = state.checkedList.filter(
        (item: ICartList) => item.id !== cartItemId,
      );
      return { ...state, checkedList: updatedCartItems };
    },
    handleBuyingCart: (state) => {
      state.buyingCartList = state.checkedList;
    },
    resetCheckedCart: (state) => {
      state.checkedList = [];
    },
  },
});

export const {
  addToCart,
  clearCart,
  deleteCart,
  changeQuantity,
  handleChecked,
  handleCheckedRemove,
  handleBuyingCart,
  resetCheckedCart,
} = cartSlice.actions;

export default cartSlice.reducer;
