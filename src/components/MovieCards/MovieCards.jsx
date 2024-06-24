import React from "react";

const MovieCards = ({ movie,watchList,setWatchList }) => {

//******* REMOVE MOVIE FROM ANY(DYNAMIC) WATCH LIST ********/
  const removeMovieFromWatchList = (movieId) => {
    const updatedWatchList = watchList.map(watchListItem => ({
      ...watchListItem,
      movies: watchListItem.movies.filter(movie => movie.imdbID !== movieId),
    }));
    setWatchList(updatedWatchList);
  };

  //******* REMOVE MOVIE FROM SPECIFIC WATCH LIST ********/
  const removeMovieFromDirectWatchList = (watchListName, movieId) => {
    // Update the specific watch list
    const updatedWatchList = watchList.map(watchListItem => {
      if (watchListItem.name === watchListName) {
        return {
          ...watchListItem,
          movies: watchListItem.movies.filter(movie => movie.imdbID !== movieId)
        };
      }
      return watchListItem;
    });
    // Update the state with the new watch list
    setWatchList(updatedWatchList);
  };

  //*******CHECK IS MOVIE INTO WTCHLIST ********/
  const isMovieInWatchList = (imdbID) => {
    return watchList?.some(watchListItem =>
      watchListItem.movies.some(movie =>
        movie.imdbID === imdbID 
      )
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
    <div className="plan">
      <div className="inner">
        <span className="pricing">
          <span>
            $49 <small>/ m</small>
          </span>
        </span>
        <p className="title">Professional</p>
        <p className="info">{movie?.Title}</p>
        <ul className="features">
          <li>
            <span className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100px" }}
              />
              <strong>{movie?.year}</strong> team members
            </span>
          </li>
          <li>
            <span className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>
              Plan <strong>team meetings</strong>
            </span>
          </li>
          <li>
            <span className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>File sharing</span>
          </li>
        </ul>
        <div className="action">
          <a
            onClick={() => {
              addMoviesIntoWatchList(movie, "A");
            }}
            className="button"
            href="#"
          >
            Add Wishlist
          </a>
          {isMovieInWatchList(movie?.imdbID) && (
            <a
              onClick={() => {
                removeMovieFromDirectWatchList("A", movie.imdbID);
              }}
              className="button"
              href="#"
            >
              Remove Wishlist
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
