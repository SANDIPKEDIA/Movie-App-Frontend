import React from "react";

const MovieCards = ({ movie, index, watchList, setWatchList }) => {
  //******* REMOVE MOVIE FROM ANY(DYNAMIC) WATCH LIST ********/
  const removeMovieFromWatchList = (movieId) => {
    const updatedWatchList = watchList.map((watchListItem) => ({
      ...watchListItem,
      movies: watchListItem.movies.filter((movie) => movie.imdbID !== movieId),
    }));
    setWatchList(updatedWatchList);
  };

  //******* REMOVE MOVIE FROM SPECIFIC WATCH LIST ********/
  const removeMovieFromDirectWatchList = (watchListName, movieId) => {
    const updatedWatchList = watchList.map((watchListItem) => {
      if (watchListItem.name === watchListName) {
        return {
          ...watchListItem,
          movies: watchListItem.movies.filter(
            (movie) => movie.imdbID !== movieId
          ),
        };
      }
      return watchListItem;
    });
    setWatchList(updatedWatchList);
  };

  //*******CHECK IS MOVIE INTO WTCHLIST ********/
  const isMovieInWatchList = (imdbID) => {
    return watchList?.some((watchListItem) =>
      watchListItem.movies.some((movie) => movie.imdbID === imdbID)
    );
  };

  //******* ADD MOVIE INTO ANY(DYNAMIC) WATCHLIST ********/
  const addMoviesIntoWatchList = (movie, selectedWatchList) => {
    const updatedWatchList = watchList?.map((item) =>
      item.name === selectedWatchList
        ? { ...item, movies: [...item.movies, movie] }
        : item
    );
    setWatchList(updatedWatchList);
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
            width="34"
            height="34"
            fill="currentColor"
            className="bi bi-bookmark-check-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
            />
          </svg>
        ) : (
          <svg
          onClick={()=>{addMoviesIntoWatchList(movie,"Sandip Kedia3")}}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="#fff"
            className="bi bi-bookmark-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
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
        {/* <div className="d-flex align-items-center justify-content-end gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-emoji-smile-fill text-success"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
        </svg>
        {`${index + 1}/5`}
      </div> */}
        <h5 className="card-title w-100 nowrap text-truncate">
          {movie?.Title}
        </h5>
        <p className="card-text text-secondary">{movie?.Year}</p>
      </div>
    </div>
  );
};

export default MovieCards;
