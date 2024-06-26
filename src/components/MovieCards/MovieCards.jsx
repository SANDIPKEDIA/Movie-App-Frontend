import React from "react";

const MovieCards = ({ movie, index, watchList, setWatchList,setselectedMovie }) => {

  //*******CHECK IS MOVIE INTO WTCHLIST ********/
  const isMovieInWatchList = (imdbID) => {
    return watchList?.some((watchListItem) =>
      watchListItem.movies.some((movie) => movie.imdbID === imdbID)
    );
  };



  return (
    <div
      className="card rounded-custom shadow-sm position-relative"
      key={index}
    >
      <span className="position-top-left-1">
        {isMovieInWatchList(movie?.imdbID) ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>{setselectedMovie(movie)}}
            data-bs-toggle="modal"
            data-bs-target="#remove_movie_from_watchlist"
            width="34"
            height="34"
            fill="#52eeaa"
            className="bi bi-bookmark-check-fill"
            viewBox="0 0 16 16"
            style={{cursor:"pointer"}}
          >
            <path
              fillRule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
            />
          </svg>
        ) : (
          <svg
          data-bs-toggle="modal"
          data-bs-target="#add_movie_into_watchlist"
          onClick={()=>{setselectedMovie(movie)}}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="#fff"
            className="bi bi-bookmark-plus-fill"
            style={{cursor:"pointer"}}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"
            />
          </svg>
        )}
      </span>
      <img
        src={movie?.Poster}
        className="card-img-top"
        alt={`Image for ${movie?.Title}`}
      />
      <div className="card-body">
        <h5 className="card-title w-100 nowrap text-truncate">
          {movie?.Title}
        </h5>
        <p className="card-text text-secondary">{movie?.Year} ({movie?.Type})</p>
      </div>
     
    </div>
  );
};

export default MovieCards;
