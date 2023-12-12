import { NextPageContext } from 'next';
import { Box } from '@mui/material'
import React from 'react';
import Cart from '../../components/Cart/Cart';
import { fetchGetShirt } from '../../config/services/consumers/shirts';
import { parseCookies } from 'nookies';
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

  return (
    <Box width='100%' minHeight='75vh' display='flex' justifyContent='center'>
      <Cart
        id={data.id}
        name={data.name}
        color={color}
        price={data.price}
        src={data.src}
        size={size}
      />
    </Box>
  );
};

export default CartPage;

export const getServerSideProps = async (context: NextPageContext) => {
  const queryId = context.query.params[0]
  const response = await fetchGetShirt(queryId)
  const cookies = parseCookies(context);
  const token = cookies["nextauth.token"];
  if (!token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: response.data,
      size: context.query.params[1],
      color: context.query.params[2]
    }
  }
}