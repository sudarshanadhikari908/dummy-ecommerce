import React, { useState } from "react";
import "./productInfo.css";
import { useAppDispatch } from "@store/redux-Hooks";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { addToCart } from "@store/reducers/cart";
import { IProductDetail } from "@shared/interface/products";
import { toast } from "react-toastify";
import Loader from "@shared/components/loader";

function ProductInfo({ productDetail }: { productDetail: IProductDetail }) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const productAdd = (productDetails: IProductDetail, quantities: number) => {
    dispatch(addToCart({ productDetails, quantities }));
    toast.success("Items added to cart successfully");
  };

  return (
    <>
      {productDetail ? (
        <div className="card-content">
          <div className="left-section">
            <div className="big-image">
              <img src={productDetail?.thumbnail} alt="Big Product" />
            </div>
            <div className="small-images">
              {productDetail?.images?.map((image: string) => (
                <img
                  src={image}
                  key={image}
                  alt="Product"
                  className="small-image"
                />
              ))}
            </div>
          </div>
          <div className="right-section">
            <h1>{productDetail?.title}</h1>
            <hr className="divider" />
            <p className="description color-gray">
              {productDetail?.description}
            </p>
            <div className="basic-info">
              <span className="color-primary">Rating: </span>{" "}
              {productDetail?.rating}
              <span className="vertical-divider" />
              <span className="color-primary">Brand:</span>{" "}
              {productDetail?.brand}
              <span className="vertical-divider" />
              <span className="color-primary">Category:</span>{" "}
              {productDetail?.category}
            </div>
            <div className="price-details gap-10 mt-5">
              <p>
                <span className="color-gray original-price">
                  ${productDetail?.price}
                </span>{" "}
                Inclusive of Taxes{" "}
              </p>
              <span className="discount">
                <h6>{`$${(
                  Number(productDetail?.price) -
                  Number(productDetail?.price) *
                    (Number(productDetail?.discountPercentage) / 100)
                ).toFixed(2)}`}</h6>
                <span className="discount-amount">
                  -{productDetail?.discountPercentage} OFF
                </span>
              </span>
            </div>
            <div className="mt-10 button-wrapper">
              <p className="mr-5 font-size-18">Quantity: </p>

              <Minus
                className="quantity-button"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              />
              <input
                type="number"
                value={quantity}
                disabled
                min="1"
                className="quantity-input"
              />
              <Plus
                className="quantity-button"
                onClick={() => setQuantity(quantity + 1)}
              />
            </div>
            <div className="mt-30 d-flex gap-5 bg-orange h-30 ">
              <button
                type="button"
                className="d-flex justify-center align-center cart-button cursor-pointer"
                onClick={() => productAdd(productDetail, quantity)}
              >
                {" "}
                <ShoppingCart color="#fc5c32" className="mr-5" />
                Add To Cart
              </button>
              <button
                type="button"
                className="d-flex justify-center align-center buy-button cursor-pointer"
              >
                {" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductInfo;
