import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: -webkit-fill-available;
  margin: 20px;
  background: ${(props) => props.theme.colors.background_card};
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.border};

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Body = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: -webkit-fill-available;
`;
export const IconStar = styled.div`
  flex-direction: column;
  text-align: center;
  display: flex;
  div {
    font-size: 2rem;
  }
`;

export const IconBack = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.text_input};
  font-size: 1.2rem;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text_input};
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  text-align: -webkit-left;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text_input};
  span {
    padding: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 200;
    color: ${(props) => props.theme.colors.text_input};
    display: flex;
  }
`;

export const Description = styled.div`
  text-align: justify;
  color: ${(props) => props.theme.colors.text_input};
  h1 {
    color: ${(props) => props.theme.colors.text_input};
    font-size: 1.6rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
  max-width: 400px;
  max-height: max-content;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 15px;
`;
