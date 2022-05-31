import { CgSpinnerTwoAlt } from "react-icons/cg";
import { Container, Icon } from "./style";
type Props = {
  loading: boolean;
  children: JSX.Element | any;
};

export function Spinner({ loading, children }: Props) {
  return (
    <Container>
      {loading ? (
        <Icon>
          <CgSpinnerTwoAlt size={50} />
        </Icon>
      ) : (
        <>{children}</>
      )}
    </Container>
  );
}
