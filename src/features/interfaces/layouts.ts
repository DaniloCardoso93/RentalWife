import { IChildren } from "./children";
export interface IDataWorker {
  id: number;
  avatar_img: string;
  name: string;
  description: string;
  location: string;
  services: Array<string>;
}

export interface IHiredUser {
  name: string;
  email: string;
  services: [];
  avatar_img: string;
  description: string;
  location: string;
  id: number;
  is_active: string;
  user: {
    contractorId: number;
    contractorName: string;
    avatar_img: string;
  };
  recomendation: string;
}

export interface IEquip {
  id: number;
  nome: string;
  img: string;
  linkedin: string;
  github: string;
}

export interface IForm extends IChildren {
  title: string;
  maxWidth: number;
}

export interface ISendPropose {
  title: string;
  description: string;
  userId: number;
  is_active: string;
  user: {
    avatar_img: string;
    contractorName: string;
    contact: string;
    contractorId: number;
  };
}
