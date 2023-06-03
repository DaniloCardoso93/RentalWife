import * as S from "./styles";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Button } from "../../../components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { CProfileSchema } from "../../validations/Other Validations";
import { ICProfile } from "../../interfaces/profile";
import { api } from "../../services/axios";
import { useNavigate } from "react-router-dom";

export const CProfile = ({ user }: any) => {
  const [services, setServices] = useState<string[]>(user.services);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICProfile>({ resolver: yupResolver(CProfileSchema) });

  const onSubmit = async (data: ICProfile) => {
    data.services = services;

    if (data.avatar_img.length == 0) {
      data.avatar_img = user.avatar_img;
    }

    const token = localStorage.getItem("@rentalToken");

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      await api.patch(`/users/${user.id}`, data);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const limpaCheck = (remove: string) => {
    const filtro = services.filter((elem) => elem != remove);

    setServices(filtro);
  };

  const verifyCheck = (verify: string) => {
    if (user.services !== undefined) {
      const isCheck = user.services.some((elem: string) => elem == verify);
      return isCheck;
    }

    return false;
  };
  return (
    <S.CProfileStyled>
      <div>
        <img src={user.avatar_img} alt={user.name} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="standard-basic"
            label="Nome"
            variant="standard"
            color="secondary"
            defaultValue={user.name}
            sx={{
              width: 260,
            }}
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <TextField
            id="standard-basic"
            label="Email"
            defaultValue={user.email}
            variant="standard"
            color="secondary"
            sx={{
              width: 260,
            }}
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <TextField
            id="standard-basic"
            label="Contato"
            variant="standard"
            color="secondary"
            defaultValue={user.contact && user.contact}
            sx={{
              width: 260,
            }}
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>
          <TextField
            id="standard-basic"
            label="Gênero que se identifica"
            variant="standard"
            color="secondary"
            defaultValue={user.gender && user.gender}
            sx={{
              width: 260,
            }}
            {...register("gender")}
          />
          <p>{errors.gender?.message}</p>
          <TextField
            id="standard-basic"
            label="Localidade"
            variant="standard"
            color="secondary"
            defaultValue={user.location && user.location}
            sx={{
              width: 260,
            }}
            {...register("location")}
          />
          <p>{errors.location?.message}</p>
        </div>
        <div>
          <section>
            <h2>Preferencia de serviços</h2>
            <FormGroup className="checkSec">
              <div className="checkLocale">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      onChange={(e) =>
                        e.target.checked
                          ? setServices([...services, "Alvenaria"])
                          : limpaCheck("Alvenaria")
                      }
                      defaultChecked={verifyCheck("Alvenaria")}
                    />
                  }
                  label="Alvenaria"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      onChange={(e) =>
                        e.target.checked
                          ? setServices([...services, "Marcenaria"])
                          : limpaCheck("Marcenaria")
                      }
                      defaultChecked={verifyCheck("Marcenaria")}
                    />
                  }
                  label="Marcenaria"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      onChange={(e) =>
                        e.target.checked
                          ? setServices([...services, "Eletricista"])
                          : limpaCheck("Eletricista")
                      }
                      defaultChecked={verifyCheck("Eletricista")}
                    />
                  }
                  label="Eletricista"
                />
              </div>
              <div className="checkLocale">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      onChange={(e) =>
                        e.target.checked
                          ? setServices([...services, "Hidraulica"])
                          : limpaCheck("Hidraulica")
                      }
                      defaultChecked={verifyCheck("Hidraulica")}
                    />
                  }
                  label="Hidraulica"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      onChange={(e) =>
                        e.target.checked
                          ? setServices([...services, "Mecanica"])
                          : limpaCheck("Mecanica")
                      }
                      defaultChecked={verifyCheck("Mecanica")}
                    />
                  }
                  label="Mecanica"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      onChange={(e) =>
                        e.target.checked
                          ? setServices([...services, "Diarista"])
                          : limpaCheck("Diarista")
                      }
                      defaultChecked={verifyCheck("Diarista")}
                    />
                  }
                  label="Diarista"
                />
              </div>
            </FormGroup>
          </section>
          <TextField
            id="standard-basic"
            label="URL da imagem de perfil"
            variant="standard"
            color="secondary"
            sx={{
              width: 260,
            }}
            {...register("avatar_img")}
          />
          <p>{errors.avatar_img?.message}</p>
        </div>
        <Button variant="terciary" type="submit">
          Salvar
        </Button>
      </form>
    </S.CProfileStyled>
  );
};
