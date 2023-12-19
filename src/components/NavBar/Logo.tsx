import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Box mt={0.5} height="100%" display='flex' justifyContent='center' alignItems='center'>
      <Link href='/'>
        <Image src='/logo.png' alt="logo" width={100} height={50} />
      </Link>
    </Box>
  );
}

export default Logo;