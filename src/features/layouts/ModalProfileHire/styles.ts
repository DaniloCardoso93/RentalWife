import styled from "styled-components";

export const ModalSendPropose = styled.div`
  background-color: var(--white-color);
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;

  > div {
    display: flex;
    justify-content: space-between;

    > h3 {
      color: var(--primary-color);
      font-size: 24px;
    }

    > button {
      width: 40px;
      height: 40px;
      border: 1px solid var(--primary-color);
      border-radius: 8px;

      background-color: transparent;
      color: var(--primary-color);
      font-weight: regular;
      font-size: 24px;
      transition: 1s;

      :hover {
        background-color: var(--primary-color);
        color: var(--white-color);
      }
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;

    > div {
      display: flex;
      flex-direction: column;
    }

    label {
      color: var(--primary-color);
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    textarea {
      background-color: var(--grey1-color);
      max-height: 150px;
      min-height: 150px;
      min-width: 100%;
      padding: 10px 10px;
      border-radius: 8px;
    }

    input {
      background-color: var(--grey1-color);
      height: 50px;
      padding: 10px 10px;
      border-radius: 8px;
    }

    button {
      font-size: 16px;
      height: 50px;
    }
  }
`;
