import styled from "styled-components";

export const StyledDash = styled.div`
  width: 100%;
  margin: 0 auto;

  .topMenu {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    span,
    label,
    textarea {
      font-family: "Inter", sans-serif;
      ::placeholder {
        font-family: "Inter", sans-serif;
      }
    }

    .MuiFormLabel-root {
      color: var(--primary-color);
    }

    h2 {
      color: ${(props) => props.theme.colors.text};
      transition: 0.5s;
    }

    @media (min-width: 460px) {
      margin: 2rem 0;
      justify-content: space-between;
      flex-direction: row;
    }

    .filterWorker {
      display: flex;
      justify-content: space-evenly;
      gap: 1rem;
    }

    .MuiAutocomplete-root {
      background-color: ${(props) => props.theme.colors.grey1};
      transition: 0.5s;
    }

    .MuiFormLabel-root {
      color: ${(props) => props.theme.colors.span};
    }

    #workerLocation {
      margin-left: 1rem;
    }
  }

  ul {
    background-color: ${(props) => props.theme.colors.grey1};
    transition: 0.5s;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    height: 755px;
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

    li {
      padding: 1rem;
      width: 100%;
      border-radius: 8px;
      background-color: ${(props) => props.theme.colors.background};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.4rem;
      height: max-content;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      transition: 0.5s;
      color: ${(props) => props.theme.colors.span};

      :hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
        transition: 0.5s;
      }

      h2 {
        text-align: center;
        max-width: 14rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 30px;
      }

      p {
        text-align: center;
        max-width: 14rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 40px;
      }
    }
  }

  @media (min-width: 460px) {
    ul {
      width: 100%;
      li {
        width: 16rem;
      }
    }
  }
`;
