import { Link } from "react-router-dom";
import styled from "styled-components";

export const SecStyled = styled.section`
  width: 40rem;
  height: 20rem;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 4rem 2rem 2rem 2rem;
  position: relative;
  border-radius: 8px;

  @media (min-width: 460px) {
    padding-top: 6rem;
  }

  & > h2 {
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.4rem;
  }

  & > button {
    font-size: 1.2rem;
    font-weight: bold;
    width: 2.8rem;
    height: 2.8rem;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    color: var(--primary-color);
    background-color: var(--white-color);
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      color: var(--white-color);
      background-color: var(--primary-color);
    }
  }
`;

export const LinkStyled = styled(Link)`
  width: 250px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: 2px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transition: 0.5s;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }
`;
