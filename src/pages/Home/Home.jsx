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

  //******* ADD  WATCH LIST WITH DUPLICACY CHECKED (NAME)********/
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
    }
  };

  //******* START FETCH MOVIES FROM SEARCH API OF OMDB********/
  const fetchMovies = async () => {
    startApiCall(setErrorMessage, setLoader);
    try {
      const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
          apikey: security.APPKEY,
          s: searchQuery,
        }
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



  const FuncaddWatchList = () => {
    let list = {
      name: "A",
      about: "xuz",
      movies: [],
    };
    addWatchList(list);
  };

  const removeWatchList = (watchListName) => {
    const updatedWatchList = watchList.filter(
      (watchListItem) => watchListItem.name !== watchListName
    );
    // Update the state with the new watch list
    setWatchList(updatedWatchList);
  };


  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
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
      </button>
    </div>
  );
};

export default Home;
