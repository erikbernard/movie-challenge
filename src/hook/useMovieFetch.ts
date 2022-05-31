import { useState, useEffect } from "react";
import { Movie, Movies } from "../model/modelPopular";
import { GetMoviePopular } from "../services/endpoint";

export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
};

export const useMovieFetch = () => {
  const [searchNameMovie, setSearchNameMovie] = useState("");
  const [data, setData] = useState<Movies>(initialState);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchApi = (page: number, searchNameMovie = "") => {
    setLoading(true);
    GetMoviePopular(page, searchNameMovie)
      .then((response) => {
        console.log("[log - useHomeFetch]", response);
        const movies = response.data;
        setData((prev) => ({
          ...movies,
          results:
            page > 1
              ? [...prev.results, ...movies.results]
              : [...movies.results],
        }));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setState(true);
  };

  useEffect(() => {
    if (searchNameMovie.length <= 0) {
      const sessionState: Movies = isPersistedState("StateMovie");
      if (sessionState) {
        setData(sessionState);
        return;
      }
    }
    fetchApi(1, searchNameMovie);
  }, [searchNameMovie]);

  useEffect(() => {
    if (!loadingMore) return;

    fetchApi(data.page + 1, searchNameMovie);
    setLoadingMore(false);
  }, [loadingMore, searchNameMovie, data.page]);

  useEffect(() => {
    if (state && !searchNameMovie) {
      sessionStorage.setItem("StateMovie", JSON.stringify(data));
      setState(false);
    }
  }, [data]);

  return {
    data,
    loading,
    searchNameMovie,
    setSearchNameMovie,
    setLoadingMore,
  };
};
