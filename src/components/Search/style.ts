import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  text-align: end;
  border-radius: 15px;
  border-top: 2px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.border};

  input {
    font-size: 1.4rem;
    position: relative;
    margin: 2rem 0 0 0;
    padding: 0 0 0 6px;
    width: 30%;
    height: 3rem;
    min-width: max-content;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.border};
    color: ${(props) => props.theme.colors.text_input};
    :focus {
      border: 2px solid ${(props) => props.theme.colors.focus};
      outline: ${(props) => props.theme.colors.focus};
    }
  }
`;
