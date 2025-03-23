import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { Path } from "~routes/index";

export interface ProtectedRouteProps {
  isAuth: boolean;
  children: React.ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  isAuth,
}) => {
  if (!isAuth) {
    return <Navigate to={Path.Login} />;
  } else {
    return <>{children}</>;
  }
};
