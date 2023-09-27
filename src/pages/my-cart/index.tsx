import Navbar from "@features/navbar";
import React from "react";
import "./myCart.css";
import { useAppSelector } from "@store/redux-Hooks";
import CartTable from "@features/cart-table";
import NoCartItems from "@features/no-cart-item";

function MyCart() {
  const { cartList } = useAppSelector((state) => state.carts);

  return (
    <>
      <Navbar />
      <div className="mt-60 hello">
        <div className="container">
          {cartList?.length ? (
            <CartTable cartList={cartList} cartPage />
          ) : (
            <NoCartItems />
          )}
        </div>
      </div>
    </>
  );
}

export default MyCart;
