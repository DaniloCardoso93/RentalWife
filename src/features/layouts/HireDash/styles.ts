import styled from "styled-components";

interface IProps {
  filtred: string;
}

export const DashStyled = styled.main`
  display: flex;
  justify-content: space-between;
  height: 775px;

  @media (max-width: 975px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  #textNone {
    color: var(--grey3-color);
  }
`;

export const ProposalStyled = styled.section<IProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 975px) {
    width: 100%;
  }

  .HeaderProposes {
    display: flex;
    justify-content: space-between;

    @media (max-width: 450px) {
      flex-direction: column;
    }

    .BoxButtons {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      margin-top: 5px;

      > button {
        padding: 5px 10px;
        border-radius: 8px;
      }

      > button:nth-child(1) {
        background-color: ${(props) =>
          props.filtred === "Enviado" && "var(--primary-color)"};
        color: ${(props) =>
          props.filtred === "Enviado" && "var(--white-color)"};
      }

      > button:nth-child(2) {
        background-color: ${(props) =>
          props.filtred === "Em andamento" && "var(--primary-color)"};
        color: ${(props) =>
          props.filtred === "Em andamento" && "var(--white-color)"};
      }
    }
    & > h2 {
      font-size: 36px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.text};
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem;

    background-color: ${(props) => props.theme.colors.grey1};

    width: 460px;
    height: 700px;

    border-radius: 8px;

    overflow-y: overlay;

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

    & > li {
      display: flex;
      gap: 1rem;
      padding: 1rem;

      background-color: ${(props) => props.theme.colors.background};

      border-radius: 8px;

      height: 150px;
      min-width: 395px;

      position: relative;
      & > figure {
        & > img {
          width: 102px;
          height: 102px;
          border-radius: 50%;
        }
      }

      & > div {
        & > h3 {
          font-size: 16px;
          font-weight: bold;
          color: ${(props) => props.theme.colors.text};

          margin-bottom: 0.3rem;
        }
        & > p {
          font-size: 16px;
          font-weight: 400;
          color: ${(props) => props.theme.colors.span};
          height: 48%;
          overflow-y: overlay;

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
        }
      }
      & > button {
        position: absolute;
        bottom: 0.7rem;
        right: 1rem;

        background-color: var(--primary-color);
        color: var(--white-color);

        font-size: 16px;
        font-weight: bold;

        border: solid 2px var(--primary-color);
        border-radius: 8px;

        padding: 0.3rem 1rem;

        transition: 0.5s;

        &:hover {
          background-color: var(--white-color);
          color: var(--primary-color);
          transition: 0.5s;
        }
      }
    }

    @media (max-width: 975px) {
      flex-direction: row;
      height: fit-content;
      max-height: 215px;
      overflow-x: auto;
      width: 100%;
      border: 2px solid var(--grey1-color);
    }
  }
`;

export const FProposalStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 975px) {
    width: 100%;
  }

  & > h2 {
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem;

    background-color: ${(props) => props.theme.colors.grey1};

    width: 680px;
    height: 700px;

    border-radius: 8px;

    overflow-y: overlay;

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

    & > li {
      display: flex;
      gap: 1rem;
      padding: 1rem;

      background-color: ${(props) => props.theme.colors.background};

      border-radius: 8px;

      max-height: 330px;
      height: 200px;
      width: 100%;

      position: relative;

      @media (max-width: 975px) {
        flex-direction: column;
        overflow: auto;
        min-height: 250px;
        height: 285px;
        min-width: 250px;
      }
      & > figure {
        & > img {
          width: 102px;
          height: 102px;
          border-radius: 50%;
        }
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > h3 {
          font-size: 16px;
          font-weight: bold;
          color: ${(props) => props.theme.colors.text};
        }
        & > span {
          font-size: 16px;
          font-weight: 400;
          color: ${(props) => props.theme.colors.span};
          height: 40px;
          overflow-y: overlay;

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
        }
        & > p {
          font-size: 16px;
          font-weight: 400;
          color: ${(props) => props.theme.colors.span};
          height: 60%;
          overflow-y: overlay;

          @media (max-width: 970px) {
            max-height: 150px;
          }

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
        }
      }
    }
  }

  @media (max-width: 1200px) {
    & > ul {
      width: 460px;
    }
  }
  @media (max-width: 975px) {
    & > ul {
      flex-direction: row;
      width: 100%;
      height: 365px;
      overflow-x: scroll;
      border: 2px solid var(--grey1-color);
    }
  }
`;
