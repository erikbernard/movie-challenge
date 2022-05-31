import { useState, useEffect } from "react";
import { Movie, Movies } from "../model/modelPopular";
import { GetMovieGenres } from "../services/endpoint";

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
export const useGenresFetch = () => {
  const [genre, setGenre] = useState(28);
  const [data, setData] = useState<Movies>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchApi = (page: number) => {
    setError(false);
    setLoading(true);

    GetMovieGenres(page, genre)
      .then((response) => {
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
        setError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    if (genre <= 0) {
      const sessionState: Movies = isPersistedState("StateGenre");
      if (sessionState) {
        setData(sessionState);
        return;
      }
    }
    console.log("Grabbing from API");

    fetchApi(1);
  }, [genre]);

  useEffect(() => {
    if (!loadingMore) return;
    fetchApi(data.page + 1);
    setLoadingMore(false);
  }, [loadingMore, genre, data.page]);

  useEffect(() => {
    if (data.page > 0) {
      sessionStorage.setItem("StateGenre", JSON.stringify(data));
    }
  }, [genre, data]);

  return {
    data,
    loading,
    error,
    genre,
    setGenre,
    setLoadingMore,
  };
};
