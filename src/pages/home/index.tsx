import NavBar from "@features/navbar";
import React from "react";
import ProductCard from "@features/product-card";
import { IProduct } from "@shared/interface/products";
import "./home.css";
import Loader from "@shared/components/loader";
import { useAppSelector } from "@store/redux-Hooks";

function Home() {
  const { productList } = useAppSelector((state) => state.products);
  return (
    <>
      <NavBar />
      <div className="product-card-container mt-60">
        {productList ? (
          productList?.products?.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Home;
