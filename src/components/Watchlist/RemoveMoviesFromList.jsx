import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToasterMessages from "../../utils/toasterMessage";

const RemoveMoviesFromList = ({ watchList, setWatchList, selectedMovie }) => {

  const resetData = () => {
    const closeModalDom = document.getElementById(
      "remove_movie_from_watchlist"
    );
    if (closeModalDom) closeModalDom.click();
  };

  //******* REMOVE MOVIE FROM ANY(DYNAMIC) WATCH LIST ********/
  const removeMovieFromWatchList = (movieId) => {
    const updatedWatchList = watchList.map((watchListItem) => ({
      ...watchListItem,
      movies: watchListItem.movies.filter((movie) => movie.imdbID !== movieId),
    }));
    setWatchList(updatedWatchList);
    toast.success(ToasterMessages.REMOVEWATCHLIST)
    resetData()
  };


  return (
    <div
      className="modal fade"
      id="remove_movie_from_watchlist"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <p>Are you confirm you want to remove this movie from your watchlist?</p>
          </div>
          <div className="modal-footer">
            <button onClick={resetData} className="btn main-btn-secondary">
              Cancel
            </button>
            <button onClick={()=>{
              removeMovieFromWatchList(selectedMovie?.imdbID)
            }} className="btn main-btn-primary">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveMoviesFromList;
