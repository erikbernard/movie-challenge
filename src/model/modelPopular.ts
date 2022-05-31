export type Movie = {
  poster_path: string;
  adult: boolean;
  video: boolean;
  backdrop_path: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  overview: string;
  popularity: number;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};