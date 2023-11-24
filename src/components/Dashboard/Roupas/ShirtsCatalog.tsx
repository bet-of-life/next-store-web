import { Box, useTheme } from "@mui/material";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Banner from "./Banner";
import { blackFemale, blackMale, whiteFemale, whiteMale } from "./utils";

const ShirtsCatalog = () => {

  const { sm, md } = useMediaQuery();

  return (
    <Box
      width={md ? "100vw" : "75vw"}
      height={sm ? "250px" : md ? "350px" : "450px"}
      display="flex"
      justifyContent='center'
      alignItems="center"
      gap={4}
    >
      <Banner item={whiteFemale} />
      <Banner item={blackMale} />
      <Banner item={whiteMale} />
      <Banner item={blackFemale} />
    </Box>
  );
};

export default ShirtsCatalog;
