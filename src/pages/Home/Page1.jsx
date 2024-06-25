import React from "react";
import MovieCards from "../../components/MovieCards/MovieCards";

const Page1 = ({ movies, watchList,setWatchList }) => {



  return (
    <div className="d-flex flex-wrap gap-3">
      {movies?.map((mv, index) => (
        <MovieCards movie={mv} index={index} 
        watchList={watchList}
        setWatchList={setWatchList}
        />
      ))}
    </div>
  );
};

export default Page1;
