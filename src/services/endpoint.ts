import { http } from "./http";

const API_KEY = process.env.REACT_APP_API_KEY;
const LANGUAGE = "language=pt-BR";

export const GetMoviePopular = (page: number, searchNameMovie = "") => {
  const url =
    searchNameMovie.length > 0
      ? {
          endpoint: `/search/movie?api_key=${API_KEY}&${LANGUAGE}&query=${searchNameMovie}&page=${page}`,
        }
      : {
          endpoint: `/movie/popular?api_key=${API_KEY}&${LANGUAGE}&page=${page}`,
        };
  return http.get(url.endpoint);
};

export const GetMovieDetail = (movieID: number) => {
  const url = `/movie/${movieID}?api_key=${API_KEY}&${LANGUAGE}`;
  return http.get(url);
};

export const GetMovieGenres = (page: number, genre: number) => {
  const url = `/discover/movie?api_key=${API_KEY}&${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&page=${page}`;
  return http.get(url);
};
