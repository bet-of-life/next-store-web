import Carousel from "react-material-ui-carousel";
import { styled, Box } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";

const CarouselImage = () => {
  const { sm, md } = useMediaQuery()

  const src = [
    {
      id: 1,
      src: '/photos/carousel/4.svg'
    },
    {
      id: 2,
      src: '/photos/carousel/5.svg'
    },
    {
      id: 3,
      src: '/photos/carousel/7.svg'
    },
    {
      id: 4,
      src: '/photos/carousel/6.svg'
    },
    {
      id: 5,
      src: '/photos/carousel/2.svg'
    },

  ]

  return (
    <Box width='100%'>
      <Carousel
        height={sm ? 300 : (md ? 480 : 651)}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{ style: { opacity: 0.4 } }}
        indicators={true}
        indicatorContainerProps={{ style: { zIndex: 1, marginTop: '-50px', position: 'relative' } }}
      >
        {src.map(item =>
          <Box key={item.id}>
            <Image src={item.src} alt="wallpaper" fill />
          </Box>
        )}
      </Carousel>
    </Box>
  );
}

export default CarouselImage;