import React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import {
  getSelectedWatchList,
  getUser,
  setWatchListToLocalStorage,
  storeSelectedWatchList,
  viewMyWatchList,
} from "./global/globalFunctions";
import Sidebar from "./components/Sidebar/Sidebar";

const Auth = lazy(() => import("./pages/Auth/Auth"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  const isUserLoggedIn = getUser()?.length > 0;
  const navigate = useNavigate();
  const [watchList, setWatchList] = useState(viewMyWatchList());
  const [selectedWatchList, setSelectedWatchList] = useState(
    getSelectedWatchList()
  );

  //******* FOR REALTIME GET WATCHLIST DATA FROM LOCALSTORAGE********/
  useEffect(() => {
    setWatchListToLocalStorage(watchList);
  }, [watchList]);

  //******* FOR REALTIME GET SELECTED WATCHLIST DATA FROM LOCALSTORAGE********/
  useEffect(() => {
    storeSelectedWatchList(selectedWatchList);
  }, [selectedWatchList]);

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate(MainRoutes.HOME);
    }
  }, [navigate]);

  return (
    <div className="wrapper">
      {isUserLoggedIn && (
        <Sidebar
          watchList={watchList}
          setWatchList={setWatchList}
          setSelectedWatchList={setSelectedWatchList}
          selectedWatchList={selectedWatchList}
        />
      )}
      <div className="wrapper-main">
        <Suspense fallback={"Loading Movie App.."}>
          <Routes>
            <Route path={MainRoutes.LOGIN} element={<Auth />} />
            <Route element={<PrivateRoutes isUserLoggedIn={isUserLoggedIn} />}>
              <Route
                path={MainRoutes.HOME}
                element={
                  <Home
                    watchList={watchList}
                    setWatchList={setWatchList}
                    selectedWatchList={selectedWatchList}
                    setSelectedWatchList={setSelectedWatchList}
                  />
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
