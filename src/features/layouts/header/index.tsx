import * as S from "./styles";
import logo from "/src/assets/logoWhite.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { IChildren } from "../../interfaces/children";
import { json, Link } from "react-router-dom";
import { UseUserContext } from "../../../context/UserContext";
import { useTheme } from "styled-components";
import { useEffect } from "react";
import dark from "../../styles/theme/dark";
import light from "../../styles/theme/light";

export const Header = ({ children }: IChildren) => {
  const [isOn, setIsOn] = useState(false);
  const theme = useTheme();
  const { toggleTheme, setTheme } = UseUserContext();

  const themeVerify = () => {
    const localTheme = localStorage.getItem("@rentalTheme");

    if (theme.title === "dark" || localTheme === "light") {
      setIsOn(true);
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };
  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleTheme();
  };

  useEffect(() => {
    themeVerify();
  }, []);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <S.StyledHeader>
      <S.Container>
        <Link to="/dashboard">
          <img src={logo} alt="Logo" />
        </Link>
        <S.DivSecundaria>
          <motion.div
            className="switch"
            data-ison={isOn}
            onClick={toggleSwitch}
          >
            <motion.div className="handle" layout transition={spring} />
          </motion.div>
          {children}
        </S.DivSecundaria>
      </S.Container>
    </S.StyledHeader>
  );
};
