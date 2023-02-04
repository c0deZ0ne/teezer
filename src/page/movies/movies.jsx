import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import MoviesCategory from "../../components/moviesCategory/moviesCategory";
import { fetchData, getData } from "../../utils/axios";
import MovieCard from "../../components/movieCard/MovieCard";
import Loader from "../../components/loader/Loader";
import("./movies.css");

const Movies = () => {
  const [movieData, setMovieData] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleRequest = async (resuest) => {
    const data = await getData(resuest);
    setMovieData(data.results);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData("API/Top250Movies")
      .then((data) => {
        const { errorMessage, items } = data;
        errorMessage ? setError(errorMessage) : setMovieData(items);
        setIsLoading(false);
      })
      .catch((err) => {
        const { errorMessage } = err;
        setError(errorMessage);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <MoviesCategory handleRequest={handleRequest} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <div className='error'>{"something went wrong ..."}</div>
          ) : (
            movieData && (
              <div className='movie-div'>
                {movieData?.map((info) => (
                  <MovieCard data={info} />
                ))}
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
