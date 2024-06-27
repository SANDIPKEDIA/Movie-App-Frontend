import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToasterMessages from "../../utils/toasterMessage";

const RemoveMoviesFromList = ({ watchList, setWatchList, selectedMovie,selectedWatchList,setSelectedWatchList }) => {

  const resetData = () => {
    const closeModalDom = document.getElementById(
      "remove_movie_from_watchlist"
    );
    if (closeModalDom) closeModalDom.click();
  };

//******* REMOVE MOVIE FROM WATCH LIST ********/
const removeMovieFromWatchList = (movieId) => {
  let selectedList = null;
  const updatedWatchList = watchList.map((watchListItem) => {
    const updatedMovies = watchListItem.movies.filter((movie) => movie.imdbID !== movieId);
    if (selectedWatchList?.name && selectedWatchList?.name === watchListItem.name) {
      selectedList = { ...watchListItem, movies: updatedMovies };
    }
    return {
      ...watchListItem,
      movies: updatedMovies,
    };
  });
  setWatchList(updatedWatchList);
  if (selectedList) {
    setSelectedWatchList(selectedList);
  }
  toast.success(ToasterMessages.REMOVEMOVIE);
  resetData();
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
