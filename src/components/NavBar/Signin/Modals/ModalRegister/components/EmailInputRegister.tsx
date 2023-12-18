import { InputRegisterProps } from "../../../../../../interfaces/interfaces";
import { TextField, colors } from "@mui/material";
import validator from 'validator'
import useThemeMode from "../../../../../../hooks/useThemeMode";
import { tokens } from "../../../../../../themes/theme";

const EmailInputRegister = ({ register, errors }: InputRegisterProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  return (
    <TextField
      label="Email:"
      variant='outlined'
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      fullWidth
      {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
      error={errors?.email?.type === 'required' || errors?.email?.type === 'validate'}
      helperText={
        errors?.email?.type === 'required' && 'Por favor preencha o email' ||
        errors?.email?.type === 'validate' && 'Por favor preencha um email valido'
      }
    />
  );
}

export default EmailInputRegister;