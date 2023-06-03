import * as yup from "yup";

export const CProfileSchema = yup.object({
  name: yup.string().required("O campo de nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo de email é obrigatório"),
  contact: yup.string().required("O campo de contato é obrigatório"),
  gender: yup.string().required("O campo de gênero é obrigatório"),
  location: yup.string().required("O campo de localidade é obrigatório"),
  avatar_img: yup.string().url("O campo imagem deve ser uma URL"),
});

export const HireProfileSchema = yup.object({
  name: yup.string().required("O campo de nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo de email é obrigatório"),
  contact: yup.string().required("O campo de contato é obrigatório"),
  gender: yup.string().required("O campo de gênero é obrigatório"),
  location: yup.string().required("O campo de localidade é obrigatório"),
  description: yup.string().required("O campo de descrição é obrigatório"),
  avatar_img: yup.string().url("O campo imagem deve ser uma URL"),
});

export const ModalProfileHireSchema = yup.object({
  title: yup.string().required("O campo de nome é obrigatório"),
  description: yup.string().required("O campo de descrição é obrigatório"),
});

export const formYup = yup.object().shape({
  description: yup.string().required("Por favor, avalie nossa colaboradora!"),
});
