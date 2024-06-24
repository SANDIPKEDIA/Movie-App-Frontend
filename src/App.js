import React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import { PrivateRoutes } from "./routes/PrivateRoutes";

import PageLoader from "./components/Loaders/PageLoader";
import Home from "./pages/Home/Home";


const Login = lazy(() => import("./pages/Auth/Login"));


function App() {
  const refreshToken = localStorage.getItem("refreshTokenForTaskManager");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  // const dispatch = useDispatch();

  // ******** AUTHENTICATE USER CHECK**********
  const handleAuthenticateUser = async () => {
    // console.log("***Logged in Success.Token Verified***");
    // const res = await ApiCall("get", authenticateEndpoints.verifyUser, {
    //   params: { token: refreshToken },
    // });
    // if (res?.success) {
    //   // dispatch(actionCreators.addAuthenticateUser(res.user));
    //   setisLoggedIn(true);
    //   setIsLoaded(true);
    // } else {
    //   setisLoggedIn(false);
    //   setIsLoaded(true);
    // }
  };

  // ******** AUTHENTICE USER API CALLED**********
  // useEffect(() => {
  //   if (refreshToken) {
  //     handleAuthenticateUser();
  //   } else {
  //     setisLoggedIn(false);
  //     setIsLoaded(true);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      {/* <Header /> */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={MainRoutes.LOGIN} element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* ******* MY PrivateRoutes ****** */}
          {/* <Route element={<PrivateRoutes />}>
            <Route path={MainRoutes.CUSTOMER} element={<Customer />} />
          
          </Route> */}
        </Routes>
      </Suspense>
      {/* <Footer /> */}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
      />
    </BrowserRouter>
  );
}

export default App;
