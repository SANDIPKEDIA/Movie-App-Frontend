import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToasterMessages from "../../utils/toasterMessage";

const AddMoviesIntoList = ({ watchList, setWatchList, selectedMovie }) => {
  const [selectedWatchList, setselectedWatchList] = useState(null);


  const resetData = () =>{
    const closeModalDom = document.getElementById("add_movie_into_watchlist");
    if (closeModalDom) closeModalDom.click();
    setselectedWatchList(null)
  }
  useEffect(() => {
    if (watchList?.length > 0) {
      setselectedWatchList(watchList?.[0]?.name);
    }
  }, [watchList]);

  //******* ADD MOVIE INTO ANY(DYNAMIC) WATCHLIST ********/
  const addMoviesIntoWatchList = (movie, selectedWatchList) => {
    const updatedWatchList = watchList?.map((item) =>
      item.name === selectedWatchList
        ? { ...item, movies: [...item.movies, movie] }
        : item
    );
    setWatchList(updatedWatchList);
    toast.success(ToasterMessages.ADDWATCHLIST)
    resetData()
  };

  const handleAddMovie = (event) => {
    event.preventDefault();
    addMoviesIntoWatchList(selectedMovie, selectedWatchList);
  };

  return (
    <div
      className="modal fade"
      id="add_movie_into_watchlist"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <p
              className="modal-title h5 fw-bold main-text-primary"
              id="staticBackdropLabel"
            >
              Add Movie into Watchlist
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleAddMovie}>
            <div className="modal-body">
              {watchList?.length > 0 ? (
                <div className="mb-3">
                  {watchList?.map((item, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        checked={selectedWatchList === item?.name}
                        value={item?.name}
                        onChange={(e) => {
                          setselectedWatchList(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexRadioDefault${index}`}
                      >
                        {item?.name} ({item?.movies?.length})
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Please add a watchlist to add movie</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn main-btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMoviesIntoList;
