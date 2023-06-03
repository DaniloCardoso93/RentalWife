import * as S from "./styles";
import { ModalStyled } from "../../../components/Modal/styles";

export const ModalHome = ({ isModal, setIsModal }: any) => {
  return (
    <ModalStyled>
      <S.SecStyled>
        <button onClick={() => setIsModal(!isModal)}>X</button>
        <h2>
          Para acessar as informações detalhadas de nossas colaboradoras é
          necessário estar conectado à plataforma.
        </h2>
        <S.LinkStyled to="/register">Cadastrar</S.LinkStyled>
      </S.SecStyled>
    </ModalStyled>
  );
};
