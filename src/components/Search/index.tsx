import { ChangeEvent } from "react";
import { Content, Container } from "./style";

type Props = {
  setSearchNameMovie(search: string): void;
};

export function Search({ setSearchNameMovie }: Props) {
  function handleSearchMovie(e: ChangeEvent<HTMLInputElement>) {
    setSearchNameMovie(e.target.value);
  }

  return (
    <Container>
      <Content>
        <input
          type="text"
          placeholder="Buscar Filme 🔎"
          onChange={handleSearchMovie}
        />
      </Content>
    </Container>
  );
}
