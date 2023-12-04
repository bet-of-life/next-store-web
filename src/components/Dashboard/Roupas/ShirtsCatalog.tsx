import { Box } from "@mui/material";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Banner from "./Banner";

interface DataShirtProps {
  data: [{
    id: number;
    src: string;
    srcHover: string;
    name: string;
    oldPrice: string;
    price: string;
  }]
}

const ShirtsCatalog = ({ data }: DataShirtProps) => {
  const { sm, md } = useMediaQuery();

  return (
    <Box
      width='100%'
      height="auto"
      display="flex"
      justifyContent='center'
    >
      <Box width={md ? '100%' : '75vw'} height='auto' display='flex' gap='1.5rem' justifyContent='center'>
        {data.map((data) => (
          <Banner
            key={data.id}
            id={data.id}
            src={data.src}
            srcHover={data.srcHover}
            name={data.name}
            oldPrice={data.oldPrice}
            price={data.price}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ShirtsCatalog;
