import { Grid, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import InputMask from "react-input-mask";
import useThemeMode from '../../../../../../hooks/useThemeMode';
import { tokens } from '../../../../../../themes/theme';
const PhoneAndCpfInput = ({setErroRegisterUser, errorRegisterUser, setUserLogin, userLogin}) => {
    const { mode } = useThemeMode();
    const colors = tokens(mode);
  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setErroRegisterUser({
      ...errorRegisterUser,
      errorPhone: false,
    });
    e.preventDefault();
    setUserLogin({ ...userLogin, phone: e.target.value });
  };

  const handleChangeCpf = (e: ChangeEvent<HTMLInputElement>) => {
    setErroRegisterUser({
      ...errorRegisterUser,
      errorConfirmPassowrd: false,
    });
    e.preventDefault();
    setUserLogin({ ...userLogin, cpf: e.target.value });
  };

  return (
    <>
         <Grid container item direction="row" mt={1} spacing={1}>
            <Grid item xs={6}>
              <InputMask
                mask="(99)99999-9999"
                alwaysShowMask
                onChange={handleChangePhone}
                error={errorRegisterUser.errorPhone}
                helperText={
                  errorRegisterUser.errorPhone && errorRegisterUser.errorMessage
                }
              >
                {() => (
                  <TextField
                    id="outlined-basic3"
                    label="Numero de telefone"
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{ style: { color: colors.grey[100] } }}
                    inputProps={{
                      style: { backgroundColor: colors.black[900] },
                    }}
                    onChange={handleChangePhone}
                    error={errorRegisterUser.errorPhone}
                    helperText={
                      errorRegisterUser.errorPhone &&
                      errorRegisterUser.errorMessage
                    }
                    focused={false}
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={6}>
              <InputMask
                mask="999-999-999-99"
                maskChar="_"
                alwaysShowMask
                onChange={handleChangeCpf}
                error={errorRegisterUser.errorCpf}
                helperText={
                  errorRegisterUser.errorCpf && errorRegisterUser.errorMessage
                }
              >
                {() => (
                  <TextField
                    id="outlined-basic4"
                    label="CPF"
                    variant="outlined"
                    required
                    InputLabelProps={{ style: { color: colors.grey[100] } }}
                    inputProps={{
                      style: { backgroundColor: colors.black[900] },
                    }}
                    onChange={handleChangeCpf}
                    error={errorRegisterUser.errorCpf}
                    helperText={
                      errorRegisterUser.errorCpf &&
                      errorRegisterUser.errorMessage
                    }
                    fullWidth
                  />
                )}
              </InputMask>
            </Grid>
        </Grid>
    </>
  );
};

export default PhoneAndCpfInput;