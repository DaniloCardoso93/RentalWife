import { H2Styled } from "./styles";
import { GiThink } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";

export const NoWorkers = () => (
  <>
    <H2Styled>
      Desculpe, não encontramos nenhum resultado
      <GiThink />
    </H2Styled>
  </>
);
