import React from "react";
import ApiCallLoader from "../../components/Loaders/ApiCallLoader";

const HomeHeader = ({
  handleSearchInputChange,
  handleSearchSubmit,
  searchQuery,
  loader,
  selectedWatchList,
}) => {
  return (
    <>
      <div className="card main-border-primary w-100">
        <div className="card-body">
          <p className="h1 mb-4">
            Welcome to{" "}
            <span className="main-text-primary">
              {selectedWatchList?.name ? selectedWatchList?.name : "Movie App"}
            </span>
          </p>
          {selectedWatchList?.name ? (
            <p>
              <span style={{ fontWeight: "bold" }}>About this watchlist</span>
              <p>{selectedWatchList?.about}</p>
            </p>
          ) : (
            <p>
              Browse movies, add them to watchlists and share with friends. Just
              click the + to add a movie into your watchlist.
            </p>
          )}
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
