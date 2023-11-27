import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";
interface BannerProps {
  item: {
    id: number;
    src: string;
    srcHover: string;
    name: string;
    oldPrice: string;
    price: string;
  };
}
const Banner = ({ item }: BannerProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
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
      width={sm ? "163px" : md ? "230px" : "250px"}
      height={sm ? "250px" : md ? "330px" : "450px"}
      borderRadius={3}
      gap={sm ? 1 : md ? 3 : 4}
      sx={{ cursor: "pointer", bgcolor: colors.black[900], ":hover": { boxShadow: 'top: 10px;box-shadow:0 10px 10px #252525' } }}
    >
      <Box width='100%' height='310px'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          src={hoveredImage}
          alt="camisa"
          width={250}
          height={310}
          style={{ borderRadius: '8px 8px 0 0' }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        px={1}
      >
        <Typography mb={1} color={colors.grey[100]} variant="body2">
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ textDecoration: "line-through" }} color={colors.grey[100]}>
          R$ {item.oldPrice}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          mt={1}
          width={sm ? 100 : 200}
          color={colors.grey[100]}
        >
          R$ {item.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
