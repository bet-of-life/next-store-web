import Carousel from "react-material-ui-carousel";
import { styled, Box } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";

const CarouselImage = () => {
  const { sm, md } = useMediaQuery()

  const src = [
    {
      id: 1,
      src: '/carousel/wallpaper1.jpg'
    },
    {
      id: 2,
      src: '/carousel/wallpaper2.jpg'
    },
    {
      id: 3,
      src: '/carousel/wallpaper3.jpg'
    },
    {
      id: 4,
      src: '/carousel/wallpaper4.jpg'
    },
    {
      id: 5,
      src: '/carousel/wallpaper5.jpg'
    },
  ]

  const CustomBox = styled(Box)(({ theme }) => ({
    width: '100%',

  }))

  return (
    <CustomBox>
      <Carousel
        height={sm ? 300 : (md ? 480 : 621)}
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
    </CustomBox>
  );
}

export default CarouselImage;