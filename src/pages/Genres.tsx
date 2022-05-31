import { useEffect, useState } from "react";
import { Grid } from "../components/Grid";
import { List } from "../components/List";
import { Loading } from "../components/Loading";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Search";
import { useGenresFetch } from "../hook/useGenresFetch";
import { Movie } from "../model/modelPopular";
import generateRandomKey from "../utils/generateRandomKey";

export function Genres() {
  const { data, genre, loading, setLoadingMore, setGenre } = useGenresFetch();
  const [resultSearch, setsResultSearch] = useState<Movie[]>(data.results);

  function handleSelectedGenre(value: number) {
    setGenre(value);
  }
  function filterNameMovie(title: string) {
    if (title !== "") {
      const results = data.results.filter((s) => {
        return s.title.toLowerCase().startsWith(title.toLowerCase());
      });
      setsResultSearch(results);
    } else {
      setsResultSearch(data.results);
    }
  }

  useEffect(() => {
    setsResultSearch(data.results);
  }, [data]);

  return (
    <>
      <Search setSearchNameMovie={filterNameMovie} />
      <List key={generateRandomKey(5)} handleSelected={handleSelectedGenre}>
        <Grid key={generateRandomKey(5)} header="Gêneros">
          {resultSearch.map((movie: Movie) => (
            <MovieCard
              key={generateRandomKey(5)}
              image={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
              movieId={movie.id}
              title={movie.title}
              movieGenres={genre}
              voteAverage={movie.vote_average}
            />
          ))}
        </Grid>
      </List>
      <Loading
        key={generateRandomKey(5)}
        loadingMore={loading}
        setLoadingMore={setLoadingMore}
      />
    </>
  );
}
