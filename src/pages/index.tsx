import { Box, useTheme } from "@mui/material";
import CarouselImage from "../components/Dashboard/Carousel/CarouselImage";
import ShirtsCatalog from "../components/Dashboard/Roupas/ShirtsCatalog";
import { fetchGetAllShirts } from "../config/services/consumers/shirts";
import useMediaQueryAdapter from "../hooks/useMediaQuery";

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

export default function Home({ data }: AllDataShirtsProps) {
  const theme = useTheme()
  const { sm, md, lg } = useMediaQueryAdapter()

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
        <ShirtsCatalog data={data} />
      </Box>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const response = await fetchGetAllShirts()

  return {
    props: {
      data: response.data
    }
  }
}