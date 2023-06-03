import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Buttons";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <S.BgStyled>
      <S.LogoStyled />
      <S.DivInfos>
        <S.TitleLandingStyled>
          Você está precisando realizar serviços de manutenção em casa?
        </S.TitleLandingStyled>

        <S.PLandingStyled>
          Entre já no nosso site e resolva todos os seus problemas!
        </S.PLandingStyled>

        <S.DivButtonsLandingStyled>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            variant="quaternary"
            type="button"
          >
            Quero conhecer
          </Button>

          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="quaternary"
            type="button"
          >
            Fazer login
          </Button>
        </S.DivButtonsLandingStyled>
      </S.DivInfos>
    </S.BgStyled>
  );
};
