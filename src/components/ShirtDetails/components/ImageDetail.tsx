import { Box } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

interface ImageDetailProps {
  src: string,
  srcHover: string,
}

const ImageDetail = ({ src, srcHover }: ImageDetailProps) => {
  const { sm, md, lg } = useMediaQuery()
  const sizeWindowWidth = useWindowDimensions()

  const widthImage = sm ? 170 : md ? 300 : 370
  const heightImage = sm ? 280 : md ? 400 : 550

  const widthWindow = sizeWindowWidth.width < 1025 ? widthImage : sizeWindowWidth.width < 1250 ? 300 : 350
  const heightWindow = sizeWindowWidth.width < 1025 ? heightImage : sizeWindowWidth.width < 1250 ? 500 : 550

  return (
    <Box display='flex' gap={2}>
      <Image src={src} alt="camisa" width={widthWindow} height={heightWindow} />
      <Image src={srcHover} alt="camisa" width={widthWindow} height={heightWindow} />
    </Box>
  );
}

export default ImageDetail;