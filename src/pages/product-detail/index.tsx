import NavBar from "@features/navbar";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import "./productDetail.css";
import ProductInfo from "@features/product-info";
import { useAppDispatch, useAppSelector } from "@store/redux-Hooks";
import { getProductById } from "@store/actions/product";

function ProductDetail() {
  const { id } = useParams();
  const { productDetail } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id]);
  return (
    <>
      <NavBar />
      <div className="mt-60">
        <div className="centered-card">
          {productDetail && <ProductInfo productDetail={productDetail} />}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
