import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent} from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { InputProps } from "../../../interfaces/interfaces";
import { tokens } from "../../../themes/theme";

const HouseNumberInput = ({setErrorAddress, errorAddress, address, setAddress}:InputProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);
  
  const handleChangeHouseNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAddress({ ...errorAddress, errorHouseNumber: false });
    e.preventDefault();
    setAddress({ ...address, houseNumber: e.target.value });
  };

  return (
    <Box>
      <Typography>Número</Typography>
      <TextField 
          id="outlined-basic1"
          label="Número da casa"
          variant="filled"
          required
          InputLabelProps={{ style: { color: colors.grey[100] } }}
          inputProps={{ style: { backgroundColor: colors.black[900] } }}
          onChange={handleChangeHouseNumber}
          error={errorAddress.errorHouseNumber}
          helperText={
            errorAddress.errorHouseNumber && errorAddress.errorMessage
          }
          fullWidth
      />
    </Box>
  );
};

export default HouseNumberInput;
