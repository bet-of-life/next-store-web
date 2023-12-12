import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import useThemeMode from "../../../../../hooks/useThemeMode";
import { InputProps } from "../../../../../interfaces/interfaces";
import { tokens } from "../../../../../themes/theme";

const NeighborhoodInput = ({ setErrorAddress, errorAddress, address, setAddress }: InputProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  const handleChangeNeighborhood = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAddress({ ...errorAddress, errorNeighborhood: false });
    e.preventDefault();
    setAddress({ ...address, neighborhood: e.target.value });
  };

  return (
    <Box>
      <Typography>Bairro</Typography>
      <TextField
        id="outlined-basic1"
        variant="filled"
        required
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        inputProps={{ style: { backgroundColor: colors.black[900] } }}
        onChange={handleChangeNeighborhood}
        error={errorAddress.errorNeighborhood}
        helperText={
          errorAddress.errorNeighborhood && errorAddress.errorMessage
        }
        fullWidth
      />
    </Box>
  );
};

export default NeighborhoodInput;
