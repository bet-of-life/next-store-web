import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, colors, IconButton } from "@mui/material";
import { InputRegisterProps } from "../../../../../../interfaces/interfaces";
import { useState } from "react";
import useThemeMode from "../../../../../../hooks/useThemeMode";
import { tokens } from "../../../../../../themes/theme";

const ConfirmPasswordInputRegister = ({ register, errors, watchPassword }: InputRegisterProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <TextField
        label="Confirme sua senha:"
        variant='outlined'
        type={showPassword ? 'text' : 'password'}
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        fullWidth
        {...register('confirmPassword', { required: true, validate: (value) => value === watchPassword })}
        error={
          errors?.confirmPassword?.type === 'required' ||
          errors?.confirmPassword?.type === 'validate'
        }
        helperText={
          errors?.confirmPassword?.type === 'required' && 'Por favor confirme sua senha' ||
          errors?.confirmPassword?.type === 'validate' && 'A senha não confere'
        }
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

export default ConfirmPasswordInputRegister;