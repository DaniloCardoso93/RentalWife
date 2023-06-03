import { Link } from "react-router-dom";
import styled from "styled-components";
import BgAuth from "../../../assets/waves.svg";

export const LoginStyled = styled.div`
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
  animation: animatedBackground 10s linear infinite alternate;

  @keyframes animatedBackground {
    from {
      background-size: cover;
      background-position: 0% 22%;
    }
    to {
      background-size: cover;
      background-position: 100% 22%;
    }
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1.5rem;
`;

export const CampRedirectRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  padding: 0 0 2rem;
  text-align: center;

  p {
    color: #000;
  }
`;

export const SpanRegister = styled(Link)`
  text-decoration: underline;
  color: var(--primary-color);
`;
