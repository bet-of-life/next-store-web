import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import useThemeMode from "../../../../../hooks/useThemeMode";
import { InputProps } from "../../../../../interfaces/interfaces";
import { tokens } from "../../../../../themes/theme";

const CityInput = ({ setErrorAddress, errorAddress, address, setAddress }: InputProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAddress({ ...errorAddress, errorCity: false });
    e.preventDefault();
    setAddress({ ...address, city: e.target.value });
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
        onChange={handleChangeCity}
        error={errorAddress.errorCity}
        helperText={
          errorAddress.errorCity && errorAddress.errorMessage
        }
        fullWidth
      />
    </Box>
  );
};

export default CityInput;
