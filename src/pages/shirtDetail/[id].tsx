import Layout from "../../components/Layout";
import { Box, Typography } from "@mui/material";
import { fetchGetAllShirts, fetchGetShirt } from '../../config/services/consumers/shirts';
import ShirtsCatalog from "../../components/Dashboard/Roupas/ShirtsCatalog";
import ShirtDetail from "../../components/ShirtDetails/ShirtDetails";
import { NextPageContext } from "next";

interface DataShirtProps {
  data: {
    id: number,
    src: string,
    srcHover: string,
    name: string,
    price: string,
    oldPrice: string,
    srcDetail1: string,
    srcDetail2: string,
    srcDetail3: string,
  },
  allData: [{
    id: number,
    src: string,
    srcHover: string,
    name: string,
    price: string,
    oldPrice: string,
  }]
}

const shirtDetail = ({ data, allData }: DataShirtProps) => {

  return (
    <Layout>
      <Box display='flex' flexDirection='column' width='100%' height='auto' justifyContent='center' alignItems='center'>
        <ShirtDetail data={data} />
        <Box width='100%' py={3} borderTop='1px solid #423b3b'>
          <Box display='flex' width='100%' height={50} justifyContent='center' alignItems='center'>
            <Typography variant="h6">
              Produtos Relacionados
            </Typography>
          </Box>
          <ShirtsCatalog data={allData} />
        </Box>
      </Box>
    </Layout>
  );
}

export default shirtDetail;

export const getServerSideProps = async (context: NextPageContext) => {
  const response = await fetchGetShirt(context.query.id)
  const allResponse = await fetchGetAllShirts()

  return {
    props: {
      data: response.data,
      allData: allResponse.data
    }
  }
}