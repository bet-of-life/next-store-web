import { TextField, colors } from "@mui/material";
import { InputAdressProps } from "../../../../interfaces/interfaces";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

const HouseNumberInput = ({ register, errors }: InputAdressProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode)

  return (
    <TextField
      label="Númeno da casa:"
      variant='outlined'
      type='text'
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      fullWidth
      {...register('houseNumber', { required: true })}
      error={errors?.houseNumber?.type == 'required'}
      helperText={errors?.houseNumber?.type === 'required' && 'Por favor informe o numero de sua casa'}
    />
  );
}

export default HouseNumberInput;