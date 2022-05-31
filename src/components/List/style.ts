import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 200px calc(100% - 25rem);
  gap: 0 1rem;
  @media screen and (max-width: 580px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ListContent = styled.div`
  border-left: 2px solid ${(props) => props.theme.colors.border};
  padding: 0 0 0 5px;
  margin: 4rem 0 0 1rem;
`;

export const ListItem = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  border: none;
  text-align: left;
  color: ${(props) => props.theme.colors.border};
  transition: 0.4s;
  font-size: 1.6rem;

  :hover {
    color: ${(props) => props.theme.colors.focus};
    border-right: 2px solid ${(props) => props.theme.colors.focus};
    border-bottom: 2px solid ${(props) => props.theme.colors.focus};
    border-radius: 0 0 15px 0;
    font-size: 3rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
