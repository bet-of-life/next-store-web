import { Box, Button } from "@mui/material";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Banner from "./Banner";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { MouseEvent, useRef } from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";

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
  const carousel = useRef(null)
  const { sm, md, lg } = useMediaQuery();
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const handleLeftClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  };

  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  };

  return (
    <Box
      width='100%'
      height="auto"
      display="flex"
      justifyContent='center'
      alignItems='center'
      py='1rem'
    >
      {lg &&
        <Button
          onClick={handleLeftClick}
          sx={{ marginRight: '-50px', height: '40px' }}
        >
          <ArrowCircleLeftIcon fontSize="large" sx={{ color: colors.grey[100] }} />
        </Button>
      }
      <Box
        width={md ? '90%' : '80%'}
        height='auto'
        display='flex'
        gap={sm ? '8px' : md ? '15px' : '25px'}
        justifyContent={lg ? 'start' : 'center'}
        alignItems='center'
        sx={{ overflowX: 'auto', scrollBehavior: 'smooth', '&::-webkit-scrollbar': { display: 'none' } }}
        ref={carousel}
      >
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
      {lg &&
        <Button
          onClick={handleRightClick}
          sx={{ marginLeft: '-50px', height: '40px' }}
        >
          <ArrowCircleRightIcon fontSize="large" sx={{ color: colors.grey[100] }} />
        </Button>
      }
    </Box>
  );
};

export default ShirtsCatalog;
