import { Box } from "@mui/material";
import Image from "next/image";

const Logo = () => {
  return (
    <Box width='33.33%' height='100px' display="flex" justifyContent='center' alignItems='center'>
      <Image src='/logo.jpeg' alt="logo" width={120} height={50} />
    </Box>
  );
}

export default Logo;