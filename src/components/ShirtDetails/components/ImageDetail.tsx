import { Box } from "@mui/material";
import Image from "next/image";
import useMediaQueryAdapter from "../../../hooks/useMediaQuery";

interface ImageDetailProps {
  srcDetail1: string,
  srcDetail2: string,
  srcDetail3: string,
}

const ImageDetail = ({ srcDetail1, srcDetail2, srcDetail3 }: ImageDetailProps) => {
  const { sm, md, tablet, tv } = useMediaQueryAdapter()

  const widthImage = sm ? 170 : md ? 300 : 370
  const heightImage = sm ? 280 : md ? 400 : 550

  const widthWindow = tablet ? widthImage : tv ? 300 : 350
  const heightWindow = tablet ? heightImage : tv ? 500 : 550

  return (
    <Box display='flex' gap={2}>
      <Image src={srcDetail3} alt="camisa" width={widthWindow} height={heightWindow} />
      <Image src={srcDetail2} alt="camisa" width={widthWindow} height={heightWindow} />
    </Box>
  );
}

export default ImageDetail;