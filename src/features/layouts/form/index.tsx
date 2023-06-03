import * as S from "./styles";
import logo from "/src/assets/logoForm.svg";
import { IForm } from "../../interfaces/layouts";

export const FormStructure = ({ title, maxWidth, children }: IForm) => {
  return (
    <S.FormStyled maxWidth={maxWidth}>
      <S.FormTop>
        <S.ImgLogo>
          <img src={logo} alt="logo" />
        </S.ImgLogo>
        <h2>{title}</h2>
      </S.FormTop>
      {children}
    </S.FormStyled>
  );
};
