import { Box, Typography, Button, useMediaQuery, Theme } from "@mui/material"
import { MouseEvent, useRef, useState } from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const BannerCamisas = () => {
  const carousel = useRef(null)
  const smDown = useMediaQuery((theme: Theme) => (theme.breakpoints.down('sm')))

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
      width={smDown ? '100vw' : '90vw'}
      height={smDown ? '300px' : '400px'}
      display='flex'
      alignItems='center'
    >
      <Button
        onClick={handleLeftClick}
        sx={{ marginRight: smDown ? '-50px' : null, height: smDown ? '40px' : '400px' }}
      >
        <ArrowBackIosNewOutlinedIcon fontSize="large" />
      </Button>
      <Box
        display='flex'
        flexDirection='row'
        maxWidth={smDown ? '100vw' : '79vw'}
        gap={2}
        ref={carousel}
        sx={{ overflowX: 'auto', scrollBehavior: 'smooth', '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {src.map((item) => (
          <Box
            key={item.id}
            display='flex'
            flexDirection='column'
            flex='none'
            width={smDown ? '163px' : '230px'}
            height={smDown ? '290px' : '400px'}
            bgcolor='white'
            borderRadius={3}
            gap={smDown ? 2 : 5}
            pt={smDown ? 2 : 4}
            sx={{ cursor: 'pointer', ":hover": { boxShadow: 'top:-10px;box-shadow:0 10px 10px #666' } }}
          >
            <img src={item.src} alt="camisa" />

            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              color='black'
            >
              <Typography
                variant="body1"
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
                width={smDown ? 100 : 200}
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
        sx={{ marginLeft: smDown ? '-50px' : null, height: smDown ? '40px' : '400px' }}
      >
        <ArrowForwardIosOutlinedIcon fontSize="large" />
      </Button>
    </Box>
  );
}

export default BannerCamisas;