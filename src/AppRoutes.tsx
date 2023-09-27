import Login from "@pages/auth/login";
import MyCart from "@pages/my-cart";
import ProductDetail from "@pages/product-detail";
import PurchaseCart from "@pages/purchase-cart";
import ProtectedRoute from "@shared/utils/protected-routes";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@pages/home"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-cart"
          element={
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/purchase-cart"
          element={
            <ProtectedRoute>
              <PurchaseCart />
            </ProtectedRoute>
          }
        />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
