import { Grid, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import useThemeMode from "../../../../../../hooks/useThemeMode";
import { tokens } from "../../../../../../themes/theme";
import { DataInputProps } from "../interfaces";

const NameInput: React.FC<DataInputProps> = ({ setErroRegisterUser, errorRegisterUser, setUserLogin, userLogin }) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setErroRegisterUser({ ...errorRegisterUser, errorName: false, });
    e.preventDefault();
    setUserLogin({ ...userLogin, name: e.target.value });
  };
  return (
    <>
      <Grid item>
        <TextField
          id="outlined-basic"
          autoFocus
          required
          label="Nome completo"
          variant="filled"
          InputLabelProps={{ style: { color: colors.grey[100] } }}
          inputProps={{ style: { backgroundColor: colors.black[900] } }}
          onChange={handleChangeName}
          error={errorRegisterUser.errorName}
          helperText={
            errorRegisterUser.errorName && errorRegisterUser.errorMessage
          }
          fullWidth
        />
      </Grid>
    </>
  );
};

export default NameInput;
