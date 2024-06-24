import React, { useEffect, useState } from "react";
import MovieCards from "../../components/MovieCards/MovieCards";
import security from "../../global/security";
import axios from "axios";
import { addWatchList, startApiCall } from "../../global/globalFunctions";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    startApiCall(setErrorMessage, setLoader);

    const fetchMovies = async () => {
      let allMovies = [];
      let page = 1;
      const searchQuery = "Tom Cruise"; // Example search query

      try {
        // while (allMovies.length < 20) {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${searchQuery}&apikey=4f1ed473&page=${page}`
        );
        if (response.data.Search) {
          allMovies = [...allMovies, ...response.data.Search];
          page++;
        }
        //   else {
        //     break;
        //   }
        // }
        setMovies(allMovies.slice(0, 20));
      } catch (err) {
        setErrorMessage("There was an error fetching the movie data.");
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, []);

  const FuncaddWatchList = () => {
  let  list = {
      name: "A",
      about: "xuz",
      movies: [],
    };
    addWatchList(list);
  };

  return (
    <div>
      {movies?.map((movie) => {
        return <MovieCards movie={movie} />;
      })}
      <button onClick={FuncaddWatchList}>Add watch list</button>
    </div>
  );
};

export default Home;
