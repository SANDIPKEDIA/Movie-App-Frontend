import React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import {
  getUser,
  setWatchListToLocalStorage,
  viewMyWatchList,
} from "./global/globalFunctions";
import Sidebar from "./components/Sidebar/Sidebar";

const Login = lazy(() => import("./pages/Auth/Login"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  const isUserLoggedIn = getUser()?.length > 0;
  const navigate = useNavigate();
  const [watchList, setWatchList] = useState(viewMyWatchList());

  //******* FOR REALTIME GET WATCHLIST DATA FROM LOCALSTORAGE********/
  useEffect(() => {
    setWatchListToLocalStorage(watchList);
  }, [watchList]);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate(MainRoutes.LOGIN);
    }
  }, [navigate]);

  return (
    <div className="wrapper">
      {isUserLoggedIn && (
        <Sidebar watchList={watchList} setWatchList={setWatchList} />
      )}
      <div className="wrapper-main">
        <Suspense fallback={"Loading Movie App.."}>
          <Routes>
            <Route path={MainRoutes.LOGIN} element={<Login />} />
            <Route element={<PrivateRoutes isUserLoggedIn={isUserLoggedIn} />}>
              <Route
                path={MainRoutes.HOME}
                element={
                  <Home watchList={watchList} setWatchList={setWatchList} />
                }
              />
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
