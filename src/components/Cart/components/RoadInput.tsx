import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent} from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { InputProps } from "../../../interfaces/interfaces";
import { tokens } from "../../../themes/theme";

const RoadInput = ({setErrorAddress, errorAddress, address, setAddress}:InputProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode);
  
  const handleChangeRoad = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAddress({ ...errorAddress, errorRoad: false });
    e.preventDefault();
    setAddress({ ...address, road: e.target.value });
  };

  return (
    <Box>
      <Typography>Rua</Typography>
      <TextField 
          id="outlined-basic1"
          variant="filled"
          required
          InputLabelProps={{ style: { color: colors.grey[100] } }}
          inputProps={{ style: { backgroundColor: colors.black[900] } }}
          onChange={handleChangeRoad}
          error={errorAddress.errorRoad}
          helperText={
            errorAddress.errorRoad && errorAddress.errorMessage
          }
          fullWidth
      />
    </Box>
  );
};

export default RoadInput;
