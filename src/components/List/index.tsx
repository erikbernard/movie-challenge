import { GenresListValue } from "../../utils/constant";
import { Container, ListContent, ListItem } from "./style";

type Props = {
  children: JSX.Element | any;
  handleSelected(value: number): void;
};

export function List({ children, handleSelected }: Props) {
  return (
    <Container>
      <div>
        <ListContent>
          {GenresListValue.map((genre) => (
            <ListItem
              type="button"
              onClick={() => handleSelected(genre.id)}
              key={genre.id}
            >
              <span>{genre.name}</span>
            </ListItem>
          ))}
        </ListContent>
      </div>
      <div>{children}</div>
    </Container>
  );
}
