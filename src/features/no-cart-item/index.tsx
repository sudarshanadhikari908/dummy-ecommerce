import React from "react";
import "./noCartItem.css";

function NoCartItems() {
  return (
    <div className="no-cart-page">
      <div className="message">
        <p>No items in your cart.</p>
        <p>Continue shopping or return to the homepage.</p>
      </div>
      <a href="/" className="btn color-primary">
        Return to Homepage
      </a>
    </div>
  );
}

export default NoCartItems;
