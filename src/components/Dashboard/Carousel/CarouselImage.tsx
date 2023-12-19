import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import Image from "next/image";
import useMediaQueryAdapter from "../../../hooks/useMediaQuery";

const CarouselImage = () => {
  const { miniSm, maxSm, sm, miniMd, md, midSm, midMd, maxMd, lg } = useMediaQueryAdapter();
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

  const verifyMarginTopSm = miniSm ? "-4.1rem" : !maxSm ? "-3.6rem" : "-5.2rem";
  const verifyMarginTopMd = !sm && miniMd ? "-8.1rem" : midSm ? "-5.5rem" : "-7rem";
  const verifyMarginTopLg = !md && midMd ? "-6rem" : !maxMd ? "-5rem" : "-4rem";
  const verifyHeightSm = miniSm ? 460 : 500;
  const verifyHeightLg = !lg ? 1000 : 800;

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
          width='100%'
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
