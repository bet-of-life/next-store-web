import Carousel from "react-material-ui-carousel";
import { styled, Box } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

const CarouselImage = () => {
  const { sm, md } = useMediaQuery();
  const sizeWindowWidth = useWindowDimensions();
  const src = [
    {
      id: 1,
      src: "/photos/carousel/4.svg",
    },
    {
      id: 2,
      src: "/photos/carousel/5.svg",
    },
    {
      id: 3,
      src: "/photos/carousel/6.svg",
    },
    {
      id: 4,
      src: "/photos/carousel/2.svg",
    },
  ];

  const verifyMarginTopSm =
    sizeWindowWidth.width < 400
      ? "-4.1rem"
      : sizeWindowWidth.width >= 500
        ? "-3.6rem"
        : "-5.2rem";
  const verifyMarginTopMd =
    sizeWindowWidth.width >= 600 && sizeWindowWidth.width < 700
      ? "-8.1rem"
      : sizeWindowWidth.width > 750
        ? "-5.5rem"
        : "-7rem";
  const verifyMarginTopLg =
    sizeWindowWidth.width >= 900 && sizeWindowWidth.width <= 1000
      ? "-6rem"
      : sizeWindowWidth.width >= 1100
        ? "-5rem"
        : "-4rem";
  const verifyHeightSm = sizeWindowWidth.width < 400 ? 460 : 500;
  const verifyHeightLg = sizeWindowWidth.width > 1200 ? 1000 : 800;

  return (
    <Carousel
      height={sm ? verifyHeightSm : md ? 700 : verifyHeightLg}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{ style: { color: "black", backgroundColor: "white", marginTop: '70px' } }}
      indicators={true}
      indicatorContainerProps={{
        style: { zIndex: 1, marginTop: "-200px", position: "relative" },
      }}
      sx={{
        mt: sm ? verifyMarginTopSm : md ? verifyMarginTopMd : verifyMarginTopLg,
      }}
    >
      {src.map((item, key) => (
        <Box key={key}
          width={sizeWindowWidth.width}
          height={sm ? verifyHeightSm : md ? 700 : verifyHeightLg}
        >
          <Image src={item.src} alt="wallpaper" fill={true} />
        </Box>
      )
      )}
    </Carousel>
  );
};

export default CarouselImage;
