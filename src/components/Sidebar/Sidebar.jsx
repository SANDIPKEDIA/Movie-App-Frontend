import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  clearSelectedWatchList,
  getUser,
  selectWatchList,
  setWatchListToLocalStorage,
  viewMyWatchList,
} from "../../global/globalFunctions";
import ToasterMessages from "../../utils/toasterMessage";
import { toast } from "react-toastify";
import AddWatchList from "../Watchlist/AddWatchList";
import MainRoutes from "../../routes/MainRoutes";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [watchList, setWatchList] = useState(viewMyWatchList());
  const [selectedWatchList, setSelectedWatchList] = useState(null);
  const navigate = useNavigate();

  //******* FOR REALTIME GET WATCHLIST DATA FROM LOCALSTORAGE********/
  useEffect(() => {
    setWatchListToLocalStorage(watchList);
  }, [watchList]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogoutUser = () => {
    localStorage.removeItem(`LoggedInUser`);
    toast.success(ToasterMessages.LOGOUT);
  };

  const removeWatchList = (watchListName) => {
    const updatedWatchList = watchList.filter(
      (watchListItem) => watchListItem.name !== watchListName
    );
    // Update the state with the new watch list
    setWatchList(updatedWatchList);
  };

  const handleSelectWatchList = (wl) => {
    selectWatchList(wl);
    setSelectedWatchList(wl);
    navigate(MainRoutes.WATCHLIST);
  };

  return (
    <>
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        <div className="d-flex align-items-center">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <i className="lni lni-grid-alt main-text-primary"></i>
          </button>
          <div className="sidebar-logo">
            <Link to={MainRoutes.HOME} className="main-text-primary">
              Watchlists
            </Link>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li  className="sidebar-item">
            <Link to={MainRoutes.HOME} onClick={clearSelectedWatchList} className="sidebar-link active">
              <i className="lni lni-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <hr className="main-bg-primary-light" />
          <li className="sidebar-item">
            <Link className="sidebar-link position-relative">
              <i class="lni lni-list"></i>
              <span>My Watchlist</span>
              <span
                className="btn btn-icon position-right btn-light"
                data-bs-toggle="modal"
                data-bs-target="#add_movie"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill text-secondary"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
              </span>
            </Link>
          </li>
          <div
            className={
              isExpanded
                ? "d-flex flex-column gap-2 p-3 mh-340p overflow-auto"
                : "hide-when-collapsed"
            }
          >
            {watchList?.map((item) => {
              return (
                <div
                  className="card py-2 px-3 w-210p"
                  style={{
                    border:
                      item?.name === selectedWatchList?.name
                        ? "2px solid #f33f40"
                        : "",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleSelectWatchList(item);
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className="lni lni-slack"></i>
                    <span>
                      {item?.name} ({item?.movies?.length})
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ul>
        <hr className="main-bg-primary-light" />
        <div className="sidebar-footer ">
          <li className="sidebar-item mb-3 ">
            <Link to="" className="sidebar-link">
              <img
                onClick={toggleSidebar}
                className="avatar"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <span className="ms-2 d-flex align-items-center justify-content-between w-100">
                <span className="w-75 text-truncate">{getUser()}</span>
                <span className="dropdown">
                  <span
                    className="btn btn-icon dropdown-toggle"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li onClick={handleLogoutUser}>
                      <span className="dropdown-item">Logout</span>
                    </li>
                  </ul>
                </span>
              </span>
            </Link>
          </li>
        </div>
      </aside>

      <AddWatchList setWatchList={setWatchList} watchList={watchList} />
    </>
  );
};

export default Sidebar;
