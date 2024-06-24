import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { isUserLoggedIN } from "../global/globalFunctions";
import MainRoutes from "./MainRoutes";

export const PrivateRoutes = () => {

  // return isUserLoggedIN() ? <Outlet /> : <Navigate to={MainRoutes.LOGIN} />;
};
