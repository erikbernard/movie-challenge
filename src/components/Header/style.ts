import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.background_header};
`;
export const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.border};

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.font};
    padding: 1.6rem;
    display: flex;
    align-items: center;
    :hover {
      background-color: ${(props) => props.theme.colors.houver};
      color: ${(props) => props.theme.colors.font_border};
      border: 1px solid ${(props) => props.theme.colors.primary};
    }
  }
  section {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
export const HighContrast = styled.div`
  border: 1px solid ${(props) => props.theme.colors.icon};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.icon};
    vertical-align: top;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    svg {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
export const IconAccessibility = styled.div`
  border: 1px solid ${(props) => props.theme.colors.font};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  color: ${(props) => props.theme.colors.font};
  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.font};
    vertical-align: top;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    svg {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary};
    }
    border: 1px solid ${(props) => props.theme.colors.icon};
    color: ${(props) => props.theme.colors.primary};
  }
`;

