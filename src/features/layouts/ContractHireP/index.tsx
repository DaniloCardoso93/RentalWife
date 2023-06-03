import axios from "axios";
import { api } from "../../services/axios";
import { Button } from "../../../components/Buttons";
import { ModalProfileHire } from "../ModalProfileHire";
import { ProfileHireStyle, TitlePage } from "./styles";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ErrorToast } from "../../libs/toastify";
import { Avatar } from "@mui/material";
import { Container } from "../../styles/container";
import { IHiredUser } from "../../interfaces/layouts";
import { UseRentalContext } from "../../../context/RentalContext";
import { Transition } from "../../../components/Transition";
import { Loading } from "../../../components/Loading";

export const ContractHireP = () => {
  const { user } = UseRentalContext();
  const [hiredUser, setHiredUser] = useState<IHiredUser | null>(null);
  const [proposalsHired, setProposalsHired] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getHiredUser = async () => {
    const token = localStorage.getItem("@rentalToken");
    const id = localStorage.getItem("@rentalHireId");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/users/${id}`);
      setHiredUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  const getDoneProposalsUser = async () => {
    const token = localStorage.getItem("@rentalToken");
    const id = localStorage.getItem("@rentalHireId");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get(
        `/proposals?userId=${id}&is_active=Concluido`
      );
      setProposalsHired(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const erro = error.response?.data;
        ErrorToast(erro);
        if (erro === "jwt expired") {
          localStorage.removeItem("@rentalToken");
          localStorage.removeItem("@rentalId");
          navigate("/login");
        }
      }
    }
  };

  useEffect(() => {
    getDoneProposalsUser();
    getHiredUser();
  }, []);

  return (
    <>
      {hiredUser === null ? (
        <Transition>
          <Loading />
        </Transition>
      ) : (
        <>
          <Container>
            <TitlePage>Perfil da colaboradora</TitlePage>
            <ProfileHireStyle>
              <div className="HeaderContent">
                <div>
                  <Avatar
                    sx={{ width: 250, height: 250 }}
                    src={hiredUser.avatar_img}
                    alt={hiredUser.name}
                  />
                  <div>
                    <h3>{hiredUser.name}</h3>
                    <span>{hiredUser.location}</span>
                  </div>
                </div>
                <div>
                  <p>Competencias</p>
                  <ul>
                    {hiredUser.services.length ? (
                      hiredUser.services.map(
                        (element: string, index: number) => (
                          <li key={index}>
                            <span>{element}</span>
                          </li>
                        )
                      )
                    ) : (
                      <li>
                        <span>Não há competências</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="boxDescription">
                <p>Descrição</p>
                <div>
                  {hiredUser.description ? (
                    <p>{hiredUser.description}</p>
                  ) : (
                    <h2>Sem descrição</h2>
                  )}
                </div>
              </div>
              <div className="boxRatings">
                <p>Recomendações</p>
                <div>
                  <ul>
                    {proposalsHired.length ? (
                      proposalsHired.map(
                        (element: IHiredUser, index: number) => {
                          if (element.recomendation.length > 0) {
                            return (
                              <li key={index}>
                                <Avatar src={element.user.avatar_img} />
                                <h4>{element.user.contractorName}</h4>
                                <p>{element.recomendation}</p>
                              </li>
                            );
                          } else {
                            return (
                              <h2 key={0}>Não existe nenhuma recomendação</h2>
                            );
                          }
                        }
                      )
                    ) : (
                      <h2>Não existe nenhuma recomendação</h2>
                    )}
                  </ul>
                </div>
              </div>
              <div className="boxButton">
                <Link type="button" to={"/dashboard"}>
                  Voltar
                </Link>
                <Button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  type="button"
                  variant="terciary"
                >
                  Contratar
                </Button>
              </div>
            </ProfileHireStyle>
          </Container>
          {showModal === true && (
            <ModalProfileHire
              isModal={showModal}
              setIsModal={setShowModal}
              contractor={user}
              hired={hiredUser}
            />
          )}
        </>
      )}
    </>
  );
};
