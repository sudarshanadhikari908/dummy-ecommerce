import Carttable from "@features/cart-table";
import Navbar from "@features/navbar";
import { resetCheckedCart } from "@store/reducers/cart";
import { useAppDispatch, useAppSelector } from "@store/redux-Hooks";
import React, { useEffect } from "react";

function PurchaseCart() {
  const dispatch = useAppDispatch();
  const { buyingCartList } = useAppSelector((state) => state.carts);
  useEffect(() => {
    return () => {
      dispatch(resetCheckedCart());
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-60">
        <div className="container">
          <Carttable cartList={buyingCartList} cartPage={false} />
        </div>
      </div>
    </>
  );
}

export default PurchaseCart;
