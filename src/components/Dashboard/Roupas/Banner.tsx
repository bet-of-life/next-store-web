import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
interface BannerProps {
    item: {
      id: number;
      src: string;
      srcHover: string;
      oldPrice: string;
      price: string;
    };
  }
const Banner = ({ item }: BannerProps) => {
  const { sm, md } = useMediaQuery();
  const [hoveredImage, setHoveredImage] = useState<string>(item.src);

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseOver = () => {
    timeoutId = setTimeout(() => {
        setHoveredImage(item.srcHover);
      }, 100);
  };

  const handleMouseOut = () => {
    clearTimeout(timeoutId);
    setHoveredImage(item.src);
  };

  return (
    <Box
      key={item.id}
      display="flex"
      flexDirection="column"
      alignItems="center"
      flex="none"
      width={sm ? "163px" : md ? "230px" : "450px"}
      height={sm ? "250px" : md ? "330px" : "400px"}
      bgcolor="white"
      borderRadius={3}
      gap={sm ? 1 : md ? 3 : 4}
      sx={{
        cursor: "pointer"
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Image
        src={hoveredImage}
        alt="camisa"
        width={sm ? 120 : md ? 150 : 450}
        height={sm ? 130 : md ? 150 : 300}
        style={{ borderRadius: 8 }}
      />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="black"
      >
        <Typography fontWeight="bold" mb={1}>
          Camisa Oficial
        </Typography>
        <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
          R$ {item.oldPrice}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          mt={1}
          bgcolor="#ff7e3b"
          width={sm ? 100 : 200}
          textAlign="center"
          borderRadius={3}
        >
          R$ {item.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
