import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import { apiPopular } from "../../utils/axios";
import "./homepage.css";
import Loader from "../../components/loader/Loader";
const Homepage = () => {
  const [movieData, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    apiPopular()
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
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          {" "}
          {window.alert(
            error === "Invalid API Key"
              ? "Please we are out "
              : " Network Error"
          )}
        </>
      ) : (
        <div className='movie-div'>
          {movieData?.map((info) => (
            <MovieCard data={info} />
          ))}
        </div>
      )}
      <div className='paginate-div'></div>
    </>
  );
};

export default Homepage;
