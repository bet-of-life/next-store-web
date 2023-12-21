import { TextField, colors } from "@mui/material";
import { InputAdressProps } from "../../../../interfaces/interfaces";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

const ComplementInput = ({ register, errors }: InputAdressProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode)

  return (
    <TextField
      label="Complemento:"
      variant='outlined'
      type='text'
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      fullWidth
      {...register('complement')}
    />
  );
}

export default ComplementInput;