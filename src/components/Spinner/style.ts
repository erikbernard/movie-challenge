import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 0 0 0;
`;

export const Icon = styled.div`
  svg {
    color: ${(props) => props.theme.colors.primary};
    animation: loading 0.6s linear infinite;
    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
