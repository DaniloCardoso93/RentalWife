import styled, { css } from "styled-components";

const disCollum = css`
  display: flex;
  flex-direction: column;
`;

export const EditProfile = styled.div`
  width: 100%;
  background-color: var(--grey1-color);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 45px;
  position: relative;
  margin-bottom: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  input,
  span,
  label,
  textarea {
    font-family: "Inter", sans-serif;
    ::placeholder {
      font-family: "Inter", sans-serif;
    }
  }

  /* terciary */

  h3 {
    font-size: 16px;
    color: var(--primary-color);
  }

  p {
    color: var(--primary-color);
    font-size: 12px;
  }

  > form {
    display: grid;
    grid-template-areas:
      "A B"
      "A C";
    column-gap: 68px;
    align-items: center;
    justify-items: center;

    @media (max-width: 690px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
      gap: 1rem;
    }

    > button {
      position: absolute;
      right: 30px;
      bottom: 30px;

      @media (max-width: 690px) {
      }
    }

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      grid-area: A;
    }

    > div:nth-child(2) {
      height: fit-content;
      grid-area: B;
    }

    > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-area: C;
    }
  }

  .GroupCheck {
    display: flex;
    flex-direction: row;
  }

  .collum1 {
    ${disCollum}
  }

  .collum2 {
    ${disCollum}
  }

  ${disCollum}

  .BoxProfile {
    img {
      border-radius: 50%;
      width: 272px;
      height: 272px;
    }

    @media (max-width: 690px) {
      order: -1;
    }
  }
`;
