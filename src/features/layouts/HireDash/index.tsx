import * as S from "./styles";
import { useEffect, useState } from "react";
import { Loading } from "../../../components/Loading";
import { api } from "../../services/axios";
import { UseRentalContext } from "../../../context/RentalContext";
import { IProposals } from "../../interfaces/context";
import { ModalProposeA } from "../ModalProposeA";

export const HireDash = () => {
  const { idUser, tokenUser } = UseRentalContext();
  const [proposals, setProposals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectProposal, setSelectProposal] = useState<IProposals>(
    {} as IProposals
  );
  const [filtred, setFiltred] = useState<string>("Enviado");

  const filterProposals = (status: string) => {
    const filter = proposals.filter(
      (elem: IProposals) => elem.is_active == status
    );
    return filter;
  };

  const getMyProposals = async () => {
    try {
      api.defaults.headers.common.authorization = `Bearer ${tokenUser}`;
      const { data } = await api.get(`/proposals?userId=${idUser}`);
      setProposals(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMyProposals();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <S.DashStyled>
        <S.ProposalStyled filtred={filtred}>
          <div className="HeaderProposes">
            <h2>Propostas</h2>
            <div className="BoxButtons">
              <button onClick={() => setFiltred("Enviado")}>Recebidas</button>
              <button onClick={() => setFiltred("Em andamento")}>
                Aceitas
              </button>
            </div>
          </div>
          <ul>
            {filterProposals(filtred).length !== 0 ? (
              filterProposals(filtred).map((elem: any, index: number) => (
                <li key={index}>
                  <figure>
                    <img src={elem.user.avatar_img} alt={elem.user.username} />
                  </figure>
                  <div>
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowModal(!showModal);
                      setSelectProposal(elem);
                    }}
                  >
                    {filtred === "Em andamento" ? "Ver" : "Analisar"}
                  </button>
                </li>
              ))
            ) : (
              <h2 id="textNone">
                {filtred === "Em andamento"
                  ? "Sem propostas recebidas"
                  : "Sem propostas aceitas"}
              </h2>
            )}
          </ul>
        </S.ProposalStyled>
        <S.FProposalStyled>
          <h2>Trabalhos finalizados</h2>
          <ul>
            {filterProposals("Concluido").length !== 0 ? (
              filterProposals("Concluido").map((elem: any, index: number) => (
                <li key={index}>
                  <figure>
                    <img src={elem.user.avatar_img} alt={elem.user.username} />
                  </figure>
                  <div>
                    <h3>{elem.title}</h3>
                    <span>{elem.description}</span>
                    <h3>Recomendação:</h3>
                    <p>{elem.recomendation}</p>
                  </div>
                </li>
              ))
            ) : (
              <h2 id="textNone">Sem recomendações</h2>
            )}
          </ul>
        </S.FProposalStyled>
        {showModal && (
          <ModalProposeA
            setShowModal={setShowModal}
            showModal={showModal}
            selectProposal={selectProposal}
            getMyProposals={getMyProposals}
          />
        )}
      </S.DashStyled>
    );
  }
};
