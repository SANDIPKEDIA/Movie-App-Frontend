import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  clearSelectedWatchList,
  getUser,
  storeSelectedWatchList,
} from "../../global/globalFunctions";
import ToasterMessages from "../../utils/toasterMessage";
import { toast } from "react-toastify";
import AddWatchList from "../Watchlist/AddWatchList";
import MainRoutes from "../../routes/MainRoutes";

const Sidebar = ({
  watchList,
  setWatchList,
  selectedWatchList,
  setSelectedWatchList,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogoutUser = () => {
    localStorage.removeItem(`LoggedInUser`);
    toast.success(ToasterMessages.LOGOUT);
  };

  const handleSelectWatchList = (wl) => {
    storeSelectedWatchList(wl);
    setSelectedWatchList(wl);
  };

  return (
    <>
      <div className="d-none-sm">
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
          <div className="d-flex align-items-center">
            <button
              className="toggle-btn"
              type="button"
              onClick={toggleSidebar}
            >
              {isExpanded ? (
                <i className="lni lni-grid-alt main-text-primary"></i>
              ) : (
                <i className="lni lni-indent-increase main-text-primary"></i>
              )}
            </button>
            <div className="sidebar-logo">
              <Link to={MainRoutes.HOME} className="main-text-primary">
                Watchlists
              </Link>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link
                to={MainRoutes.HOME}
                onClick={() => {
                  setSelectedWatchList(null);
                  clearSelectedWatchList();
                }}
                className="sidebar-link active"
              >
                <i
                  className="lni lni-home"
                  onClick={() => setIsExpanded(true)}
                ></i>
                <span>Home</span>
              </Link>
            </li>
            <hr className="main-bg-primary-light" />
            <li className="sidebar-item">
              <Link className="sidebar-link position-relative">
                <i
                  className="lni lni-list"
                  onClick={() => setIsExpanded(true)}
                ></i>
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
              {watchList?.map((item, index) => {
                return (
                  <div
                    key={index}
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
            <li className="sidebar-item mb-3">
              <Link to={MainRoutes.HOME} className="sidebar-link">
                <img
                  onClick={() => setIsExpanded(true)}
                  className="avatar"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <span className="ms-2 d-flex align-items-center justify-content-between w-100">
                  <span className="dropdown">
                    <span
                      className="dropdown-toggle d-flex align-items-center"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="text-truncate" style={{ width: "60%" }}>
                        {getUser()}
                      </div>
                    </span>
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
      </div>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm d-block-sm">
        <div className="container-fluid">
          <Link
            to={MainRoutes.HOME}
            className="fw-bold h4 mb-0 navbar-brand main-text-primary"
          >
            Watchlists
          </Link>
          <span
            className="navbar-toggler btn btn-icon main-btn-primary"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni lni-menu"></i>
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-white text-center">
              <li className="nav-item pb-0">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to={MainRoutes.HOME}
                  onClick={() => {
                    setSelectedWatchList(null);
                    clearSelectedWatchList();
                  }}
                >
                  <span className="border-bottom pb-2 main-border-primary">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="border-bottom pb-2 main-border-primary">
                    My Watchlists
                  </span>
                </Link>
                <ul
                  className="dropdown-menu border-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="px-3">
                    <span
                      className="dropdown-item rounded-10p mb-1 text-center border main-border-primary main-text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add_movie"
                    >
                      Add Watchlist
                    </span>
                  </li>
                  {watchList?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="px-3"
                        onClick={() => {
                          handleSelectWatchList(item);
                        }}
                      >
                        <span
                          className={`dropdown-item rounded-10p mb-1 text-center ${
                            item?.name === selectedWatchList?.name
                              ? "main-bg-primary-light"
                              : "border"
                          }`}
                        >
                          {item?.name} ({item?.movies?.length})
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to=""
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <div className="d-flex align-items-start gap-3 justify-content-center">
                    <img
                      onClick={() => setIsExpanded(true)}
                      className="avatar"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <span className="dropdown">
                      <span
                        className="dropdown-toggle d-flex align-items-center"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {getUser()}
                      </span>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li onClick={handleLogoutUser}>
                          <span className="dropdown-item">Logout</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AddWatchList setWatchList={setWatchList} watchList={watchList} />
    </>
  );
};

export default Sidebar;
