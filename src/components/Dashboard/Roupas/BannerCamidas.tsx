import Image from "next/image";
import { Box, Tabs, Typography, Card, CardMedia, CardContent, CardActionArea } from "@mui/material"
import { useState } from "react";

const BannerCamisas = () => {

  const [value, setValue] = useState(0);

  const src = [
    {
      id: 1,
      src: '/camisas/camisa1.png'
    },
    {
      id: 2,
      src: '/camisas/camisa2.jpg'
    },
    {
      id: 3,
      src: '/camisas/camisa3.jpg'
    },
    {
      id: 4,
      src: '/camisas/camisa4.jpg'
    },
    {
      id: 5,
      src: '/camisas/camisa5.jpg'
    },
    {
      id: 6,
      src: '/camisas/camisa6.jpg'
    },
    {
      id: 7,
      src: '/camisas/camisa7.jpg'
    },
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box maxWidth='100%'>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        TabIndicatorProps={{ style: { background: 'none' } }}
      >
        {src.map((item) => (
          <Card key={item.id} sx={{ width: '19%', maxWidth: '19%', minWidth: '19%', marginRight: '15px', marginTop: '10px', marginBottom: '50px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='300'
                image={item.src}
                alt={item.src}
              />
              <CardContent>
                <Typography variant="body2">
                  his impressive paella is a perfe dasdasdasdada
                </Typography>
                <Typography variant="h5" fontWeight='bold' marginTop={3}>
                  R$ 200,00
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Tabs>
    </Box>
  );
}

export default BannerCamisas;