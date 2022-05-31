import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 100%;
`;

export const MovieInfo = styled.div`
  padding-bottom: 1.6rem;
  transition: padding 0.3s;
  strong {
    font-size: 1.6rem;
    display: block;
    font-weight: 500;
    margin-bottom: 0.7rem;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.text_input};
    span {
      display: inline-flex;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 600;
      svg {
        fill: ${(props) => props.theme.colors.text_input};
        margin-right: 0.5rem;
      }
      &:nth-child(2) {
        margin-left: 1.6rem;
        padding-left: 1.6rem;
        border-left: 2px solid ${(props) => props.theme.colors.text_input};
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
  max-width: 720px;
  max-height: 440px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 15px;
  animation: animateCard 0.5s;
  :hover {
    opacity: 1;
    color: ${(props) => props.theme.colors.focus};
  }

  @keyframes animateCard {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
