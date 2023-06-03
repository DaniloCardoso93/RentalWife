import { Header } from "../../layouts/Header";
import { Footer } from "../../layouts/Footer";
import { Avatar } from "@mui/material";
import { HireDash } from "../../layouts/HireDash";
import { Container } from "../../styles/container";
import { UserDropdown } from "../../../components/UserDropdown";
import { Transition } from "../../../components/Transition";
import { ContractDash } from "../../layouts/ContractDash";
import { Loading } from "../../../components/Loading";
import { UseRentalContext } from "../../../context/RentalContext";
import { useEffect } from "react";

export const Dashboard = () => {
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
          {user == null ? (
            <Loading />
          ) : user.is_hired ? (
            <HireDash />
          ) : (
            <ContractDash />
          )}
        </Container>
      </Transition>
      <Footer />
    </>
  );
};
