import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: ${(props) => props.theme.colors.text_input};
    font-size: 1.5rem;
    padding: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.border};
    margin: 1rem 0;
    border-radius: 15px;
    animation: animateText 0.5s;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @keyframes animateText {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
