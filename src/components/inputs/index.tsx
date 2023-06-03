import { IInputProps } from "../../features/interfaces/components";
import { CampInput, LabelStyled, InputStyled } from "./styles";

export const Input = ({
  name,
  register,
  error,
  label,
  ...rest
}: IInputProps) => {
  return (
    <CampInput>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled {...register(name)} {...rest} />
      {error && <span>{error.message}</span>}
    </CampInput>
  );
};
