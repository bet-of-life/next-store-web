import { Box, useTheme, Theme } from "@mui/material";
import CarouselImage from "./Carousel/CarouselImage";
import BannerCamisas from "./Roupas/BannerCamidas";
import useMediaQuery from "../../hooks/useMediaQuery";

const Dashboard = () => {
  const theme = useTheme()
  const { sm, md } = useMediaQuery()

  return (
    <Box width='100%' height='auto'>
      <CarouselImage />
      <Box
        display='flex'
        flexDirection='column'
        gap={sm ? 2 : (md ? 3 : 5)}
        justifyContent='center'
        alignItems='center'
        paddingY={theme.spacing(3)}
      >
        <BannerCamisas />
        <BannerCamisas />
      </Box>
    </Box>
  );
}

export default Dashboard;