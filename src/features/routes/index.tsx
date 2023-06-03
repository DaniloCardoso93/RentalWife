import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import { RentalProvider } from "../../context/RentalContext";
import { UserProvider } from "../../context/UserContext";
import { ContractorProposals } from "../pages/contractorProposals";
import { Dashboard } from "../pages/dashboard";
import { HomePage } from "../pages/homePage";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { Register } from "../pages/register";
import { HiredDetails } from "../pages/workerDetails";
// import { ProtectedRoutes } from "./protected";

interface IProps {
  toggleTheme(): void;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export const RoutesMain = ({ toggleTheme, setTheme }: IProps) => {
  const location = useLocation();

  return (
    <>
      <UserProvider toggleTheme={toggleTheme} setTheme={setTheme}>
        <RentalProvider>
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route
                path="/dashboard/contractorproposals"
                element={<ContractorProposals />}
              ></Route>
              <Route
                path="/dashboard/hiredetails"
                element={<HiredDetails />}
              ></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </AnimatePresence>
        </RentalProvider>
      </UserProvider>
    </>
  );
};
