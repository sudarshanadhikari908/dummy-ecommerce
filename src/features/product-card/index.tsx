import React from "react";
import "./productCard.css";
import { IProduct } from "@shared/interface/products";
import { Link } from "react-router-dom";

type IProps = {
  product: IProduct;
};

function ProductCard({ product }: IProps) {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    id,
    stock,
    branch,
    category,
    thumbnail,
  } = product;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-image-container">
        <img src={thumbnail} alt={title} className="product-thumbnail" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-ribbon">{category.toUpperCase()}</div>
        <p className="product-description">{description}</p>
        <div className="products-price">
          <span className="original-price price-tag">${price}</span>
          {discountPercentage > 0 && (
            <span className="discounted-price">
              ${(price - price * (discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>
        <div className="product-rating">
          {/* You can display star ratings or other rating components here */}
          Rating: {rating}
        </div>
        <div className="product-stock">Stock: {stock}</div>
        <div className="product-branch">Branch: {branch}</div>
      </div>
    </Link>
  );
}

export default ProductCard;
