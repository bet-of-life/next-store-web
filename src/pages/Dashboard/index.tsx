import { Box, useTheme, Theme } from "@mui/material";
import CarouselImage from "../../components/Dashboard/Carousel/CarouselImage";
import ShirtsCatalog from "../../components/Dashboard/Roupas/ShirtsCatalog";
import Layout from "../../components/Layout";
import WhatsAppButton from "../../components/Whatsapp/WhatsAppButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import { fetchGetAllShirts } from "../../config/services/consumers/shirts";
import SearchNavBar from "../../components/NavBar/Search/SearchNavBar";

interface AllDataShirtsProps {
  data: [{
    id: number,
    src: string,
    srcHover: string,
    name: string,
    price: string,
    oldPrice: string,
  }]
}

const Dashboard = ({ data }: AllDataShirtsProps) => {
  const theme = useTheme()
  const { sm, md, lg } = useMediaQuery()

  return (
    <Layout>
      <Box width='100%' height='auto'>
        <Box width='100%' height='50vw'>
          <CarouselImage />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          gap={sm ? 2 : (md ? 3 : 5)}
          justifyContent='center'
          alignItems='center'
          paddingY={theme.spacing(3)}
        >
          <ShirtsCatalog data={data} />
        </Box>
      </Box>
    </Layout>
  );
}

export default Dashboard;

export const getServerSideProps = async () => {
  const response = await fetchGetAllShirts()

  return {
    props: {
      data: response.data
    }
  }
}