import { CProfile } from "../../layouts/CProfile";
import { HireProfile } from "../../layouts/HireProfile";
import { Header } from "../../layouts/header";
import { Avatar } from "@mui/material";
import { Container } from "../../styles/container";
import * as S from "./styles";
import { UserContext } from "../../../context/UserContext";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { IHiredProfile } from "../../interfaces/profile";
import { Loading } from "../../../components/Loading";
import { UserDropdown } from "../../../components/UserDropdown";

export const Profile = () => {
  const [user, setUser] = useState<IHiredProfile | null>(null);

  useEffect(() => {
    async function getUser() {
      const userId = localStorage.getItem("@rentalId");

      try {
        const { data } = await api.get<IHiredProfile>(`/users/${userId}`);

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  if (user == null) {
    return <Loading />;
  } else {
    return (
      <>
        <Header>
          <UserDropdown>
            <Avatar src={user?.avatar_img} />
          </UserDropdown>
        </Header>
        <Container>
          <S.H2Styled>Editar Perfil</S.H2Styled>
          {user.is_hired ? (
            <HireProfile user={user} />
          ) : (
            <CProfile user={user} />
          )}
        </Container>
      </>
    );
  }
};
