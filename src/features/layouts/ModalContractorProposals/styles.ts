import styled from "styled-components";

export const FormRatingStyled = styled.form`
  background-color: var(--white-color);
  width: 100%;
  max-width: 550px;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  #closed {
    position: absolute;
    color: var(--primary-color);
    border-radius: 8px;
    padding: 5px;
    font-size: 30px;
    border: 1px solid var(--primary-color);
    top: 5px;
    right: 5px;
  }
  /* @media (max-width: 600px) {
        width: 90%;
        height: 60%;
    } */
`;

export const TitleRatingStyled = styled.label`
  padding-bottom: 0.8rem;
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextRatingStyled = styled.textarea`
  width: 100%;
  height: 8rem;
  overflow-y: overlay;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 14px;
  resize: none;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;

    :hover {
      background-color: var(--primary-color);
    }
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
