import { InputRegisterProps } from "../../../../../../interfaces/interfaces";
import { IconButton, TextField, colors } from "@mui/material";
import validator from 'validator'
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import useThemeMode from "../../../../../../hooks/useThemeMode";
import { tokens } from "../../../../../../themes/theme";

const PasswordInputRegister = ({ register, errors }: InputRegisterProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  return (
    <>
      <TextField
        label="Senha:"
        variant='outlined'
        type={showPassword ? 'text' : 'password'}
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        fullWidth
        {...register('password', { required: true })}
        error={errors?.password?.type == 'required'}
        helperText={errors?.password?.type === 'required' && 'Por favor preencha a senha'}
      />
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        sx={{ ml: '-40px', mt: '7px', color: colors.grey[100] }}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </>
  );
}

export default PasswordInputRegister;