import { toast } from "react-toastify";

//******* START API CALL ********/
export const startApiCall = (seterrorMessage, setLoader) => {
  {
    seterrorMessage !== null && seterrorMessage("");
  }
  setLoader(true);
  setTimeout(() => {
    setLoader(false);
  }, 20000);
};

//******* ADD  WATCH LIST ********/
export const addWatchList = (watchListValue) => {
  // Retrieve existing watch list from localStorage
  const existingWatchList = JSON.parse(localStorage.getItem("watchList")) || [];

  // Check if the watch list with the same name already exists
  const isDuplicate = existingWatchList.some(
    (item) => item.name === watchListValue.name
  );

  if (isDuplicate) {
    toast.error("Watch list with the same name already exists.");
  } else {
    // If not a duplicate, update the watch list
    const updatedWatchList = [...existingWatchList, watchListValue];
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
  }
};

//******* ADD MOVIES INTO WATCH LIST ********/
export const viewMyWatchList = () => {
  // Retrieve the existing watch list from localStorage or initialize an empty array
  const watchList = JSON.parse(localStorage.getItem("watchList")) || [];
 return watchList
};
//******* ADD MOVIES INTO WATCH LIST ********/
export const addMoviesIntoWatchList = (movie, selectedWatchList) => {
  // Update the specific watch list item by finding its index or create a new item if not found
  const updatedWatchList = viewMyWatchList().map((item) =>
    item.name === selectedWatchList
      ? { ...item, movies: [...item.movies, movie] }
      : item
  );
  localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
};

export const isMovieInWatchList = (movieDetails) => {
  return viewMyWatchList().some(watchList =>
    watchList.movies.some(movie =>
      movie.title === movieDetails.title && movie.year === movieDetails.year
    )
  );
};

const removeMovieFromDirectlyWatchList = (watchListName, movieId) => {
  // Find the watch list item by name
  const watchList = viewMyWatchList().find(item => item.name === watchListName);

  if (watchList) {
    // Filter out the movie with the specified ID from the watch list
    watchList.movies = watchList.movies.filter(movie => movie.id !== movieId);

    // Update the watch list in localStorage
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }
};
const removeMovieFromWatchList = (movieId) => {
  // Retrieve existing watch list from localStorage
  const existingWatchList = viewMyWatchList();

  // Iterate through each watch list item
  for (const watchList of existingWatchList) {
    // Filter out the movie with the specified ID from the current watch list
    watchList.movies = watchList.movies.filter(movie => movie.id !== movieId);
  }

  // Update the watch list in localStorage
  localStorage.setItem("watchList", JSON.stringify(existingWatchList));
};
