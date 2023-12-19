import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";
import { useRouter } from "next/navigation";
import useMediaQueryAdapter from "../../../hooks/useMediaQuery";
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
  const { sm, md, lg } = useMediaQueryAdapter();
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

  const customWidth = sm ? 163 : md ? 200 : lg ? 220 : 250
  const customHeight = sm ? 365 : md ? 400 : lg ? 435 : 500

  return (
    <Box
      key={id}
      onClick={() => router.push(`/shirtDetail/${id}`)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      flex="none"
      width={customWidth}
      height={customHeight}
      borderRadius={3}
      gap={sm ? 0.5 : md ? 1 : 1.5}
      sx={{ cursor: "pointer", bgcolor: colors.black[900], ":hover": { boxShadow: 'top: 10px;box-shadow:0 10px 10px #252525' } }}
    >
      <Box width='100%' height={customHeight / 1.35}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          src={hoveredImage}
          alt="camisa"
          width={customWidth}
          height={customHeight / 1.38}
          style={{ borderRadius: '8px 8px 0 0' }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        px={1}
        gap={sm ? '0.3px' : md ? '1px' : '6px'}
      >
        <Typography
          mb={0.5}
          color={colors.grey[100]}
          variant={sm ? "caption" : "body2"}
        >
          {name}
        </Typography>
        <Typography
          variant={sm ? "caption" : "body2"}
          sx={{ textDecoration: "line-through" }}
          color={colors.grey[100]}
        >
          R$ {oldPrice}
        </Typography>
        <Typography
          variant={sm ? "body2" : "body1"}
          fontWeight="bold"
          color={colors.grey[100]}
        >
          R$ {price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
