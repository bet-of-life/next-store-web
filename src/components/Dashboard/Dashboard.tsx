import { Box, useTheme } from "@mui/material";
import CarouselImage from "./Carousel/CarouselImage";
import BannerCamisas from "./Roupas/BannerCamidas";

const Dashboard = () => {
  const theme = useTheme()
  return (
    <Box width='100%' height='auto'>
      <Box height='auto' width='100%'>
        <CarouselImage />
      </Box>
      <Box
        paddingTop={theme.spacing(3)}
        paddingLeft={theme.spacing(12)}
        paddingRight={theme.spacing(12)}
      >
        <BannerCamisas />
        <BannerCamisas />
      </Box>
    </Box>
  );
}

export default Dashboard;