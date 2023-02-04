import { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import { apiPopular, getData } from "../../utils/axios";
import "./searchpage.css";
import Loader from "../../components/loader/Loader";
const SearchPage = () => {
  const [searchParam, setSearchParam] = useState("true");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setSearchParam(e.target.value);
    setIsLoading(true);
  };
  const handleSearch = async () => {
    setIsLoading(true);
    const data = await getData(searchParam);
    setMovies(data.results);
    setIsLoading(false);
  };

  const [movieData, setData] = useState([]);
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
    <div>
      <Navbar />
      <div className='search-div'>
        <label className='search-label'>
          <input
            type='text'
            className='input'
            placeholder='search movies'
            onChange={(e) => handleChange(e)}
          />
          <div className='search-text-div'>
            <button className='search-text' onClick={(e) => handleSearch()}>
              Search
            </button>
          </div>
        </label>

        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {error ? (
                <div className='error'>{"something went wrong ..."}</div>
              ) : (
                movieData && (
                  <div className='container'>
                    {movies.map((data) => (
                      <MovieCard data={data} />
                    ))}
                  </div>
                )
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default SearchPage;
