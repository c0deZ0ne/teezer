import axios from "axios";
import { useCallback } from "react";

const apiKey = "k_7hy954ha";
const baseURL = `https://imdb-api.com/en`;
const config = {
  headers: {
    Authorization: `Bearer ${""}`,
    "Content-Type": "application/json",
  },
};

// export const searchAll = async (searchParam) => {
//   try {
//     const res = await axios.get(
//       `${baseURL}/API/SearchTitle/${apiKey}/${searchParam}`,
//       config
//     );
//     console.log(res);
//     return res.data;
//   } catch (error) {
//     return error.message;
//   }
// };

export const useSearch = (url) => {
  console.log(url);
  const data = useCallback(() => {
    try {
      axios.get(`${baseURL}/${url}/${apiKey}`).then((res) => {
        localStorage.setItem("series", JSON.stringify(res.data.items));
        // console.log(res);
        return res.data;
      });
    } catch (error) {
      return error.message;
    }
  }, [url]);

  return data
};

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
    console.log(res);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchData = async (url) => {
  try {
    const res = await axios.get(`${baseURL}/${url}/${apiKey}`);
    localStorage.setItem("series", JSON.stringify(res.data.items));
    console.log(res);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getSeries = async (url) => {
  try {
    const res = await axios.get(`${baseURL}/API/SearchSeries/${apiKey}/${url}`);
    // localStorage.setItem('series',JSON.stringify(res.data.items))
    console.log(res);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
