import React, { useState } from "react";
import { toast } from "react-toastify";
import ToasterMessages from "../../utils/toasterMessage";

const AddWatchListModal = ({ watchList, setWatchList }) => {
  const [watchListData, setwatchListData] = useState({
    name: "",
    about: "",
    movies: [],
  });

  const resetData = () =>{
    const closeModalDom = document.getElementById("add_movie");
    if (closeModalDom) closeModalDom.click();
    setwatchListData({
        name: "",
        about: "",
        movies: [],
    })
  }
  //   //******* ADD  WATCH LIST WITH DUPLICACY CHECKED (NAME)********/
  const addWatchList = (watchListValue) => {
    const existingWatchList = watchList || [];
    const isDuplicate = existingWatchList.some(
      (item) => item.name === watchListValue.name
    );
    if (isDuplicate) {
      toast.error(ToasterMessages.WATCHLISTEXISTS);
    } else {
      const updatedWatchList = [...existingWatchList, watchListValue];
      setWatchList(updatedWatchList);
      toast.success(ToasterMessages.ADDWATCHLIST)
      resetData()
    }
  };

  const handleAddWatchList = (e) => {
    e.preventDefault();
    addWatchList(watchListData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setwatchListData({
      ...watchListData,
      [name]: value,
    });
  };

  return (
    <div
      className="modal fade"
      id="add_movie"
    //   data-bs-backdrop="static"
    //   data-bs-keyboard="false"
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
              Add Watchlist
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleAddWatchList}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="watchlist_name" className="form-label">
                  Watchlist Name
                </label>
                <input
                  type="text"
                  minLength={3}
                  maxLength={20}
                  className="form-control"
                  id="watchlist_name"
                  required
                  name="name"
                  value={watchListData.name}
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="watchlist_desc" className="form-label">
                  About Watchlist
                </label>
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  value={watchListData.about}
                  id="watchlist_desc"
                  minLength={4}
                  name="about"
                  maxLength={50}
                  placeholder="Tell us something about your watchlist"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
               onClick={resetData}
              >
                Discard
              </button>
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

export default AddWatchListModal;
