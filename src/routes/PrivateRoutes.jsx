import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import MainRoutes from "./MainRoutes";

export const PrivateRoutes = ({isUserLoggedIn}) => {
  return isUserLoggedIn ? <Outlet /> : <Navigate to={MainRoutes.LOGIN} />;
};
