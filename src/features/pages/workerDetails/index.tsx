import { Avatar } from "@mui/material";
import { useEffect } from "react";
import { Transition } from "../../../components/Transition";
import { UserDropdown } from "../../../components/UserDropdown";
import { UseRentalContext } from "../../../context/RentalContext";
import { ContractHireP } from "../../layouts/ContractHireP";
import { Footer } from "../../layouts/Footer";
import { Header } from "../../layouts/Header";

export const HiredDetails = () => {
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
        <ContractHireP />
      </Transition>
      <Footer></Footer>
    </>
  );
};
