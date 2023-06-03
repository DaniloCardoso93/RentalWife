import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 100px;
  background: rgb(71, 73, 74);
  background-image: linear-gradient(to bottom, #232526, #414345);
  overflow: hidden;

  .colaborators {
    margin-top: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 400px;

    @media (max-width: 730px) {
      width: 100%;
    }
  }

  .animatedFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;
    width: 100%;

    @media (max-width: 730px) {
      flex-direction: column;
    }
  }

  .logo {
    width: 250px;
    height: 200px;

    @media (max-width: 730px) {
      display: none;
    }
  }
  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .lists {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    @media (max-width: 380px) {
      flex-direction: column;
      gap: 0;

      ul {
        height: 90%;
      }
    }
  }

  .secondList {
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a,
  span,
  h3 {
    color: var(--white-color);
  }

  h3 {
    font-weight: bold;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.1rem;
    width: 100%;
  }

  li {
    text-align: center;
    width: 100%;
    display: flex;
    gap: 0.3rem;
    justify-content: flex-start;
    align-items: center;
  }

  li span {
    width: 100%;
  }
`;
