import { Box } from "@mui/material";
import Image from "next/image";

interface ImageDetailProps {
  src: string,
  srcHover: string,
}

const ImageDetail = ({ src, srcHover }: ImageDetailProps) => {
  return (
    <Box display='flex' gap={2}>
      <Image src={src} alt="camisa" width={350} height={520} />
      <Image src={srcHover} alt="camisa" width={350} height={520} />
    </Box>
  );
}

export default ImageDetail;