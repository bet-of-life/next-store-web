import { NextPageContext } from 'next';
import { Box } from '@mui/material'
import React from 'react';
import Cart from '../../components/Cart/Cart';
import { fetchGetShirt } from '../../config/services/consumers/shirts';
import Layout from '../../components/Layout';
import CustomLabelTextField from '../../components/CustomTextField/CustomLabelTextField';
import CustomTextField from '../../components/CustomTextField/CustomTextField';
import useThemeMode from '../../hooks/useThemeMode';
interface DataShirtProps {
  data: {
    id: number,
    src: string,
    srcHover: string,
    name: string,
    price: string,
    oldPrice: string
  },
  size: string,
  color: string

}

const CartPage = ({ data, size, color }: DataShirtProps) => {
  const theme = useThemeMode();
  console.log(typeof theme.mode)
  return (
    <Layout>
      <Box width='100%' height='auto' display='flex' justifyContent='center'>
        <CustomLabelTextField htmlFor="name" sx={{ mt: 0 }}>
            teste
        </CustomLabelTextField>
        <CustomTextField
            autoFocus
            name="code"
            variant="outlined"
            placeholder="Ex: TOMA10"
            fullWidth
            size="small"
            borderColor={true}
            borderColorDark={"red"}
            borderColorWhite={"blue"}
            themeMode={theme.mode}
          />

        <Cart
          id={data.id}
          name={data.name}
          color={color}
          price={data.price}
          src={data.src}
          size={size}
        />
      </Box>
    </Layout>
  );
};

export default CartPage;

export const getServerSideProps = async (context: NextPageContext) => {
  const queryId = context.query.params[0]
  const response = await fetchGetShirt(queryId)
  console.log(context.query)
  return {
    props: {
      data: response.data,
      size: context.query.params[1],
      color: context.query.params[2]
    }
  }
}