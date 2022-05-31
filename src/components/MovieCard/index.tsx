import { Container, Image, MovieInfo } from "./styles";
import { BsFillStarFill } from "react-icons/bs";
import { GenresListValue } from "../../utils/constant";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: string;
  movieGenres: number;
  movieId: number;
  voteAverage: number;
};

export function MovieCard({
  image,
  movieId,
  movieGenres,
  title,
  voteAverage,
}: Props) {
  return (
    <Link
      to={{
        pathname: "/detail",
        state: movieId,
      }}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <Container>
        <Image
          src={image.includes("null") ? "img_null.jpg" : image}
          alt={"capa do filme " + title}
        />
        <MovieInfo>
          <strong>{title}</strong>
          <div>
            <span>
              <BsFillStarFill size={20} />
              {voteAverage}
            </span>
            <span>
              {GenresListValue.map((genre) => {
                if (genre.id === movieGenres) {
                  return genre.name;
                }
              })}
            </span>
          </div>
        </MovieInfo>
      </Container>
    </Link>
  );
}
