import { Button, Container } from "./style";
import { Spinner } from "../Spinner";
type Props = {
  loadingMore: boolean;
  setLoadingMore(value: boolean): void;
};

export function Loading({ loadingMore, setLoadingMore }: Props) {
  return (
    <>
      <Container>
        <Spinner loading={loadingMore}>
          <Button onClick={() => setLoadingMore(true)}>Mais resultados</Button>
        </Spinner>
      </Container>
    </>
  );
}
