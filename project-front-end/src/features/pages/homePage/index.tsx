import * as S from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Buttons";
import { Header } from "../../layouts/Header";
import { useEffect, useState } from "react";
import { ModalHome } from "../../layouts/ModalHome";
import { api } from "../../services/axios";
import { Footer } from "../../layouts/Footer";
import { Transition } from "../../../components/Transition";
import { IDataWorker } from "../../interfaces/layouts";
import { Autocomplete, Avatar, TextField } from "@mui/material";
import { NoWorkers } from "../../layouts/NoWorkers";
import { Container } from "../../styles/container";

export const HomePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [workerData, setWorkerData] = useState<IDataWorker[]>([]);
  const [fLocations, setFLocations] = useState<IDataWorker[]>([]);
  const [optServices, setOptServices] = useState("");
  const [optLocations, setOptLocations] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const getWorkers = async () => {
      try {
        const { data } = await api.get("/users?is_hired=true");
        setWorkerData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getWorkers();
  }, []);

  const createCard = (el: any) => (
    <li key={el.id}>
      <Avatar
        sx={{ width: 128, height: 128 }}
        src={el.avatar_img}
        alt={el.name}
      />

      <h2>{el.name}</h2>
      {el.description ? (
        <p>{el.description}</p>
      ) : (
        <p>Ainda não possui uma descricão</p>
      )}
      <Button
        type="button"
        variant="terciary"
        onClick={() => setIsModal(!isModal)}
      >
        Abrir
      </Button>
    </li>
  );

  const updatedFilteredList = (service: any, location: any) => {
    const updatedServices = service
      ? workerData.filter(
          (el) => el.services.some((elem) => elem === service) === true
        )
      : workerData;

    const updatedLocations = location
      ? updatedServices.filter((el) => el.location === location)
      : updatedServices;
    setFLocations(updatedLocations);
  };

  const allWorkers = workerData.map((el) => createCard(el));
  const filteredWorkers = fLocations.map((el) => createCard(el));

  const locationsWorkers = workerData
    .map((el) => el.location)
    .filter((elem) => elem !== undefined && elem !== "");
  const servicesWorkers = workerData
    .map((el) => el.services.join(" ").split(" "))
    .filter((elem) => elem !== undefined);

  const locations = Array.from(new Set(locationsWorkers));
  const services = Array.from(
    new Set(
      servicesWorkers
        .reduce((list, sub) => list.concat(sub), [])
        .filter((elem) => elem !== "")
    )
  );

  return (
    <>
      <Header>
        <Link to="/register">Cadastrar</Link>
      </Header>
      <Transition>
        <Container>
          <S.StyledHome>
            <div className="topMenu">
              <h2 className="homeTitle">
                Encontre aqui as opções mais seguras
              </h2>
              <div className="filterWorker">
                <Autocomplete
                  onChange={(event: any) => {
                    setOptServices(event.target.textContent);
                    updatedFilteredList(event.target.textContent, optLocations);
                    setIsFiltered(true);
                  }}
                  options={services}
                  sx={{ width: 180 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Tipo de serviço" />
                  )}
                />
                <Autocomplete
                  onChange={(event: any) => {
                    setOptLocations(event.target.textContent);
                    updatedFilteredList(optServices, event.target.textContent);
                    setIsFiltered(true);
                  }}
                  options={locations}
                  sx={{ width: 180 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Localização" />
                  )}
                />
              </div>
            </div>
            <ul>
              {!isFiltered ? (
                allWorkers
              ) : !fLocations.length ? (
                <NoWorkers />
              ) : (
                filteredWorkers
              )}
            </ul>
          </S.StyledHome>
        </Container>
      </Transition>
      <Footer></Footer>

      {isModal && <ModalHome isModal={isModal} setIsModal={setIsModal} />}
    </>
  );
};
