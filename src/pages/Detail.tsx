import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardDetail } from "../components/CardDetail";
import { Spinner } from "../components/Spinner";
import { useMovieDetailFetch } from "../hook/useMovieDetailFetch";

export function Detail() {
  const { state } = useLocation();
  const { data, setMovieId } = useMovieDetailFetch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMovieId(state as number);
    console.log(state);
  }, [state]);

  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <>
      {loading ? (
        <Spinner loading={loading}>
          <></>
        </Spinner>
      ) : (
        <CardDetail
          genres={data.genres}
          overview={data.overview}
          originaLanguage={data.original_language}
          releaseDate={data.release_date}
          runtime={data.runtime}
          originalTitle={data.original_title}
          budget={data.budget}
          posterPath={data.poster_path}
          title={data.title}
          voteAverage={data.vote_average}
          voteCount={data.vote_count}
          revenue={data.revenue}
        ></CardDetail>
      )}
    </>
  );
}