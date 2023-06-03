import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren } from "../../features/interfaces/children";
import { IHiredProfile } from "../../features/interfaces/profile";
import { api } from "../../features/services/axios";

interface IRentalContext {
  user: IHiredProfile | null;
  idUser: string | null;
  tokenUser: string | null;
  logout: () => void;
  getUser: () => Promise<void>;
}

export const RentalContext = createContext<IRentalContext>(
  {} as IRentalContext
);

export const RentalProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const idUser = localStorage.getItem("@rentalId");
  const tokenUser = localStorage.getItem("@rentalToken");
  const [user, setUser] = useState<IHiredProfile | null>(null);

  const getUser = async () => {
    try {
      const { data } = await api.get<IHiredProfile>(`/users/${idUser}`);
      setUser(data);
    } catch (error) {
      localStorage.removeItem("@rentalToken");
      localStorage.removeItem("@rentalId");
      navigate("/login");
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@rentalToken");
    localStorage.removeItem("@rentalId");
    navigate("/login");
    setUser(null);
  };

  return (
    <RentalContext.Provider
      value={{ user, idUser, tokenUser, logout, getUser }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export const UseRentalContext = () => useContext(RentalContext);
