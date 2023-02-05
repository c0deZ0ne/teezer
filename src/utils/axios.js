import axios from "axios";
import { useState, useEffect, useCallback } from "react";
const apiKey = "k_0pq55gfz";
const baseURL = `https://imdb-api.com/en`;
const config = {
  headers: {
    Authorization: `Bearer ${""}`,
    "Content-Type": "application/json",
  },
};

export function useSearch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await axios.get(`${baseURL}/API/SearchAll/${apiKey}/${url}`);
      const { errorMessage, results } = res.data;
      console.log(results);
      if (errorMessage) {
        throw errorMessage;
      }
      setData(results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export const getData = async (expression) => {
  try {
    const res = await axios.get(
      `${baseURL}/API/SearchAll/${apiKey}/${expression}`,
      config
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getAllInfo = async (id) => {
  try {
    const res = await axios.get(
      `${baseURL}/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings`,
      config
    );
    console.log(res);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const apiPopular = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/API/MostPopularMovies/${apiKey}`);
    // console.log(res);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchData = async (url) => {
  try {
    const res = await axios.get(`${baseURL}/${url}/${apiKey}`);
    localStorage.setItem("series", JSON.stringify(res.data.items));
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getSeries = async (url) => {
  try {
    const res = await axios.get(`${baseURL}/API/SearchSeries/${apiKey}/${url}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
