import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import useThemeMode from '../../../../../../hooks/useThemeMode';
import { tokens } from '../../../../../../themes/theme';

const PasswordInput = ({ setErroRegisterUser, errorRegisterUser, setUserLogin, userLogin}) => {
    const { mode } = useThemeMode();
    const colors = tokens(mode);
    const [showPassword, setShowPassword] = useState(false);
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setErroRegisterUser({
          ...errorRegisterUser,
          errorName: false,
        });
        e.preventDefault();
        setUserLogin({ ...userLogin, password: e.target.value });
      };

      const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setErroRegisterUser({
          ...errorRegisterUser,
          errorConfirmPassowrd: false,
        });
        e.preventDefault();
        setUserLogin({ ...userLogin, confirmPassword: e.target.value });
      };
    
      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.preventDefault();
      };
  return (
    <>
          <Grid container item direction="row">
            <TextField
              id="outlined-basic2"
              label="Password"
              variant="filled"
              required
              type={showPassword ? "text" : "password"}
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] } }}
              onChange={handleChangePassword}
              error={errorRegisterUser.errorPassword}
              helperText={
                errorRegisterUser.errorPassword &&
                errorRegisterUser.errorMessage
              }
              fullWidth
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ ml: "-40px", mt: "7px", color: colors.grey[100] }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Grid>
          <Grid container item direction="row">
            <TextField
              id="outlined-basic2"
              label="ConfirmPassword"
              variant="filled"
              required
              type={showPassword ? "text" : "confirmPassword"}
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] } }}
              onChange={handleChangeConfirmPassword}
              error={errorRegisterUser.errorConfirmPassowrd}
              helperText={
                errorRegisterUser.errorConfirmPassowrd &&
                errorRegisterUser.errorMessage
              }
              fullWidth
            />
            <IconButton
              aria-label="toggle confirmPassword visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{ ml: "-40px", mt: "7px", color: colors.grey[100] }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Grid>
    </>
  );
};

export default PasswordInput;