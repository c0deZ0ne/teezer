import { useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import { useSearch } from "../../utils/axios";
import "./searchpage.css";
import Loader from "../../components/loader/Loader";

const SearchPage = () => {
  const [searchParam, setSearchParam] = useState(null);

  const [url, setUrl] = useState(null);
  const { data, loading, error } = useSearch(url);
  const [searchType, setSearchType] = useState(loading);

  const handleChange = (e) => {
    setSearchParam(e.target.value);
    setSearchType(true);
  };
  const handleSearch = async () => {
    setUrl(searchParam);
    setSearchType(false);
  };

  console.log(data);

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
            <button
              className='search-text'
              onClick={(e) => handleSearch(searchParam)}
            >
              Search
            </button>
          </div>
        </label>

        <>
          {console.log(loading)}
          {searchType || loading ? (
            <Loader />
          ) : (
            <>
              {error ? (
                <div className='error'>{"something went wrong ..."}</div>
              ) : (
                data && (
                  <div className='container'>
                    {data.map((data) => (
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
