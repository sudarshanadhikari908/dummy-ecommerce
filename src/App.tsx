import "./App.css";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "@shared/hoc/ErrorBoundary.tsx";
import Loader from "@shared/components/loader/index.tsx";
import AppRoutes from "./AppRoutes.tsx";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <ToastContainer />
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
