import React, { useEffect, useState } from "react";
import MovieCards from "../../components/MovieCards/MovieCards";
import security from "../../global/security";
import axios from "axios";
import {
  setWatchListToLocalStorage,
  startApiCall,
  viewMyWatchList,
} from "../../global/globalFunctions";
import { toast } from "react-toastify";
import ToasterMessages from "../../utils/toasterMessage";
import Page1 from "./Page1";
import Sidebar from "../../components/Sidebar/Sidebar";
import Page2 from "./Page2";
import ApiCallLoader from "../../components/Loaders/ApiCallLoader";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState(viewMyWatchList());
  const [searchQuery, setSearchQuery] = useState("");

  //******* FOR REALTIME GET WATCHLIST DATA FROM LOCALSTORAGE********/
  useEffect(() => {
    setWatchListToLocalStorage(watchList);
  }, [watchList]);

  //******* START FETCH MOVIES FROM SEARCH API OF OMDB********/
  const fetchMovies = async () => {
    startApiCall(setErrorMessage, setLoader);
    try {
      const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
          apikey: security.APPKEY,
          s: searchQuery,
        },
      });

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setLoader(false);
      } else {
        setErrorMessage(response.data.Error);
        setMovies([]);
        setLoader(false);
      }
    } catch (error) {
      setErrorMessage("Error fetching data");
      setMovies([]);
      setLoader(false);
    }
  };

  //******* SET SEARCH KEY********/
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //******* FECTH SERACH API SUBMISSION********/
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  return (
    <div className="d-flex flex-column gap-3 p-3">
      <div className="card main-border-primary w-100">
        <div className="card-body">
          <p className="h1 mb-4">
            Welcome to <span className="main-text-primary">Watchlist</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sed nemo cum quibusdam dolorem ad fugiat magnam iure assumenda vero
            ea molestiae quis saepe vitae sint consectetur, ipsa harum aut.
            Maiores et tempore dicta ullam quos dolore at id sapiente.
          </p>
        </div>
      </div>

      <form onSubmit={handleSearchSubmit}>
        <div className="input-group mb-3">
          <span
            className="input-group-text bg-white"
            id="main_form"
            style={{ borderRight: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
          <input
            className="form-control focus-none"
            style={{ borderLeft: "none" }}
            aria-describedby="main_form"
            placeholder="Search"
            type="search"
            value={searchQuery}
            required
            minLength={3}
            maxLength={12}
            onChange={handleSearchInputChange}
          />
          <button
          disabled={loader}

            type="submit"
            className="input-group-text main-btn-primary"
          >
            {loader?<ApiCallLoader />:"Search"}
          </button>
        </div>
      </form>
      <Page1 movies={movies} watchList={watchList} setWatchList={setWatchList} />

      {/* <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          value={searchQuery}
          required
          minLength={3}
          maxLength={12}
          onChange={handleSearchInputChange}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      {movies?.slice(0, 1)?.map((movie,index) => {
        return (
          <MovieCards
          key={index}
            movie={movie}
            watchList={watchList}
            setWatchList={setWatchList}
          />
        );
      })}
      <button onClick={FuncaddWatchList}>Add watch list</button>
      <button
        onClick={() => {
          removeWatchList("A");
        }}
      >
        Remove watch list
      </button> */}
    </div>
  );
};

export default Home;
