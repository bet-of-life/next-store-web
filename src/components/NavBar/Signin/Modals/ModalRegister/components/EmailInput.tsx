import { Grid, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import useThemeMode from '../../../../../../hooks/useThemeMode';
import { tokens } from '../../../../../../themes/theme';

const EmailInput = ({setErroRegisterUser, errorRegisterUser, setUserLogin, userLogin}) => {
    const { mode } = useThemeMode();
    const colors = tokens(mode);
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setErroRegisterUser({
          ...errorRegisterUser,
          errorEmail: false,
        });
        e.preventDefault();
        setUserLogin({ ...userLogin, email: e.target.value });
      };
    
  return (
    <>
         <Grid item>
            <TextField
              id="outlined-basic1"
              label="Email"
              variant="filled"
              required
              InputLabelProps={{ style: { color: colors.grey[100] } }}
              inputProps={{ style: { backgroundColor: colors.black[900] } }}
              onChange={handleChangeEmail}
              error={errorRegisterUser.errorEmail}
              helperText={
                errorRegisterUser.errorEmail && errorRegisterUser.errorMessage
              }
              fullWidth
            />
          </Grid>
    </>
  );
};

export default EmailInput;