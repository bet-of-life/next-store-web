import { Box, useTheme, Theme, useMediaQuery } from "@mui/material";
import CarouselImage from "./Carousel/CarouselImage";
import BannerCamisas from "./Roupas/BannerCamidas";

const Dashboard = () => {
  const theme = useTheme()
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box width='100%' height='auto' bgcolor='#f0f0f0'>
      <CarouselImage />

      <Box
        display='flex'
        flexDirection='column'
        gap={smDown ? 1 : 5}
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