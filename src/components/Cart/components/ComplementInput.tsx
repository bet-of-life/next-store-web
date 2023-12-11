import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent} from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { InputProps } from "../../../interfaces/interfaces";
import { tokens } from "../../../themes/theme";

const ComplementInput = ({setErrorAddress, errorAddress, address, setAddress}:InputProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);
  
  const handleChangeComplement = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAddress({ ...errorAddress, errorComplement: false });
    e.preventDefault();
    setAddress({ ...address, complement: e.target.value });
  };

  return (
    <Box>
      <Typography>Complemento</Typography>
      <TextField 
          id="outlined-basic1"
          label="Complemento"
          variant="filled"
          required
          InputLabelProps={{ style: { color: colors.grey[100] } }}
          inputProps={{ style: { backgroundColor: colors.black[900] } }}
          onChange={handleChangeComplement}
          error={errorAddress.errorComplement}
          helperText={
            errorAddress.errorComplement && errorAddress.errorMessage
          }
          fullWidth
      />
    </Box>
  );
};

export default ComplementInput;
