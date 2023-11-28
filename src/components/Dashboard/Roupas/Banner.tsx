import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";
import { useRouter } from "next/navigation";
interface BannerProps {
  id: number;
  src: string;
  srcHover: string;
  name: string;
  oldPrice: string;
  price: string;
}

const Banner = ({ id, src, srcHover, name, oldPrice, price }: BannerProps) => {
  const { mode } = useThemeMode()
  const [hoveredImage, setHoveredImage] = useState<string>(src);
  const { sm, md } = useMediaQuery();
  const router = useRouter()
  const colors = tokens(mode)

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseOver = () => {
    timeoutId = setTimeout(() => {
      setHoveredImage(srcHover);
    }, 100);
  };

  const handleMouseOut = () => {
    clearTimeout(timeoutId);
    setHoveredImage(src);
  };

  return (
    <Box
      key={id}
      onClick={() => router.push(`/shirtDetail/${id}`)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      flex="none"
      width={sm ? "163px" : md ? "230px" : "264px"}
      height={sm ? "250px" : md ? "330px" : "530px"}
      borderRadius={3}
      gap={sm ? 1 : md ? 3 : 4}
      sx={{ cursor: "pointer", bgcolor: colors.black[900], ":hover": { boxShadow: 'top: 10px;box-shadow:0 10px 10px #252525' } }}
    >
      <Box width='100%' height='380px'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          src={hoveredImage}
          alt="camisa"
          width={264}
          height={380}
          style={{ borderRadius: '8px 8px 0 0' }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        px={1}
        gap={1}
      >
        <Typography mb={1} color={colors.grey[100]} variant="body2">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ textDecoration: "line-through" }} color={colors.grey[100]}>
          R$ {oldPrice}
        </Typography>
        <Box display='flex' alignItems='end' gap={1}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color={colors.grey[100]}
          >
            R$ {price}
          </Typography>
          <Typography variant="body2">
            3x R$ {(parseFloat(price) / 3).toFixed(2)} sem juros
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
