import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { AddressErrorProps, AddressProps, InputProps } from "../../interfaces/interfaces";
import CityInput from "./components/CityInput";
import ComplementInput from "./components/ComplementInput";
import HouseNumberInput from "./components/HouseNumberInput";
import NeighborhoodInput from "./components/NeighborhoodInput";
import RoadInput from "./components/RoadInput";
import StateInput from "./components/StateInput";

const FormAddress = ({setAddress, setErrorAddress, address, errorAddress}: InputProps) => {
  return (
    <Grid container>
      <Grid item>
        <RoadInput
          setAddress={setAddress}
          setErrorAddress={setErrorAddress}
          address={address}
          errorAddress={errorAddress}
        />
      </Grid>
      <Grid item>
        <HouseNumberInput
          setAddress={setAddress}
          setErrorAddress={setErrorAddress}
          address={address}
          errorAddress={errorAddress}
        />
      </Grid>
      <Grid item>
        <NeighborhoodInput
          setAddress={setAddress}
          setErrorAddress={setErrorAddress}
          address={address}
          errorAddress={errorAddress}
        />
      </Grid>
      <Grid item>
        <ComplementInput
          setAddress={setAddress}
          setErrorAddress={setErrorAddress}
          address={address}
          errorAddress={errorAddress}
        />
      </Grid>
      <Grid item>
        <CityInput
          setAddress={setAddress}
          setErrorAddress={setErrorAddress}
          address={address}
          errorAddress={errorAddress}
        />
      </Grid>
      <Grid item>
        <StateInput
          setAddress={setAddress}
          setErrorAddress={setErrorAddress}
          address={address}
          errorAddress={errorAddress}
        />
      </Grid>
    </Grid>
  );
};

export default FormAddress;
