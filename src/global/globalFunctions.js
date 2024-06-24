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



