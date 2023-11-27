import { Box, Typography, Button, useTheme } from "@mui/material"
import { MouseEvent, useRef } from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Image from "next/image";
import useThemeMode from "../../../hooks/useThemeMode";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { tokens } from "../../../themes/theme";

const BannerCamisas = () => {
  const carousel = useRef(null)
  const { mode } = useThemeMode()
  const { sm, md } = useMediaQuery()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const src = [
    {
      id: 1,
      src: '/camisas/camisa1.png',
      oldPrice: '200,00',
      price: '150,00'
    },
    {
      id: 2,
      src: '/camisas/camisa2.jpg',
      oldPrice: '200,00',
      price: '150,00'
    },
    {
      id: 3,
      src: '/camisas/camisa3.jpg',
      oldPrice: '200,00',
      price: '150,00'
    },
    {
      id: 4,
      src: '/camisas/camisa4.jpg',
      oldPrice: '200,00',
      price: '150,00'
    },
    {
      id: 5,
      src: '/camisas/camisa5.jpg',
      oldPrice: '200,00',
      price: '150,00'
    },
    {
      id: 6,
      src: '/camisas/camisa6.jpg',
      oldPrice: '200,00',
      price: '150,00'
    },
    {
      id: 7,
      src: '/camisas/camisa7.jpg',
      oldPrice: '200,00',
      price: '150,00'
    },
  ]

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
      width={md ? '100vw' : '85vw'}
      height={sm ? '250px' : (md ? '350px' : '400px')}
      display='flex'
      alignItems='center'
    >
      <Button
        onClick={handleLeftClick}
        sx={{ marginRight: md ? '-50px' : null, height: md ? '40px' : '100%' }}
      >
        <ArrowBackIosNewOutlinedIcon fontSize="large" sx={{ color: colors.grey[100] }} />
      </Button>
      <Box
        display='flex'
        flexDirection='row'
        maxWidth={md ? '100vw' : '80vw'}
        gap={3}
        paddingX={1}
        ref={carousel}
        sx={{ overflowX: 'auto', scrollBehavior: 'smooth', '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {src.map((item) => (
          <Box
            key={item.id}
            display='flex'
            flexDirection='column'
            alignItems='center'
            flex='none'
            width={sm ? '163px' : (md ? '230px' : '272px')}
            height={sm ? '250px' : (md ? '330px' : '400px')}
            bgcolor='white'
            borderRadius={3}
            gap={sm ? 1 : (md ? 3 : 4)}
            pt={sm ? 1 : 4}
            sx={{ cursor: 'pointer', ":hover": { boxShadow: 'top:-10px;box-shadow:0 10px 10px #666' } }}
          >
            <Image
              src={item.src}
              alt="camisa"
              width={sm ? 120 : (md ? 150 : 200)}
              height={sm ? 130 : (md ? 150 : 220)} />

            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              color='black'
            >
              <Typography
                fontWeight='bold'
                mb={1}
              >
                Camisa Oficial
              </Typography>
              <Typography
                variant="body2"
                sx={{ textDecoration: 'line-through' }}
              >
                R$ {item.oldPrice}
              </Typography>
              <Typography
                variant="body1"
                fontWeight='bold'
                mt={1}
                bgcolor='#ff7e3b'
                width={sm ? 100 : 200}
                textAlign='center'
                borderRadius={3}
              >
                R$ {item.price}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        onClick={handleRightClick}
        sx={{ marginLeft: md ? '-50px' : null, height: md ? '40px' : '100%' }}
      >
        <ArrowForwardIosOutlinedIcon fontSize="large" sx={{ color: colors.grey[100] }} />
      </Button>
    </Box>
  );
}

export default BannerCamisas;