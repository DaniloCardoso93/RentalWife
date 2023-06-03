import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Buttons";
import { IHiredProfile } from "../../interfaces/profile";
import { api } from "../../services/axios";
import { HireProfileSchema } from "../../validations/Other Validations";

export const HireProfile = ({ user }: any) => {
  const [services, setServices] = useState<string[]>(user.services);
  const navigate = useNavigate();

  const limpaCheck = (remove: string) => {
    const filtro = services.filter((elem) => elem != remove);

    setServices(filtro);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHiredProfile>({ resolver: yupResolver(HireProfileSchema) });

  const onSubmit = async (data: IHiredProfile) => {
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

  const verifyCheck = (verify: string) => {
    if (user.services !== undefined) {
      const isCheck = user.services.some((elem: string) => elem == verify);
      return isCheck;
    }

    return false;
  };

  return (
    <S.EditProfile>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="secondary"
            color="secondary"
            label="Nome"
            sx={{ width: 260 }}
            variant="standard"
            defaultValue={user.name}
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Email"
            sx={{ width: 260 }}
            variant="standard"
            defaultValue={user.email}
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Contato"
            sx={{ width: 260 }}
            defaultValue={user.contact && user.contact}
            variant="standard"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Gênero que se identifica"
            sx={{ width: 260 }}
            variant="standard"
            defaultValue={user.gender && user.gender}
            {...register("gender")}
          />
          <p>{errors.gender?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Localidade"
            sx={{ width: 260 }}
            variant="standard"
            defaultValue={user.location && user.location}
            {...register("location")}
          />
          <p>{errors.location?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            multiline
            rows={5}
            sx={{ width: 260 }}
            label="Descreva suas experiencias"
            variant="standard"
            defaultValue={user.description && user.description}
            {...register("description")}
          />
          <p>{errors.description?.message}</p>
        </div>
        <div className="BoxProfile">
          <img src={user.avatar_img} alt="" />
        </div>
        <div>
          <h3>Tipos de serviços</h3>
          <FormGroup className="GroupCheck">
            <div className="collum1">
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
            <div className="collum2">
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
          <TextField
            id="secondary"
            color="secondary"
            sx={{ width: 260 }}
            label="Url da imagem de perfil"
            variant="standard"
            {...register("avatar_img")}
          />
          <p>{errors.avatar_img?.message}</p>
        </div>
        <Button type="submit" variant="terciary">
          Salvar
        </Button>
      </form>
    </S.EditProfile>
  );
};
