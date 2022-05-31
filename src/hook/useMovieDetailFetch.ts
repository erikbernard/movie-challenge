import { useState, useEffect } from "react";
import { Detail } from "../model/modelDetail";
import { GetMovieDetail } from "../services/endpoint";

export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

export const useMovieDetailFetch = () => {
  const [movieId, setMovieId] = useState(0);
  const [data, setData] = useState<Detail>({} as Detail);

  const fetchApi = () => {
    if (movieId === 0 || movieId === undefined) return;
    GetMovieDetail(movieId)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [movieId]);

  useEffect(() => {
    const sessionState: Detail = isPersistedState("DetailState");
    if (sessionState.id) {
      setData(sessionState);
      return;
    }
  }, [data]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("DetailState", JSON.stringify(data));
  }, [movieId, data]);

  return { data, setMovieId };
};
