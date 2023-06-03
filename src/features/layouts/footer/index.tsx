import { Avatar } from "@mui/material";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FooterContainer } from "./styles";
import logoFooter from "../../../assets/logoWhite.svg";
import { IEquip } from "../../interfaces/layouts";

export const Footer = () => {
  const EquipProject: Array<IEquip> = [
    {
      id: 1,
      nome: "Mário",
      img: "https://avatars.githubusercontent.com/u/105565220?v=4",
      linkedin: "https://www.linkedin.com/in/mariolucass/",
      github: "https://github.com/mariolucass",
    },
    {
      id: 2,
      nome: "Danilo",
      img: "https://avatars.githubusercontent.com/u/30331948?v=4",
      linkedin: "https://www.linkedin.com/in/daniloacardoso/",
      github: "https://github.com/DaniloCardoso93",
    },
    {
      id: 3,
      nome: "Juliana",
      img: "https://avatars.githubusercontent.com/u/106631577?v=4",
      linkedin:
        "https://www.linkedin.com/in/juliana-tissiani-diorio-4b1553165/",
      github: "https://github.com/JulianaDiorio",
    },
    {
      id: 4,
      nome: "Juan",
      img: "https://avatars.githubusercontent.com/u/106753628?v=4",
      linkedin: "https://www.linkedin.com/in/juansgarbi/",
      github: "https://github.com/JuanSgarbi",
    },
    {
      id: 5,
      nome: "Alexson",
      img: "https://avatars.githubusercontent.com/u/105828867?v=4",
      linkedin: "https://www.linkedin.com/in/alexsonpereira",
      github: "https://github.com/AlexsonPereira",
    },
    {
      id: 6,
      nome: "Alfredo",
      img: "https://avatars.githubusercontent.com/u/101817225?v=4",
      linkedin: "https://www.linkedin.com/in/alfredopfneto/",
      github: "https://github.com/Alfredo-Fontinele",
    },
    {
      id: 7,
      nome: "Sidnei",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQEHcwFMQtcBoQ/profile-displayphoto-shrink_800_800/0/1517368765604?e=1673481600&v=beta&t=dVCDeP-WWDuYZf3kmRSO2lob1-bLerHUuVgGR-xoWoY",
      linkedin: "https://www.linkedin.com/in/sidnei-alves-20b547a5/",
      github: "https://github.com/dexter2k8/",
    },
  ];

  const listUsers = EquipProject.map((elem) => {
    return (
      <li key={elem.id}>
        <Avatar src={elem.img} />
        <span>{elem.nome}</span>
        <a href={elem.linkedin} target="_blank">
          <AiFillLinkedin size={25} />
        </a>
        <a href={elem.github} target="_blank">
          <AiFillGithub size={25} />
        </a>
      </li>
    );
  });

  return (
    <FooterContainer>
      <div className="animatedFooter">
        <div className="logo">
          <img src={logoFooter} alt="" />
        </div>
        <div className="colaborators">
          <h3>Colaboradores</h3>
          <div className="lists">
            <ul>
              {listUsers.filter((elem, index) => {
                return index < 4;
              })}
            </ul>
            <ul className="secondList">
              {listUsers.filter((elem, index) => {
                return index >= 4;
              })}
            </ul>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
