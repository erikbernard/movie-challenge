import { Grid } from "../components/Grid";
import { Loading } from "../components/Loading";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Search";
import { useMovieFetch } from "../hook/useMovieFetch";
import { Movie } from "../model/modelPopular";
import generateRandomKey from "../utils/generateRandomKey";

export function Home() {
  const { data, loading, setSearchNameMovie, setLoadingMore } = useMovieFetch();
  sessionStorage.setItem("DetailState", JSON.stringify({}));

  return (
    <>
      <Search setSearchNameMovie={setSearchNameMovie} />
      <Grid header={"Popular Movies 🎬"}>
        {data.results.map((movie: Movie) => (
          <MovieCard
            key={generateRandomKey(5)}
            image={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
            movieId={movie.id}
            title={movie.title}
            movieGenres={movie.genre_ids[0]}
            voteAverage={movie.vote_average}
          />
        ))}
      </Grid>
      <Loading
        key={generateRandomKey(5)}
        loadingMore={loading}
        setLoadingMore={setLoadingMore}
      />
    </>
  );
}
