import React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import PageLoader from "./components/Loaders/PageLoader";
import { getUser } from "./global/globalFunctions";
import Sidebar from "./components/Sidebar/Sidebar";

const Login = lazy(() => import("./pages/Auth/Login"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  const isUserLoggedIn = getUser()?.length > 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate(MainRoutes.LOGIN);
    }
  }, [navigate]);

  return (
    <div className="wrapper">
      {isUserLoggedIn &&<Sidebar />}
      <div className="wrapper-main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={MainRoutes.LOGIN} element={<Login />} />
            <Route element={<PrivateRoutes isUserLoggedIn={isUserLoggedIn} />}>
              <Route path={MainRoutes.HOME} element={<Home />} />
              <Route path={MainRoutes.MYWATACHLIST} element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
      />
    </div>
  );
}

export default App;
