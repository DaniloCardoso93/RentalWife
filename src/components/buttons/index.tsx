import { IButton } from "../../features/interfaces/components";
import { ButtonStyled } from "./styles";

export const Button = ({ type, variant, children, onClick }: IButton) => {
  return (
    <ButtonStyled type={type} variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
