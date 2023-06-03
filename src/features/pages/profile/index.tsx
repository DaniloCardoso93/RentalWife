import * as S from "./styles";
import { CProfile } from "../../layouts/CProfile";
import { HireProfile } from "../../layouts/HireProfile";
import { Header } from "../../layouts/Header";
import { Avatar } from "@mui/material";
import { Container } from "../../styles/container";
import { Loading } from "../../../components/Loading";
import { UserDropdown } from "../../../components/UserDropdown";
import { Footer } from "../../layouts/Footer";
import { Transition } from "../../../components/Transition";
import { UseRentalContext } from "../../../context/RentalContext";
import { useEffect } from "react";

export const Profile = () => {
  const { user, getUser } = UseRentalContext();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header>
        <UserDropdown>
          <Avatar src={user?.avatar_img} />
        </UserDropdown>
      </Header>
      <Transition>
        <Container>
          <S.H2Styled>Editar Perfil</S.H2Styled>
          {user == null ? (
            <Loading />
          ) : user.is_hired ? (
            <HireProfile user={user} />
          ) : (
            <CProfile user={user} />
          )}
        </Container>
      </Transition>
      <Footer />
    </>
  );
};
