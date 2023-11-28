import Layout from "../../components/Layout";
import { Box, Typography } from "@mui/material";
import { fetchGetShirt } from '../../config/services/consumers/shirts';
import ImageDetail from "../../components/ShirtDetails/ImageDetail";
import DataDetails from "../../components/ShirtDetails/DataDetails";
import ShirtsCatalog from "../../components/Dashboard/Roupas/ShirtsCatalog";

interface DataProps {
  data: {
    id: number,
    src: string,
    srcHover: string,
    name: string,
    price: string,
    oldPrice: string,
  }
}

const shirtDetail = ({ data }: DataProps) => {

  return (
    <Layout>
      <Box display='flex' flexDirection='column' width='100%' height='auto' justifyContent='center' alignItems='center'>
        <Box display='flex' width='75vw ' height='auto' py={8} gap={2}>
          <Box width='65%' height='auto'>
            <ImageDetail src={data.src} srcHover={data.srcHover} />
          </Box>
          <Box width='34%' height='auto'>
            <DataDetails name={data.name} price={data.price} oldPrice={data.oldPrice} />
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' py={5} gap={3} borderTop='1px solid #423b3b'>
          <Typography>
            Produtos Relacionados
          </Typography>
          <ShirtsCatalog />
        </Box>
      </Box>
    </Layout>
  );
}

export default shirtDetail;

export const getServerSideProps = async (context: any) => {
  const response = await fetchGetShirt(context.query.id)

  return {
    props: {
      data: response.data
    }
  }
}