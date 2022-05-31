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

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem;
  background: transparent;
  text-align: center;
  color: ${(props) => props.theme.colors.border};
  transition: 0.4s;
  font-size: 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  :hover {
    color: ${(props) => props.theme.colors.focus};
    border: 2px solid ${(props) => props.theme.colors.focus};
    font-size: 2rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
