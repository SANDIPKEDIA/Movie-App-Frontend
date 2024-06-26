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

//******* GET AND CHECK USER ********/
export const getUser = () => {
  // Retrieve the existing watch list from localStorage or initialize an empty array
  const user = localStorage.getItem("LoggedInUser");
 return user
};

//******* SET MY WATCH LIST ********/
export const setWatchListToLocalStorage = (watchList) => {
  localStorage.setItem(`watchList${getUser()}`, JSON.stringify(watchList));
};

//******* GET MY WATCH LIST ********/
export const viewMyWatchList = () => {
  const watchList = JSON.parse(localStorage.getItem(`watchList${getUser()}`)) || [];
 return watchList
};


//******* SELECT WATCH LIST ********/
export const storeSelectedWatchList = (watchList) => {
  localStorage.setItem(`selectedwatchList${getUser()}`, JSON.stringify(watchList));
};

//******* GET SELECTED WATCH LIST ********/
export const getSelectedWatchList = () => {
  const watchList = JSON.parse(localStorage.getItem(`selectedwatchList${getUser()}`)) || null;
  return watchList
};

//******* CLEAR SELECTED WATCH LIST ********/
export const clearSelectedWatchList = () => {
  const watchList = localStorage.setItem(`selectedwatchList${getUser()}`,null);
  return watchList
};
