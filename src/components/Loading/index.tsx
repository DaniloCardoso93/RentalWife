import { LoadingStyled } from "./styles";
import logoForm from "../../assets/logoForm.svg";
import PropagateLoader from "react-spinners/PropagateLoader";

export const Loading = () => {
  return (
    <LoadingStyled>
      <img src={logoForm} alt="Logo Rantal Wife" />
      <PropagateLoader color="#5C0884" loading size={20} speedMultiplier={1} />
    </LoadingStyled>
  );
};
