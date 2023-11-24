import { Box, useTheme, Theme } from "@mui/material";
import CarouselImage from "../../components/Dashboard/Carousel/CarouselImage";
import BannerCamisas from "../../components/Dashboard/Roupas/BannerCamidas";
import ShirtsCatalog from "../../components/Dashboard/Roupas/ShirtsCatalog";
import Layout from "../../components/Layout";
import WhatsAppButton from "../../components/Whatsapp/WhatsAppButton";
import useMediaQuery from "../../hooks/useMediaQuery";


const Dashboard = () => {
  const theme = useTheme()
  const { sm, md } = useMediaQuery()

  return (
    <Layout>
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
          <ShirtsCatalog />
          <ShirtsCatalog />
          <ShirtsCatalog />
        </Box>
      </Box>
    </Layout>
  );
}

export default Dashboard;