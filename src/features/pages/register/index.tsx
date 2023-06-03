import * as S from "./styles";
import { HTMLInputTypeAttribute, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "../../../components/Inputs/index";
import { Button } from "../../../components/Buttons/index";
import { FormStructure } from "../../layouts/Form/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaRegister } from "../../validations/Auth";
import { useForm } from "react-hook-form";
import { IRegister } from "../../interfaces/auth";
import { UseUserContext } from "../../../context/UserContext";
import { Transition } from "../../../components/Transition";

export type StatePassword = boolean;
export type StateTypePassword = "password" | "text";

export const Register = () => {
  const [typeInput, setTypeInput] =
    useState<HTMLInputTypeAttribute>("password");
  const [passwordIconStatus, setPasswordIconStatus] =
    useState<StatePassword>(false);

  const { submitRegister } = UseUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(FormSchemaRegister),
  });

  const toogleIconPassword = () => {
    setPasswordIconStatus((value) => !value);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  return (
    <>
      <S.RegisterStyled>
        <Transition>
          <FormStructure title="Faça seu Registro" maxWidth={700}>
            <S.FormRegister onSubmit={handleSubmit(submitRegister)}>
              <Input
                name={"name"}
                label={"Nome"}
                type="text"
                placeholder="Insira seu nome de usuario aqui"
                register={register}
                error={errors.name}
              />
              <Input
                name={"email"}
                label={"Email"}
                type="email"
                placeholder="Insira seu email aqui"
                register={register}
                error={errors.email}
              />
              <S.CampPassword>
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
              </S.CampPassword>
              <S.CampConfirmPassword>
                <Input
                  name={"confirm_password"}
                  label={"Confirmar senha"}
                  type={typeInput}
                  placeholder="Insira sua senha novamente"
                  register={register}
                  error={errors.confirm_password}
                />
                {passwordIconStatus ? (
                  <AiOutlineEye onClick={toogleIconPassword} />
                ) : (
                  <AiOutlineEyeInvisible onClick={toogleIconPassword} />
                )}
              </S.CampConfirmPassword>
              <S.CampTypeUser>
                <S.LabelTypeUser>Tipo de usuario</S.LabelTypeUser>
                <S.CampChoiceJob>
                  <S.CampContractor>
                    <input
                      type="radio"
                      value="true"
                      {...register("radioGroup")}
                    />
                    <span>Contratante</span>
                  </S.CampContractor>
                  <S.CampCollaborator>
                    <input
                      type="radio"
                      value="false"
                      {...register("radioGroup")}
                    />
                    <span>Colaboradora</span>
                  </S.CampCollaborator>
                </S.CampChoiceJob>
                {!!errors.radioGroup && <span>Marque uma opção</span>}
              </S.CampTypeUser>
              <Button type="submit" variant="primary">
                Cadastrar
              </Button>
            </S.FormRegister>
            <S.CampRedirectLogin>
              <p>
                Você já possui uma conta?{" "}
                <S.SpanLogin to="/login">Faça login aqui.</S.SpanLogin>
              </p>
            </S.CampRedirectLogin>
          </FormStructure>
        </Transition>
      </S.RegisterStyled>
    </>
  );
};
