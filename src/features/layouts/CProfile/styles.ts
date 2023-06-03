import styled from "styled-components";

export const CProfileStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  background-color: var(--grey1-color);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 2rem;

  border-radius: 8px;

  input,
  span,
  label,
  textarea {
    font-family: "Inter", sans-serif;
    ::placeholder {
      font-family: "Inter", sans-serif;
    }
  }

  & > div {
    & > img {
      width: 272px;
      height: 272px;
      border-radius: 50%;
    }
  }

  & > form {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    position: relative;
    padding-bottom: 3rem;

    p {
      font-size: 12px;
      font-weight: bold;

      color: var(--primary-color);
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & > section {
        margin-top: 2rem;
        & > h2 {
          font-size: 16px;
          font-weight: bold;

          color: var(--primary-color);
        }
      }
    }
    & > button {
      position: absolute;
      bottom: -16px;
      right: 16px;
    }
  }

  .checkSec {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .checkLocale {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 910px) {
    & > form {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
