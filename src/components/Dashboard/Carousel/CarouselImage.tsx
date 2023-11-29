import Carousel from "react-material-ui-carousel";
import { styled, Box } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";

const CarouselImage = () => {
  const { sm, md } = useMediaQuery()

  const src = [
    {
      id: 1,
      src: '/photos/carousel/2.svg'
    },
    {
      id: 2,
      src: '/photos/carousel/3.svg'
    },
    {
      id: 3,
      src: '/photos/carousel/4.svg'
    },
    {
      id: 4,
      src: '/photos/carousel/5.svg'
    },
    {
      id: 5,
      src: '/photos/carousel/6.svg'
    },

  ]

  return (
    <Carousel
      height='60vw'
      navButtonsAlwaysVisible={true}
      navButtonsProps={{ style: { opacity: 0.2 } }}
      indicators={true}
      indicatorContainerProps={{ style: { zIndex: 1, marginTop: '-100px', position: 'relative' } }}
    >
      {src.map((item, key) =>
        <img key={key} src={item.src} alt="wallpaper" />
      )}

    </Carousel>

  );
}

export default CarouselImage;