import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import productsSlice from "@store/reducers/product";
import cartSlice from "@store/reducers/cart";

const persistConfig = {
  key: "root",
  blackList: ["productsSlice"],
  storage,
};

const reducer = combineReducers({
  products: productsSlice,
  carts: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
