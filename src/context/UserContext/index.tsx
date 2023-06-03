import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthResponse,
  IDataUser,
  IRegister,
} from "../../features/interfaces/auth";
import { IChildren } from "../../features/interfaces/children";
import { api } from "../../features/services/axios";
import { toast } from "react-toastify";
import { IUserContext } from "../../features/interfaces/context";
import { DefaultTheme } from "styled-components";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface IProps extends IChildren {
  toggleTheme(): void;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export const UserProvider = ({ children, toggleTheme, setTheme }: IProps) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);

  const loginUser = async (dataUser: IRegister) => {
    try {
      const {
        data: {
          accessToken,
          user: { id },
        },
      }: IAuthResponse = await api.post("/login", dataUser);
      localStorage.setItem("@rentalToken", accessToken);
      localStorage.setItem("@rentalId", JSON.stringify(id));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado");
    }
  };

  const registerUser = async (dataUser: IDataUser) => {
    try {
      const {
        data: {
          accessToken,
          user: { id },
        },
      }: IAuthResponse = await api.post("/register", dataUser);
      localStorage.setItem("@rentalToken", accessToken);
      localStorage.setItem("@rentalId", JSON.stringify(id));
      navigate("/profile");
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado");
    }
  };

  const submitRegister = (data: IRegister) => {
    const { name, email, password, radioGroup } = data;
    const dataUser: IDataUser = {
      avatar_img: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
      name: name,
      email: email,
      password: password,
      is_hired: radioGroup === true ? false : true,
      services: [],
    };
    registerUser(dataUser);
  };

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <UserContext.Provider
      value={{
        submitRegister,
        loginUser,
        modal,
        openModal,
        update,
        setUpdate,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => useContext(UserContext);
