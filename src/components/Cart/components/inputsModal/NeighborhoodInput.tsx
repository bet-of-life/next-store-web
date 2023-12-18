import { TextField, colors } from "@mui/material";
import { InputAdressProps } from "../../../../interfaces/interfaces";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

const NeighborhoodInput = ({ register, errors }: InputAdressProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode)

  return (
    <TextField
      label="Bairro:"
      variant='outlined'
      type='text'
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      fullWidth
      {...register('neighborhood', { required: true })}
      error={errors?.neighborhood?.type == 'required'}
      helperText={errors?.neighborhood?.type === 'required' && 'Por favor preencha seu bairro'}
    />
  );
}

export default NeighborhoodInput;