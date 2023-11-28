import { Box, useTheme } from "@mui/material";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Banner from "./Banner";
import { blackFemale, blackMale, whiteFemale, whiteMale, data } from "./utils";
import { useRouter } from "next/navigation";

interface dataProps {
  id: number;
  src: string;
  srcHover: string;
  name: string;
  oldPrice: string;
  price: string;
}

const ShirtsCatalog = () => {
  const router = useRouter()
  const { sm, md } = useMediaQuery();

  return (
    <Box
      width={md ? "100vw" : "75vw"}
      height={sm ? "250px" : md ? "350px" : "450px"}
      display="flex"
      justifyContent='center'
      alignItems="center"
      gap={4}
    >
      {data.map(({ id, name, oldPrice, price, src, srcHover }: dataProps) => (
        <Banner
          key={id}
          id={id}
          src={src}
          srcHover={srcHover}
          name={name}
          oldPrice={oldPrice}
          price={price}
        />
      ))}


      {/* <Banner item={whiteFemale} onClick={() => router.push('/whiteFemale')} />
      <Banner item={blackMale} />
      <Banner item={whiteMale} />
      <Banner item={blackFemale} /> */}
    </Box>
  );
};

export default ShirtsCatalog;
