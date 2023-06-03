import * as S from "./styles";
import { RiCloseLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ModalStyled } from "../../../components/Modal/styles";
import { Button } from "../../../components/Buttons/index";
import { toast } from "react-toastify";
import { api } from "../../services/axios";
import { Transition } from "../../../components/Transition";
import { formYup } from "../../validations/Other Validations";
import { IProposals } from "../../interfaces/context";

interface IPropsModalC {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  userProposals: () => void;
}

export const ModalContractorProposal = ({
  isModal,
  setIsModal,
  userProposals,
}: IPropsModalC) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProposals>({ resolver: yupResolver(formYup) });

  const registerSubmit = async (data: IProposals) => {
    const token = localStorage.getItem("@rentalToken");

    try {
      const idProposal = localStorage.getItem("@rentalPropId");
      const body = {
        is_active: "Concluido",
        recomendation: data.description,
      };

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.patch(`proposals/${idProposal}`, body);
      toast.success("Avaliação enviada com sucesso!");
      userProposals();
    } catch (error) {
      toast.error("Erro ao avaliar!");
      console.log(error);
    }
  };

  return (
    <ModalStyled>
      <Transition>
        <S.FormRatingStyled onSubmit={handleSubmit(registerSubmit)}>
          <RiCloseLine id="closed" onClick={() => setIsModal(!isModal)} />
          <S.TitleRatingStyled>
            Descreva como foi o atendimento da nossa colaboradora:
            <S.TextRatingStyled
              placeholder="Digite aqui..."
              {...register("description")}
            />
          </S.TitleRatingStyled>
          {errors.description?.message}
          <Button type="submit" variant="terciary">
            Enviar
          </Button>
        </S.FormRatingStyled>
      </Transition>
    </ModalStyled>
  );
};
