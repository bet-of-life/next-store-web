import { Box, useTheme } from "@mui/material";
import { useRef } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Banner from "./Banner";
import { data, dataBlack } from "./utils";

const ShirtsCatalog = () => {
  const carousel = useRef(null);

  const { sm, md } = useMediaQuery();
  const theme = useTheme();

  return (
    <Box
      width={md ? "100vw" : "85vw"}
      height={sm ? "250px" : md ? "350px" : "400px"}
      display="flex"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="row"
        maxWidth={md ? "100vw" : "80vw"}
        gap={3}
        paddingX={1}
        ref={carousel}
        sx={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Banner item={data} />
        <Banner item={dataBlack} />
      </Box>
    </Box>
  );
};

export default ShirtsCatalog;
