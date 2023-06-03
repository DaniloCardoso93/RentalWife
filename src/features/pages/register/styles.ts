import { Link } from "react-router-dom";
import styled from "styled-components";
import BgAuth from "../../../assets/waves.svg";

export const FormRegister = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RegisterStyled = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-image: linear-gradient(#5c088450, #5c088470, #5c088490),
    url(${BgAuth});
  background-repeat: no-repeat;
  background-position: bottom;
  animation: animatedBackground 10s linear infinite alternate-reverse;

  @keyframes animatedBackground {
    0% {
      background-size: cover;
      background-position: 0% 22%;
    }
    100% {
      background-size: cover;
      background-position: 100% 22%;
    }
  } ;
`;

export const CampPassword = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    right: 16px;
    top: 47px;
  }
`;

export const CampConfirmPassword = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    right: 16px;
    top: 47px;
  }
`;

export const CampTypeUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  label {
    font-weight: 700;
    font-size: 16px;
    color: var(--primary-color);
  }
`;

export const CampCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const LabelTypeUser = styled.label`
  font-weight: 700;
  font-size: 16px;
  color: var(--primary-color);
`;

export const CampChoiceJob = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  input[type="radio"] {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CampContractor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: inherit;
  height: 60px;
  border-radius: 8px;
  color: var(--black-color);
  background-color: var(--grey2-color);

  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;

export const CampCollaborator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  gap: 2rem;
  height: 60px;
  border-radius: 8px;
  color: var(--black-color);
  background-color: var(--grey2-color);

  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;

export const CampRedirectLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  padding: 1rem 0 2rem 0;
  text-align: center;

  p {
    color: #000;
  }
`;

export const SpanLogin = styled(Link)`
  text-decoration: underline;
  color: var(--primary-color);
`;
