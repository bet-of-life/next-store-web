

import { Box, Button, Typography } from "@mui/material";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";
import { useState } from "react";
import ShirtSizes from "./ShirtSizes";
import { data } from "../utils";
import IconsDetails from "./IconsDetails";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

interface DataDetailsProps {
  id: number,
  name: string,
  price: string,
  oldPrice: string,
}

const DataDetails = ({ id, name, price, oldPrice }: DataDetailsProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const router = useRouter()
  const [shirtSize, setShirtSize] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  //const [cor, setCor] = useState<string>('White')

  const words = name?.split(' ')
  const num = words.length - 1

  const color = words[num] === 'White' ? 'White' : 'Black'
  const bgColor = color === 'White' ? 'white' : 'black'

  return (
    <Box>
   
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
        </Box>
      </Box>
      <Box display='flex' height={100} gap={1} alignItems='center'>
        <Box>
          <Typography>
            Cor: {color}
          </Typography>
        </Box>
        <Box width={30} height={30} borderRadius={100} bgcolor={bgColor}>
        </Box>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap={3}
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
          onClick={() => shirtSize ? router.push(`/shoppingCart/${id}/${shirtSize}/${color}`) : setError(true)}
        >
          <Typography sx={{ color: colors.grey[800], fontWeight: 'bold' }}>
            Comprar
          </Typography>
          
         {error && toast.error("Por favor, preencha um tamanho!", {
          autoClose: 2000,
          onClose: () => setError(false)
         })}
         
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