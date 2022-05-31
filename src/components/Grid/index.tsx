import { Wrapper, Content } from "./styles";

type Props = {
  header: string;
  children: JSX.Element | any;
};

export function Grid({ header = "", children }: Props) {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
}
