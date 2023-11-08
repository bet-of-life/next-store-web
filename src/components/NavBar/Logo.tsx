import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Box height={80} display='flex' justifyContent='center' alignItems='center'>
      <Link href='/'>
        <Image src='/logo.jpeg' alt="logo" width={120} height={50} />
      </Link>
    </Box>
  );
}

export default Logo;