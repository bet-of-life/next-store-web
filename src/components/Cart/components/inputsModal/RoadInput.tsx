import { TextField, colors } from "@mui/material";
import { InputAdressProps } from "../../../../interfaces/interfaces";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

const RoadInput = ({ register, errors }: InputAdressProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode)

  return (
    <TextField
      label="Rua"
      variant='outlined'
      type='text'
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      fullWidth
      {...register('road', { required: true })}
      error={errors?.road?.type == 'required'}
      helperText={errors?.road?.type === 'required' && 'Por favor preencha sua rua'}
    />
  );
}

export default RoadInput;