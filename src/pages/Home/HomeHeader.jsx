import React from "react";
import ApiCallLoader from "../../components/Loaders/ApiCallLoader";
import { toast } from "react-toastify";
import ToasterMessages from "../../utils/toasterMessage";

const HomeHeader = ({
  handleSearchInputChange,
  handleSearchSubmit,
  searchQuery,
  loader,
  selectedWatchList,
  setWatchList,
  watchList,
  setSelectedWatchList
}) => {

  const removeWatchList = () => {
    const updatedWatchList = watchList.filter(
      (watchListItem) => watchListItem.name !== selectedWatchList?.name
    );
    setWatchList(updatedWatchList);
    setSelectedWatchList(null)
    toast.success(ToasterMessages.DELETEWATCHLIST)
  };


  return (
    <>
      <div className="card main-border-primary w-100">
        <div className="card-body">
          <div className="d-flex justify-content-between gap-3">
            <div className="d-flex flex-column">
              <p className="h1 mb-4">
                Welcome to&nbsp;
                <span className="main-text-primary">
                  {selectedWatchList?.name
                    ? selectedWatchList?.name
                    : "Movie App"}
                </span>
              </p>
              {selectedWatchList?.about && (
                <>
                  <p className="h5 fw-bold mb-1">About this watchlist</p>
                  <p className="mb-0">{selectedWatchList?.about}</p>
                </>
              )}
              {!selectedWatchList?.name && (
                <p>
                  Browse movies, add them to watchlists and share with friends.
                  Just click the + to add a movie into your watchlist.
                </p>
              )}
            </div>
            {selectedWatchList?.name && (
              <span onClick={removeWatchList} className="btn btn-icon rounded-circle btn-outline-danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
      {!selectedWatchList?.name && (
        <form onSubmit={handleSearchSubmit}>
          <div className="input-group mb-3">
            <span
              className="input-group-text bg-white"
              id="main_form"
              style={{ borderRight: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <input
              className="form-control focus-none"
              style={{ borderLeft: "none" }}
              aria-describedby="main_form"
              placeholder="Search"
              type="search"
              value={searchQuery}
              required
              minLength={3}
              maxLength={12}
              onChange={handleSearchInputChange}
            />
            <button
              disabled={loader}
              type="submit"
              className="input-group-text main-btn-primary"
            >
              {loader ? <ApiCallLoader /> : "Search"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default HomeHeader;
