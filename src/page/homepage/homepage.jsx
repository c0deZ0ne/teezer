import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import { apiPopular } from "../../utils/axios";
import "./homepage.css";
const Homepage = () => {
  const [movieData, setData] = useState([]);
  useEffect(() => {
    apiPopular().then((data) => {
      console.log(data);
      setData(data.items);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="movie-div">
        {movieData?.map((info) => (
          <MovieCard data={info} />
        ))}
      </div>

      <div className="paginate-div"></div>
    </>
  );
};

export default Homepage;
