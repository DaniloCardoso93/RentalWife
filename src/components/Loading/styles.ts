import styled from "styled-components";

export const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;

  width: 100%;
  height: 80vh;

  & > img {
    height: 200px;
  }

  @media (max-width: 422px) {
    & > img {
      height: 150px;
    }
  }
`;
