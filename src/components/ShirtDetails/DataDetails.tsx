import { Box, Button, Typography } from "@mui/material";
import useThemeMode from "../../hooks/useThemeMode";
import { tokens } from "../../themes/theme";
import { useState } from "react";
import ShirtSizes from "./ShirtSizes";
import { data } from "./utils";
import IconsDetails from "./IconsDetails";

interface DataDetailsProps {
  name: string,
  price: string,
  oldPrice: string,
}

const DataDetails = ({ name, price, oldPrice }: DataDetailsProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const [shirtSize, setShirtSize] = useState<string>('')
  console.log(shirtSize)
  return (
    <Box ml={2}>
      <Typography variant='h5'>
        {name}
      </Typography>
      <Box bgcolor={colors.grey[800]} mt={4} py={3} px={2} sx={{ borderRadius: 2 }}>
        <Typography sx={{ textDecoration: "line-through" }}>
          R$ {oldPrice}
        </Typography>
        <Box display='flex' gap={1} alignItems='center'>
          <Typography variant="h6" fontWeight='bold'>
            R$ {price}
          </Typography>
          <Typography variant="body2">
            3x de R$ {(parseFloat(price) / 3).toFixed(2)} sem juros no cartão
          </Typography>
        </Box>
      </Box>
      <Box
        mt={5}
        display='flex'
        flexDirection='column'
        gap={2}
        justifyContent='start'
        alignItems='start'
      >
        <Typography>
          Tamanho: {shirtSize}
        </Typography>
        <Box display='flex' gap={2}>
          {data.map((item, key) => (
            <ShirtSizes key={key} value={item.value} setShirtSizes={setShirtSize} />
          ))}
        </Box>
      </Box>
      <Box display='flex' justifyContent='start' alignItems='center'>
        <Button
          variant="contained"
          sx={{ bgcolor: colors.grey[100], mt: '40px', width: '15rem', borderRadius: 2, height: '2.7rem' }}
        >
          <Typography sx={{ color: colors.grey[800], fontWeight: 'bold' }}>
            Comprar
          </Typography>
        </Button>
      </Box>
      <Box display='flex' gap={1} mt={5.5} justifyContent='start' alignItems='start' flexDirection='column'>
        <Typography>
          Compartilhe
        </Typography>
        <IconsDetails />
      </Box>
    </Box>
  );
}

export default DataDetails;