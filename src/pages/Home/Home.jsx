import React, { useEffect, useState } from "react";
import MovieCards from "../../components/MovieCards/MovieCards";
import security from "../../global/security";
import axios from "axios";
import {
  startApiCall,
} from "../../global/globalFunctions";
import HomeHeader from "./HomeHeader";
import AddMoviesIntoList from "../../components/Watchlist/AddMoviesIntoList";
import RemoveMoviesFromList from "../../components/Watchlist/RemoveMoviesFromList";

const Home = ({ watchList, setWatchList,selectedWatchList,setSelectedWatchList }) => {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setselectedMovie] = useState(null);
    
  useEffect(() => {
    if (selectedWatchList?.movies) {
      setMovies(selectedWatchList?.movies);
    }
  }, [selectedWatchList]);

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
      <HomeHeader
        handleSearchInputChange={handleSearchInputChange}
        handleSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
        loader={loader}
        selectedWatchList={selectedWatchList}
      />
      {loader && <p>Searching Movies...</p>}
      <div className="d-flex flex-wrap gap-3">
        {movies?.map((mv, index) => (
          <MovieCards
          key={index}
            movie={mv}
            index={index}
            watchList={watchList}
            setWatchList={setWatchList}
            setselectedMovie={setselectedMovie}
          />
        ))}
        {movies?.length === 0 && !loader && <p>No Movies</p>}
        <AddMoviesIntoList
          selectedMovie={selectedMovie}
          watchList={watchList}
          setWatchList={setWatchList}
        />
        <RemoveMoviesFromList
          watchList={watchList}
          setWatchList={setWatchList}
          selectedMovie={selectedMovie}
          selectedWatchList={selectedWatchList}
          setSelectedWatchList={setSelectedWatchList}
        />
      </div>
    </div>
  );
};

export default Home;
