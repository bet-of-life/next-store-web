import { Box } from "@mui/material";
import ImageDetail from "./components/ImageDetail";
import DataDetails from "./components/DataDetails";
import useMediaQueryAdapter from "../../hooks/useMediaQuery";

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
  }
}

const ShirtDetail = ({ data }: DataShirtProps) => {
  const { lg, tablet } = useMediaQueryAdapter()

  const flexColumn = tablet ? 'column' : 'row'
  const widthImage = tablet ? '100%' : '62%'
  const widthDetails = tablet ? '100%' : '36%'

  return (
    <Box display='flex' flexDirection={flexColumn} height='auto' px={2} py={2} gap={2} mt={lg ? 5 : 0}>
      <Box width={widthImage} height='auto'>
        <ImageDetail srcDetail1={data.srcDetail1} srcDetail2={data.srcDetail2} srcDetail3={data.srcDetail3} />
      </Box>
      <Box width={widthDetails} height='auto'>
        <DataDetails id={data.id} name={data.name} price={data.price} oldPrice={data.oldPrice} />
      </Box>
    </Box>
  );
}

export default ShirtDetail;