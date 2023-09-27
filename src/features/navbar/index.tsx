import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@store/redux-Hooks";
import useDebouncedSearch from "@shared/utils/debounced-search-hook";
import { getAllProducts } from "@store/actions/product";

function NavBar() {
  const { cartList } = useAppSelector((state) => state.carts);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { debouncedQuery } = useDebouncedSearch(searchQuery);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (location?.pathname === "/") {
      dispatch(getAllProducts({ searchQuery: debouncedQuery }));
    }
  }, [debouncedQuery]);

  return (
    <div className="navbar">
      <div className="left" onClick={() => navigate("/")}>
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="center">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e?.target?.value)
          }
        />
      </div>
      <div className="right" onClick={() => navigate("/my-cart")}>
        <div className="cart-icon">
          <ShoppingCart />
          <span className="cart-count">{cartList ? cartList?.length : 0}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
