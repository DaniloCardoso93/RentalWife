import * as S from "./styles";
import { HTMLInputTypeAttribute, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "../../../components/Inputs/index";
import { Button } from "../../../components/Buttons/index";
import { FormStructure } from "../../layouts/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaLogin } from "../../validations/Auth";
import { StatePassword } from "../register";
import { CampPassword } from "./../register/styles";
import { IRegister } from "../../interfaces/auth";
import { UseUserContext } from "../../../context/UserContext";
import { Transition } from "../../../components/Transition";

export const Login = () => {
  const [typeInput, setTypeInput] =
    useState<HTMLInputTypeAttribute>("password");
  const [passwordIconStatus, setPasswordIconStatus] =
    useState<StatePassword>(false);
  const { loginUser } = UseUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(FormSchemaLogin),
  });
  const toogleIconPassword = () => {
    setPasswordIconStatus((value) => !value);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  return (
    <S.LoginStyled>
      <Transition>
        <FormStructure title={"Faça seu Login"} maxWidth={450}>
          <S.FormLogin onSubmit={handleSubmit(loginUser)}>
            <Input
              name={"email"}
              label={"Email"}
              type="text"
              placeholder="Insira seu email aqui"
              register={register}
              error={errors.email}
            />
            <CampPassword>
              <Input
                name={"password"}
                label={"Senha"}
                type={typeInput}
                placeholder="Insira sua senha aqui"
                register={register}
                error={errors.password}
              />
              {passwordIconStatus ? (
                <AiOutlineEye onClick={toogleIconPassword} />
              ) : (
                <AiOutlineEyeInvisible onClick={toogleIconPassword} />
              )}
            </CampPassword>
            <Button type="submit" variant="primary">
              Entrar
            </Button>
          </S.FormLogin>
          <S.CampRedirectRegister>
            <p>
              Ainda não possui conta?{" "}
              <S.SpanRegister to="/register">
                Faça registro aqui.
              </S.SpanRegister>
            </p>
          </S.CampRedirectRegister>
        </FormStructure>
      </Transition>
    </S.LoginStyled>
  );
};
