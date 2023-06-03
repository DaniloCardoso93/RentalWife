import * as S from "./styles";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Buttons";
import { ModalStyled } from "../../../components/Modal/styles";
import { ErrorToast, SucessToast } from "../../libs/toastify";
import { api } from "../../services/axios";
import { ModalProfileHireSchema } from "../../validations/Other Validations";
import { Transition } from "../../../components/Transition";
import { ISendPropose } from "../../interfaces/layouts";

export const ModalProfileHire = ({
  isModal,
  setIsModal,
  contractor,
  hired,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendPropose>({ resolver: yupResolver(ModalProfileHireSchema) });

  const getProposals = async (proposal: ISendPropose) => {
    const token = localStorage.getItem("@rentalToken");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.post("proposals", proposal);
      SucessToast("Proposta enviada com sucesso");
      setIsModal(!isModal);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        ErrorToast("Não foi possível enviar sua proposta");
      }
    }
  };

  const onSubmit = (data: ISendPropose) => {
    const proposal = {
      userId: hired.id,
      is_active: "Enviado",
      title: data.title,
      description: data.description,
      user: {
        avatar_img: contractor.avatar_img,
        contractorName: contractor.name,
        contact: contractor.contact,
        contractorId: contractor.id,
      },
    };
    getProposals(proposal);
  };

  return (
    <ModalStyled>
      <Transition>
        <S.ModalSendPropose>
          <div>
            <h3>Faça uma Proposta</h3>
            <button onClick={() => setIsModal(!isModal)}>X</button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="">Qual trabalho você precisa?</label>
              <input
                {...register("title")}
                placeholder="Ex: Troca de Chuveiro"
                type="text"
              />
              <p>{errors.title?.message}</p>
            </div>
            <div>
              <label htmlFor="">Descrição do trabalho a ser feito</label>
              <textarea
                {...register("description")}
                placeholder="Digite a descrição detalhada"
              />
              <p>{errors.description?.message}</p>
            </div>
            <Button type="submit" variant="primary">
              Faça uma proposta
            </Button>
          </form>
        </S.ModalSendPropose>
      </Transition>
    </ModalStyled>
  );
};
