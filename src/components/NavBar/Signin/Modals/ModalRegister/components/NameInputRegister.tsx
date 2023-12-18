import { InputRegisterProps } from "../../../../../../interfaces/interfaces";
import { TextField, colors } from "@mui/material";
import useThemeMode from "../../../../../../hooks/useThemeMode";
import { tokens } from "../../../../../../themes/theme";

const NameInputRegister = ({ register, errors }: InputRegisterProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  return (
    <TextField
      label="Nome:"
      variant='outlined'
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      fullWidth
      {...register('name', { required: true })}
      error={errors?.name?.type === 'required'}
      helperText={errors?.name?.type === 'required' && 'Por favor preencha o nome'}
    />
  );
}

export default NameInputRegister;