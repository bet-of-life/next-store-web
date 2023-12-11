import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent} from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { InputProps } from "../../../interfaces/interfaces";
import { tokens } from "../../../themes/theme";

const StateInput = ({setErrorAddress, errorAddress, address, setAddress}:InputProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);
  
  const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAddress({ ...errorAddress, errorState: false });
    e.preventDefault();
    setAddress({ ...address, state: e.target.value });
  };

  return (
    <Box>
      <Typography>Cidade</Typography>
      <TextField 
          id="outlined-basic1"
          variant="filled"
          required
          InputLabelProps={{ style: { color: colors.grey[100] } }}
          inputProps={{ style: { backgroundColor: colors.black[900] } }}
          onChange={handleChangeState}
          error={errorAddress.errorState}
          helperText={
            errorAddress.errorState && errorAddress.errorMessage
          }
          fullWidth
      />
    </Box>
  );
};

export default StateInput;
