import { Genre } from "../../model/modelDetail";
import { IMG_URL } from "../../utils/constant";
import { FiArrowLeft } from "react-icons/fi";
import {
  Container,
  Image,
  HeaderText,
  Description,
  IconBack,
  Label,
  IconStar,
  Body,
} from "./style";
import { Link } from "react-router-dom";
type Props = {
  posterPath: string;
  title: string;
  runtime: number;
  releaseDate: string;
  overview: string;
  originaLanguage: string;
  originalTitle: string;
  genres: Genre[];
  budget: number; //orçamento
  voteAverage: number;
  voteCount: number;
  revenue: number; //receita
};

export function CardDetail({
  title,
  originaLanguage,
  originalTitle,
  releaseDate,
  genres,
  budget,
  posterPath,
  runtime,
  voteAverage,
  voteCount,
  overview,
  revenue,
}: Props) {
  function formatReleaseDate(date: string): string {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }
  function formatGenre(genres: Genre[]): string {
    let text = "";
    for (const g of genres) {
      text = g.name + `, ${text}`;
    }
    return text;
  }

  function formatTime(time: number): string {
    const hours: number = Math.floor(time / 60);
    const mins: number = time % 60;
    return `${hours}h ${mins}m`;
  }

  function formatMoney(money: number): string {
    const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  }

  return (
    <>
      <Link to={"/"}>
        <IconBack>
          <FiArrowLeft size={40} />
          Voltar
        </IconBack>
      </Link>
      <Container>
        <Image src={IMG_URL + posterPath} alt={"capa do filme " + title} />
        <Body>
          <HeaderText>
            <div>
              <h1>{title}</h1>
              {formatReleaseDate(releaseDate)}
              {" ▫ " + formatGenre(genres)}
              {" ▫ " + formatTime(runtime)}
            </div>
            <IconStar>
              <div>⭐{voteAverage}</div>
              <span>{voteCount} Votos</span>
            </IconStar>
          </HeaderText>
          <Label>
            Título Original:<span>{" " + originalTitle}😲</span>
            Idioma Original:
            <span>{" " + originaLanguage.toLocaleUpperCase() + " 📣"}</span>
            Orçamento:<span>{" " + formatMoney(budget) + " 💵"}</span>
            Receita:<span>{" " + formatMoney(revenue) + "💵"}</span>
          </Label>
          <Description>
            <h1>Sinopse</h1>
            {overview}
          </Description>
        </Body>
      </Container>
    </>
  );
}
