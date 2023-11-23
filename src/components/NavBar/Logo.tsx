import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Box mt={1} height={"100%"} display='flex' justifyContent='center' alignItems='center'>
      <Link href='/'>
        <Image src='/logo.png' alt="logo" width={150} height={60} />
      </Link>
    </Box>
  );
}

export default Logo;