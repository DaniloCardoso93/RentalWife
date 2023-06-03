import * as yup from "yup";

export const FormSchemaRegister = yup.object({
  name: yup.string().required("Nome Obrigatório"),
  email: yup
    .string()
    .email("O campo precisa ter um Email")
    .required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Senha com no mínimo 8 caracteres.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Necessário ter letras, números e ao menos um símbolo"
    ),
  confirm_password: yup
    .string()
    .required("Confirme sua Senha")
    .oneOf([yup.ref("password")], "Senhas precisam ser iguais"),
  radioGroup: yup.boolean().required("Marque uma Opção"),
});

export const FormSchemaLogin = yup.object({
  email: yup
    .string()
    .email("O campo precisa ter um Email")
    .required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
