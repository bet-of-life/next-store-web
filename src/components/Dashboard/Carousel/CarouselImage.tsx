import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material";
import Image from "next/image";

const CarouselImage = () => {
  const theme = useTheme()

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
  return (
    <>
      <Carousel height={theme.spacing(70)} navButtonsAlwaysVisible={true} navButtonsProps={{ style: { opacity: 0.4 } }} >
        {src.map(item => <Image src={item.src} alt="wallpaper" fill key={item.id} />)}
      </Carousel>
    </>
  );
}

export default CarouselImage;