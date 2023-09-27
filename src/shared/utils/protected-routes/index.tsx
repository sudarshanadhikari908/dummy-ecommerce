import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type IProps = {
  children: string | JSX.Element | JSX.Element[];
};

function ProtectedRoute({ children }: IProps) {
  const location = useLocation();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedRoute;
