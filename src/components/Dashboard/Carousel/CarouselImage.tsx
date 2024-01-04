import { Box } from "@mui/material";
import Image from "next/image";
import useMediaQueryAdapter from "../../../hooks/useMediaQuery";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CarouselImage = () => {
  const { sm, tablet } = useMediaQueryAdapter();
  const src = [
    {
      id: 2,
      src: "/photos/carousel/jpeg/2.jpeg",
    },
    {
      id: 3,
      src: "/photos/carousel/jpeg/3.jpeg",
    },
    {
      id: 4,
      src: "/photos/carousel/jpeg/4.jpeg",
    },
    {
      id: 5,
      src: "/photos/carousel/jpeg/5.jpeg",
    },
    {
      id: 6,
      src: "/photos/carousel/jpeg/6.jpeg",
    },
    {
      id: 7,
      src: "/photos/carousel/jpeg/7.jpeg",
    },
  ];

  const marginTop = tablet ? '58px' : '0px';
  const widthButton = sm ? '25px' : '45px'
  const heigthButton = sm ? '25px' : '45px'
  const fontSizeIcon = sm ? 'small' : 'medium'

  const NextArrow = ({ onClick }: any) => {
    return (
      <Box
        position='absolute'
        onClick={onClick}
        display='flex'
        justifyContent='center'
        alignItems='center'
        bgcolor='#a2a2a2'
        width={widthButton}
        height={heigthButton}
        sx={{
          cursor: 'pointer',
          top: '45%',
          right: 5,
          borderRadius: '100%',
          ":hover": { bgcolor: 'white' }
        }}>
        <ArrowForwardIosIcon fontSize={fontSizeIcon} color="primary" />
      </Box>
    )
  }

  const PrevArrow = ({ onClick }: any) => {
    return (
      <Box
        position='absolute'
        onClick={onClick}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width={widthButton}
        height={heigthButton}
        bgcolor='#a2a2a2'
        sx={{
          cursor: 'pointer',
          top: '45%',
          left: 5,
          borderRadius: '100%',
          zIndex: 'tooltip',
          ":hover": { bgcolor: 'white' }
        }}>
        <ArrowBackIosIcon fontSize={fontSizeIcon} color="primary" sx={{ marginLeft: 1 }} />
      </Box>
    )
  }


  const settings = {
    infinite: true,
    dots: false,
    dotsClass: `slick-dots slick-thumbs`,
    // customPaging: (i) => (
    //     <Box height={10} width={10} mt='-50px' display='flex' justifyContent='center' borderRadius='100%' alignItems='center'
    //       bgcolor={i == 'active' ? 'blue' : 'white'}
    //       sx={{ ":hover": { bgcolor: 'grey' } }}
    //     >
    //     </Box>
    //   ),
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box mt={marginTop}>
      <Slider {...settings}>
        {src.map((item, key) => (
          <Box key={key}>
            <Image
              src={item.src}
              alt="slider"
              width={1600}
              height={650}
              layout="responsive"
              style={{ position: 'relative', }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselImage;
