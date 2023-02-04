import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import TvSeriesCategory from "../../components/tvSeriescategory/tvSeriescategory";
import { fetchData, getSeries } from "../../utils/axios";
import Loader from "../../components/loader/Loader";
const TvSeries = () => {
  const [movieData, setData] = useState([]);
  const handleRequest = async (resuest) => {
    console.log(resuest);
    const data = await getSeries(resuest);
    setData(data.results);
    console.log(data);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchData("API/Top250TVs")
      .then((data) => {
        const { errorMessage, items } = data;
        errorMessage ? setError(errorMessage) : setData(items);
        setIsLoading(false);
      })
      .catch((err) => {
        const { errorMessage } = err;
        setError(errorMessage);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <TvSeriesCategory handleRequest={handleRequest} />
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
    </>
  );
};

export default TvSeries;
