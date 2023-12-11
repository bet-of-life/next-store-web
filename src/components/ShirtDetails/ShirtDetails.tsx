import { Box } from "@mui/material";
import ImageDetail from "./components/ImageDetail";
import DataDetails from "./components/DataDetails";
import { fetchGetShirt } from "../../config/services/consumers/shirts";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface DataShirtProps {
  data: {
    id: number,
    src: string,
    srcHover: string,
    name: string,
    price: string,
    oldPrice: string,
  }
}

const ShirtDetail = ({ data }: DataShirtProps) => {
  const { lg } = useMediaQuery()
  const sizeWindowWidth = useWindowDimensions();

  const flexColumn = sizeWindowWidth.width < 1025 ? 'column' : 'row'
  const widthImage = sizeWindowWidth.width < 1025 ? '100%' : '62%'
  const widthDetails = sizeWindowWidth.width < 1025 ? '100%' : '36%'

  return (
    <Box display='flex' flexDirection={flexColumn} height='auto' px={2} py={8} gap={2} mt={lg ? 5 : 0}>
      <Box width={widthImage} height='auto'>
        <ImageDetail src={data.src} srcHover={data.srcHover} />
      </Box>
      <Box width={widthDetails} height='auto'>
        <DataDetails id={data.id} name={data.name} price={data.price} oldPrice={data.oldPrice} />
      </Box>
    </Box>
  );
}

export default ShirtDetail;