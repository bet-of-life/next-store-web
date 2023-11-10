import { Box, useTheme, Theme } from "@mui/material";
import CarouselImage from "./Carousel/CarouselImage";
import BannerCamisas from "./Roupas/BannerCamidas";
import useMediaQuery from "../../hooks/useMediaQuery";

const Dashboard = () => {
  const theme = useTheme()
  const { sm } = useMediaQuery()

  return (
    <Box width='100%' height='auto'>
      <CarouselImage />
      <Box
        display='flex'
        flexDirection='column'
        gap={sm ? 2 : 5}
        justifyContent='center'
        alignItems='center'
        paddingTop={theme.spacing(3)}
        paddingBottom={theme.spacing(3)}
      >
        <BannerCamisas />
        <BannerCamisas />
      </Box>
    </Box>
  );
}

export default Dashboard;